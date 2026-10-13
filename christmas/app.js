import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// ============================================================
// 기본 설정 및 뷰어 초기화
// ============================================================

const container = document.getElementById('canvas-container');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf4f4f4);

const camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth / container.clientHeight,
    0.01,
    10000
);
camera.position.set(0, 3, 10);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
container.appendChild(renderer.domElement);

const ambientLight = new THREE.HemisphereLight(0xffffff, 0x888888, 2.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;

const loader = new GLTFLoader();

function loadGLB(path) {
    return new Promise((resolve, reject) => {
        const cacheBuster = `?v=${Date.now()}`;
        const fullPath = path.startsWith('model/') ? path : `model/${path}`;

        loader.load(
            `${fullPath}${cacheBuster}`,
            gltf => resolve(gltf.scene),
            undefined,
            error => {
                console.error('GLB 로드 실패:', fullPath, error);
                reject(error);
            }
        );
    });
}

const productGroup = new THREE.Group();
scene.add(productGroup);

const PARTS = {
    snow: { file: 'snow.glb', name: '눈', price: 1000 }
};

const THUMBNAIL_ROTATIONS = {};

let baseModel = null;
let selectedBase = 'case.glb';
let partModel = null;

// ============================================================
// 카메라 맞춤 함수
// ============================================================
function fitCameraToProduct() {
    if (productGroup.children.length === 0) return;

    const box = new THREE.Box3().setFromObject(productGroup);
    if (box.isEmpty()) return;

    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxSize = Math.max(size.x, size.y, size.z);

    productGroup.position.sub(center);

    const verticalFOV = THREE.MathUtils.degToRad(camera.fov);
    const fitHeightDistance = maxSize / (2 * Math.tan(verticalFOV / 2));
    const fitWidthDistance = fitHeightDistance / camera.aspect;
    let distance = Math.max(fitHeightDistance, fitWidthDistance) * 2.0;
    if (distance === 0 || isNaN(distance)) distance = 10;

    camera.position.set(distance * 0.7, distance * 0.5, distance);
    controls.target.set(0, 0, 0);
    camera.near = Math.max(0.001, distance / 1000);
    camera.far = distance * 1000;
    camera.updateProjectionMatrix();
    controls.update();
}

// ============================================================
// 모델 로드 로직
// ============================================================
async function loadBase(fileName) {
    if (baseModel) {
        productGroup.remove(baseModel);
        baseModel = null;
    }

    try {
        baseModel = await loadGLB(fileName);
        productGroup.add(baseModel);
        fitCameraToProduct();
    } catch (error) {
        console.error('Base 로드 실패:', error);
    }
}

async function loadPart(partKey) {
    if (partModel) {
        productGroup.remove(partModel);
        partModel = null;
    }

    if (partKey === 'none' || partKey === 'all-none') return;

    const partInfo = PARTS[partKey];
    if (!partInfo) return;

    try {
        partModel = await loadGLB(partInfo.file);
        productGroup.add(partModel);
        fitCameraToProduct();
    } catch (error) {
        console.error('파츠 로드 실패:', error);
    }
}

// ============================================================
// 이벤트 리스너 연결 (HTML onclick 대체)
// ============================================================
function initEventListeners() {
    // 1. 케이스 선택
    document.querySelectorAll('[data-base]').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('[data-base]').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedBase = card.dataset.base;
            loadBase(selectedBase);
        });
    });

    // 2. 파츠 선택
    document.querySelectorAll('[data-part]').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('[data-part], .option').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            loadPart(card.dataset.part);
        });
    });

    // 제거(NONE) 버튼 등 data-part가 없는 일반 옵션 카드 처리
    document.querySelectorAll('.option:not([data-part]):not([data-base])').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.option').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            if (card.textContent.includes('제거')) {
                loadPart('none');
            }
        });
    });

    // 3. 슬롯 선택
    document.querySelectorAll('.slot').forEach(slot => {
        slot.addEventListener('click', () => {
            document.querySelectorAll('.slot').forEach(s => s.classList.remove('active'));
            slot.classList.add('active');
        });
    });

    // 4. 색상 선택
    document.querySelectorAll('.color-grid .color').forEach(colorEl => {
        colorEl.addEventListener('click', () => {
            // 부모 그리드 영역 구분 (케이스 색상 등)
            const parentGrid = colorEl.closest('.color-grid');
            if (parentGrid) {
                parentGrid.querySelectorAll('.color').forEach(c => c.classList.remove('active'));
            }
            colorEl.classList.add('active');

            const colorHex = colorEl.style.backgroundColor || colorEl.dataset.color;
            if (colorHex && baseModel) {
                baseModel.traverse(child => {
                    if (child.isMesh && child.material) {
                        child.material.color.set(colorHex);
                    }
                });
            }
        });
    });
}

// ============================================================
// 썸네일 캐싱 시스템
// ============================================================
const THUMBNAIL_CACHE_VERSION = 'thumb-v1';
const THUMBNAIL_DB_NAME = 'FOMORA_ThumbnailDB';
const THUMBNAIL_STORE_NAME = 'thumbnails';
let thumbnailDBPromise = null;

function openThumbnailDB() {
    if (thumbnailDBPromise) return thumbnailDBPromise;
    thumbnailDBPromise = new Promise((resolve, reject) => {
        if (!('indexedDB' in window)) {
            reject(new Error('IndexedDB 지원 안함'));
            return;
        }
        const request = indexedDB.open(THUMBNAIL_DB_NAME, 1);
        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(THUMBNAIL_STORE_NAME)) {
                db.createObjectStore(THUMBNAIL_STORE_NAME);
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
    return thumbnailDBPromise;
}

async function getSavedThumbnail(key) {
    const db = await openThumbnailDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(THUMBNAIL_STORE_NAME, 'readonly');
        const req = tx.objectStore(THUMBNAIL_STORE_NAME).get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
    });
}

async function saveThumbnail(key, dataURL) {
    const db = await openThumbnailDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(THUMBNAIL_STORE_NAME, 'readwrite');
        tx.objectStore(THUMBNAIL_STORE_NAME).put(dataURL, key);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}

function showSavedThumbnail(card, dataURL) {
    const targetContainer = card.querySelector('.option-image') || card;
    if (targetContainer.querySelector('.part-thumbnail-image')) return;
    if (targetContainer.classList.contains('option-image')) {
        targetContainer.innerHTML = '';
    }
    const img = document.createElement('img');
    img.className = 'part-thumbnail-image';
    img.src = dataURL;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    targetContainer.prepend(img);
}

async function renderOptionThumbnails() {
    const cards = document.querySelectorAll('[data-part], [data-base], [data-model]');
    if (!cards.length) return;

    const thumbRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    thumbRenderer.setSize(160, 120);
    thumbRenderer.outputColorSpace = THREE.SRGBColorSpace;
    thumbRenderer.setClearColor(0xffffff, 0);

    const thumbScene = new THREE.Scene();
    thumbScene.add(new THREE.HemisphereLight(0xffffff, 0x888888, 2));
    const thumbLight = new THREE.DirectionalLight(0xffffff, 3);
    thumbLight.position.set(4, 6, 8);
    thumbScene.add(thumbLight);
    const thumbCamera = new THREE.PerspectiveCamera(35, 160 / 120, 0.01, 1000);

    for (const card of cards) {
        const partName = card.dataset.part;
        let fileName = partName ? PARTS[partName]?.file : (card.dataset.base || card.dataset.model);
        if (!fileName || fileName === 'none') continue;

        const cacheKey = `${THUMBNAIL_CACHE_VERSION}|${fileName}|160x120`;
        const saved = await getSavedThumbnail(cacheKey);
        if (saved) {
            showSavedThumbnail(card, saved);
            continue;
        }

        try {
            const model = await loadGLB(fileName);
            const previewModel = model.clone(true);
            thumbScene.add(previewModel);
            previewModel.updateMatrixWorld(true);

            const box = new THREE.Box3().setFromObject(previewModel);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());
            previewModel.position.sub(center);

            const maxSize = Math.max(size.x, size.y, size.z);
            if (maxSize > 0) {
                const distance = (maxSize / (2 * Math.tan(THREE.MathUtils.degToRad(thumbCamera.fov / 2)))) * 1.7;
                thumbCamera.position.set(distance * 0.5, distance * 0.5, distance);
                thumbCamera.lookAt(0, 0, 0);
                thumbCamera.updateProjectionMatrix();

                thumbRenderer.render(thumbScene, thumbCamera);
                const dataURL = thumbRenderer.domElement.toDataURL('image/png');
                showSavedThumbnail(card, dataURL);
                await saveThumbnail(cacheKey, dataURL);
            }
            thumbScene.remove(previewModel);
        } catch (e) {
            console.error('썸네일 생성 실패:', fileName);
        }
    }
    thumbRenderer.dispose();
}

// ============================================================
// 초기 실행
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    loadBase(selectedBase);
    renderOptionThumbnails();
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();