import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// ============================================================
// 기본 설정
// ============================================================

const container = document.getElementById('canvas-container');


// ============================================================
// Scene
// ============================================================

const scene = new THREE.Scene();

scene.background = new THREE.Color(0xf4f4f4);


// ============================================================
// Camera
// ============================================================

const camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth / container.clientHeight,
    0.01,
    10000
);

camera.position.set(
    0,
    3,
    10
);


// ============================================================
// Renderer
// ============================================================

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.setSize(
    container.clientWidth,
    container.clientHeight
);

renderer.outputColorSpace =
    THREE.SRGBColorSpace;

container.appendChild(
    renderer.domElement
);


// ============================================================
// Light
// ============================================================

const ambientLight =
    new THREE.HemisphereLight(
        0xffffff,
        0x888888,
        2.5
    );

scene.add(
    ambientLight
);


const directionalLight =
    new THREE.DirectionalLight(
        0xffffff,
        3
    );

directionalLight.position.set(
    5,
    10,
    7
);

scene.add(
    directionalLight
);


// ============================================================
// OrbitControls
// ============================================================

const controls =
    new OrbitControls(
        camera,
        renderer.domElement
    );

controls.enableDamping = true;
controls.dampingFactor = 0.08;

controls.minDistance = 0.1;
controls.maxDistance = 10000;

controls.target.set(
    0,
    0,
    0
);


// ============================================================
// GLTF Loader
// ============================================================

const loader =
    new GLTFLoader();


// ============================================================
// 제품 전체 그룹
// ============================================================

const productGroup =
    new THREE.Group();

scene.add(
    productGroup
);


// ============================================================
// 파츠 목록
// ============================================================

const PARTS = {

    egg: {
        file: 'egg.glb',
        name: '달걀',
        price: 1000
    },

    takoyaki: {
        file: 'takoyaki.glb',
        name: '타코야키',
        price: 1000
    },

    yakgwa: {
        file: 'yakgwa.glb',
        name: '약과',
        price: 800
    },

    hodu: {
        file: 'hodu.glb',
        name: '호두',
        price: 1000
    },

    gukhwa: {
        file: 'gukhwa.glb',
        name: '국화',
        price: 1000
    },

    sibwon: {
        file: 'sibwon.glb',
        name: '십원',
        price: 1000
    },

    peanut: {
        file: 'peanut.glb',
        name: '피넛',
        price: 1000
    },

    chicken: {
        file: 'chicken.glb',
        name: '닭',
        price: 1500
    },

    chickenegg: {
        file: 'chicken egg.glb',
        name: '닭알',
        price: 500
    },

    chick: {
        file: 'chick.glb',
        name: '병아리',
        price: 1500
    },

    lip: {
        file: 'lip.glb',
        name: '입술',
        price: 1000
    },

    peach: {
        file: 'peach.glb',
        name: '복숭아',
        price: 800
    },

    apple: {
        file: 'apple.glb',
        name: '사과',
        price: 800
    },

    wing_R: {
        file: 'wing_R.glb',
        name: '날개_R',
        price: 800
    },

    wing_L: {
        file: 'wing_L.glb',
        name: '날개_L',
        price: 800
    },

    wing_R_all: {
        file: 'wing_R_all.glb',
        name: '날개_R',
        price: 1000
    },

    wing_L_all: {
        file: 'wing_L_all.glb',
        name: '날개_L',
        price: 1000
    },

    'marshmallow.01': {
        file: 'marshmallow.01.glb',
        name: '마쉬멜로우.01',
        price: 1000
    },

    'marshmallow.02': {
        file: 'marshmallow.02.glb',
        name: '마쉬멜로우.02',
        price: 1000
    },

    macaroon_P: {
        file: 'macaroon_P.glb',
        name: '마카롱P',
        price: 1000
    },

    macaroon_B: {
        file: 'macaroon_B.glb',
        name: '마카롱B',
        price: 1000
    },

    pepero: {
        file: 'pepero.glb',
        name: '빼빼로',
        price: 500
    },

    pretzel: {
        file: 'pretzel.glb',
        name: '프레첼',
        price: 1000
    },

    cookie: {
        file: 'cookie.glb',
        name: '쿠키',
        price: 1000
    },

    potato_hotdog: {
        file: 'potato_hotdog.glb',
        name: '감자핫도그',
        price: 1200
    },

    hotdog: {
        file: 'hotdog.glb',
        name: '핫도그',
        price: 1200
    },

    corn: {
        file: 'corn.glb',
        name: '콘',
        price: 1200
    },
    
    sodduck: {
        file: 'sodduck.glb',
        name: '소떡소떡',
        price: 1200
    },

    twister_potato: {
        file: 'twister_potato.glb',
        name: '회오리감자',
        price: 1000
    },

    stick_dduck: {
        file: 'stick_dduck.glb',
        name: '떡꼬치',
        price: 1000
    },

    pizza_seolgi: {
        file: 'pizza_seolgi.glb',
        name: '피자설기',
        price: 1200
    },

    dubai: {
        file: 'dubai.glb',
        name: '두쫀쿠',
        price: 1000
    },

    tri_gimbap: {
        file: 'tri_gimbap.glb',
        name: '삼각김밥',
        price: 1000
    },

    Bok: {
        file: 'Bok.glb',
        name: '복',
        price: 1000
    },

    hangwa: {
        file: 'hangwa.glb',
        name: '한과',
        price: 1000
    },

    color_jeon: {
        file: 'color_jeon.glb',
        name: '꼬치전',
        price: 1000
    },

    fried_egg: {
        file: 'fried_egg.glb',
        name: '계란후라이',
        price: 1000
    },

    dimsum: {
        file: 'dimsum.glb',
        name: '딤섬',
        price: 1000
    },

    narutomaki: {
        file: 'narutomaki.glb',
        name: '나루토마키',
        price: 800
    },

    ramen: {
        file: 'ramen.glb',
        name: '컵라면',
        price: 1000
    },

    wafle: {
        file: 'wafle.glb',
        name: '와플',
        price: 1000
    }

};

// ============================================================
// 토핑 옵션
// ============================================================

const TOPPINGS = {
    strawberry: {
        file: 'topping_strawberry.glb',
        name: '딸기 토핑',
        price: 1000
    },

    cream: {
        file: 'topping_cream,jam.glb',
        name: '크림잼 토핑',
        price: 1000
    },

    whipcream: {
        file: 'topping_whipcream.glb',
        name: '생크림 토핑',
        price: 800
    }
};


// 토핑 위치 설정
// gap은 파츠와 토핑 사이의 간격이며 Three.js 모델 단위입니다.
const TOPPING_PLACEMENT = {
    top: {
        name: '위쪽',
        gap: 0.01
    },

    side: {
        name: '옆쪽',
        gap: 0.01
    }
};

const TOPPING_OFFSET = {
    x: 0,
    y: 0,
    z: 0
};



// ============================================================
// 축 / 스위치 옵션
// ============================================================

const SWITCH_OPTIONS = {

    blue: {
        file: 'blue.glb',
        name: '청축',
        price: 0
    },

    brown: {
        file: 'brown.glb',
        name: '갈축',
        price: 0
    },

    gangbaek: {
        file: 'gangbaek.glb',
        name: '강백축',
        price: 0
    },

    seasalt: {
        file: 'seasalt.glb',
        name: '바다소금축',
        price: 0
    },

    strawberry_latte: {
        file: 'strawberry_latte.glb',
        name: '딸기라떼축',
        price: 0
    },

    pinksalt: {
        file: 'pinksalt.glb',
        name: '저소음핑크솔트축',
        price: 0
    }

};


// ============================================================
// 케이스 옵션
// ============================================================

const BASE_OPTIONS = {

    'case.glb': {
        name: '기본 베이스',
        price: 0
    },

    'pattern_case.glb': {
        name: '패턴 베이스',
        price: 1000
    },

    'case_3botton.glb': {
        name: '3구 케이스',
        price: -4000
    }

};


// ============================================================
// 전체 파츠 가격
// ============================================================

const ALL_PART_PRICES = {

    'chickenegg.all': 1000,

    'chicken.all': 5000,

    'chick.all': 5000,

    'peach.all': 2000,

    'apple.all': 2000,

    'egg.all': 4000,

    'takoyaki.all': 4000,

    'wafle.all': 4000,

    'peanut.all': 4000,

    'hodu.all': 4000,

    'gukhwa.all': 4000,

    'sibwon.all': 4000,

    'lip.all': 3000,

    'dubai.all': 3000,

    'marshmallow.01.all': 4000,

    'marshmallow.02.all': 4000,

    'macaroon_P.all': 4000,

    'macaroon_B.all': 4000,

    'pretzel.all': 4000,

    'cookie.all': 4000,

    'potato_hotdog.all': 4200,

    'hotdog.all': 4200,

    'corn.all': 4200,

    'twister_potato.all': 4000,

    'sodduck.all': 4200,

    'stick_dduck.all': 4000,

    'pizza_seolgi.all': 4200,

    'tri_gimbap.all': 4000,

    'BOk.all': 4000,
    
    'hangwa.all': 4000,

    'color_jeon.all': 4000,

    'fried_egg.all': 4000,

    'dimsum.all': 4000,

    'narutomaki.all': 2000,

    'ramen.all': 4000,

    'eggroll.all': 4000,

    'yakgwa.all': 4000

};


// ============================================================
// 상태
// ============================================================

let baseModel = null;

let selectedBase =
    'case.glb';


let capModels = [
    null,
    null,
    null,
    null,
    null,
    null
];


let partModels = [
    null,
    null,
    null,
    null,
    null,
    null
];


let selectedParts = [
    null,
    null,
    null,
    null,
    null,
    null
];


// ============================================================
// 슬롯별 토핑 상태
// ============================================================

// 슬롯별로 선택한 토핑 이름
let selectedToppings = [
    null, null, null, null, null, null
];

// 슬롯별 토핑 GLB 모델
let toppingModels = [
    null, null, null, null, null, null
];

// 슬롯별 배치 위치: top 또는 side
let toppingPlacements = [
    'top', 'top', 'top', 'top', 'top', 'top'
];

// 비동기 로드 중 오래된 선택이 덮어쓰지 않도록 하는 번호
let toppingLoadTokens = [0, 0, 0, 0, 0, 0];


let switchModels = [
    null,
    null,
    null,
    null,
    null,
    null
];


let selectedSwitch =
    'blue';


let selectedType =
    'A';


let selectedSlot =
    0;


let selectedBaseColor =
    '#886363';


let selectedKeycapColors = [

    '#886363',
    '#886363',
    '#886363',
    '#886363',
    '#886363',
    '#886363'

];

window.selectAllKeycapColor = function(color, element) {

    // 전체 키캡 색상 저장
    for (let i = 0; i < 6; i++) {
        selectedKeycapColors[i] = color;
    }

    // 전체 키캡에 색상 적용
    for (let i = 0; i < 6; i++) {

        const cap = capModels[i];

        if (!cap) continue;

        cap.traverse((child) => {

            if (!child.isMesh) return;

            // 흰색 외곽선은 색상 변경에서 제외
            if (child.userData.isFomoraCapOutline) return;

            if (!child.material) return;

            const materials = Array.isArray(child.material)
                ? child.material
                : [child.material];

            materials.forEach((material) => {
                if (material.color) {
                    material.color.set(color);
                }
            });

        });
    }

    // 색상 버튼 활성화
    document.querySelectorAll('.color').forEach(item => {
        item.classList.remove('active');
    });

    if (element) {
        element.classList.add('active');
    }

    // 현재 선택된 키캡의 외곽선 갱신
    setSelectedCapOutline(selectedSlot);
};


const BASE_PRICE =
    15900;


const COMMON_ROUGHNESS =
    0.65;


const COMMON_METALNESS =
    0.0;


// ============================================================
// GLB 로드
// ============================================================

function loadGLB(path) {

    return new Promise(
        (resolve, reject) => {

            const cacheBuster =
                `?v=${Date.now()}`;

            loader.load(

                `${path}${cacheBuster}`,

                gltf => {

                    resolve(
                        gltf.scene
                    );

                },

                undefined,

                error => {

                    console.error(
                        'GLB 로드 실패:',
                        path,
                        error
                    );

                    reject(
                        error
                    );

                }

            );

        }
    );

}


// ============================================================
// 재질 적용
// ============================================================

function applyCommonMaterial(
    model,
    color
) {

    if (!model)
        return;


    
model.traverse(
    object => {

        if (!object.isMesh)
            return;

        // 외곽선은 키캡 색상 변경 대상에서 제외
        if (object.userData.isFomoraCapOutline)
            return;

        if (!object.material)
            return;


            if (
                Array.isArray(
                    object.material
                )
            ) {

                object.material =
                    object.material.map(
                        material => {

                            const newMaterial =
                                material.clone();


                            if (
                                newMaterial.color
                            ) {

                                newMaterial.color.set(
                                    color
                                );

                            }


                            if (
                                'roughness'
                                in newMaterial
                            ) {

                                newMaterial.roughness =
                                    COMMON_ROUGHNESS;

                            }


                            if (
                                'metalness'
                                in newMaterial
                            ) {

                                newMaterial.metalness =
                                    COMMON_METALNESS;

                            }


                            return newMaterial;

                        }
                    );

            }

            else {

                object.material =
                    object.material.clone();


                if (
                    object.material.color
                ) {

                    object.material.color.set(
                        color
                    );

                }


                if (
                    'roughness'
                    in object.material
                ) {

                    object.material.roughness =
                        COMMON_ROUGHNESS;

                }


                if (
                    'metalness'
                    in object.material
                ) {

                    object.material.metalness =
                        COMMON_METALNESS;

                }

            }

        }
    );

}


// ============================================================
// 모델 월드 중심
// ============================================================

function getModelWorldCenter(
    model
) {

    if (!model) {

        return new THREE.Vector3();

    }


    model.updateWorldMatrix(
        true,
        true
    );


    const box =
        new THREE.Box3()
            .setFromObject(
                model
            );


    return box.getCenter(
        new THREE.Vector3()
    );

}


// ============================================================
// Camera 맞춤
// ============================================================

function fitCameraToProduct() {

    if (
        productGroup.children.length === 0
    ) {

        return;

    }


    const box =
        new THREE.Box3()
            .setFromObject(
                productGroup
            );


    const center =
        box.getCenter(
            new THREE.Vector3()
        );


    const size =
        box.getSize(
            new THREE.Vector3()
        );


    const maxSize =
        Math.max(
            size.x,
            size.y,
            size.z
        );


    const verticalFOV =
        THREE.MathUtils.degToRad(
            camera.fov
        );


    const fitHeightDistance =
        maxSize /
        (
            2 *
            Math.tan(
                verticalFOV / 2
            )
        );


    const fitWidthDistance =
        fitHeightDistance /
        camera.aspect;


    let distance =
        Math.max(
            fitHeightDistance,
            fitWidthDistance
        );


    distance *= 1.35;


    camera.position.set(

        center.x +
        distance * 0.75,

        center.y +
        distance * 0.55,

        center.z +
        distance

    );


    controls.target.copy(
        center
    );


    camera.near =
        Math.max(
            0.01,
            distance / 100
        );


    camera.far =
        Math.max(
            1000,
            distance * 100
        );


    camera.updateProjectionMatrix();


    controls.minDistance =
        distance * 0.25;


    controls.maxDistance =
        distance * 5;


    controls.update();

}


// ============================================================
// 3구 케이스
// ============================================================

function isThreeKeyCase() {

    return (
        selectedBase ===
        'case_3botton.glb'
    );

}


// ============================================================
// 3구 케이스 가시성
// ============================================================

function updateThreeKeyCaseVisibility() {

    const threeKey =
        isThreeKeyCase();


    for (
        let i = 0;
        i < 6;
        i++
    ) {

        const visible =
            !threeKey ||
            i === 0 ||
            i === 2 ||
            i === 4;


        if (capModels[i]) {

            capModels[i].visible =
                visible;

        }


        if (partModels[i]) {

            partModels[i].visible =
                visible;

        }

        if (toppingModels[i]) {
            toppingModels[i].visible =
                visible;
        }


        if (switchModels[i]) {

            switchModels[i].visible =
                visible;

        }

    }

}


// ============================================================
// Base 로드
// ============================================================

async function loadBase(
    fileName = selectedBase
) {

    if (baseModel) {

        productGroup.remove(
            baseModel
        );

        baseModel = null;

    }


    try {

        baseModel =
            await loadGLB(
                `./${fileName}`
            );


        productGroup.add(
            baseModel
        );


        applyBaseColor();


        updateThreeKeyCaseVisibility();


        fitCameraToProduct();

    }

    catch (error) {

        console.error(
            'Base 로드 실패:',
            error
        );

    }

}


// ============================================================
// Base 선택
// ============================================================

window.selectBase =
function(element) {

    document
        .querySelectorAll(
            '[data-base]'
        )
        .forEach(item => {

            item.classList.remove(
                'active'
            );

        });


    element.classList.add(
        'active'
    );


    selectedBase =
        element.dataset.base;


    loadBase(
        selectedBase
    );


    updatePrice();

};


// ============================================================
// KEYCAP 로드
// ============================================================

async function loadCaps(
    type
) {

    for (
        let i = 0;
        i < 6;
        i++
    ) {

        if (capModels[i]) {

            productGroup.remove(
                capModels[i]
            );

            capModels[i] = null;

        }

    }


    try {

        for (
            let i = 0;
            i < 6;
            i++
        ) {

            const path =
                `./Type${type}_cap${i + 1}.glb`;


            const model =
                await loadGLB(
                    path
                );


            capModels[i] =
                model;


            productGroup.add(
                model
            );


            applyKeycapColorToModel(
                model,
                selectedKeycapColors[i]
            );

        }


       updateThreeKeyCaseVisibility();

// 현재 선택된 슬롯의 외곽선 갱신
setSelectedCapOutline(selectedSlot);

await reloadSelectedSwitch();


        fitCameraToProduct();

    }

    catch (error) {

        console.error(
            `TYPE ${type} 로드 실패:`,
            error
        );

    }

}


// ============================================================
// TYPE 선택
// ============================================================

window.selectType =
function(element) {

    document
        .querySelectorAll(
            '[data-type]'
        )
        .forEach(item => {

            item.classList.remove(
                'active'
            );

        });


    element.classList.add(
        'active'
    );


    selectedType =
        element.dataset.type;


    loadCaps(
        selectedType
    );

};


// ============================================================
// Base 색상
// ============================================================

function applyBaseColor() {

    if (!baseModel)
        return;


    applyCommonMaterial(
        baseModel,
        selectedBaseColor
    );

}


// ============================================================
// Keycap 색상
// ============================================================

function applyKeycapColorToModel(
    model,
    color
) {

    if (!model)
        return;


    applyCommonMaterial(
        model,
        color
    );

}


// ============================================================
// Slot 선택
// ============================================================


window.selectSlot = function(slot, element) {
    // 잘못된 슬롯 번호 방지
    if (!Number.isInteger(slot) || slot < 0 || slot >= 6) {
        return;
    }

    // 선택된 슬롯 번호를 먼저 변경
    selectedSlot = slot;

    // 슬롯 버튼이 존재할 때만 활성화 표시 변경
    document.querySelectorAll('.slot').forEach(item => {
        item.classList.remove('active');
    });

    if (element) {
        element.classList.add('active');
    }

    // 현재 색상 UI 갱신
    updateCurrentColorUI();

    // 선택된 위치 텍스트 갱신
    const selectedSlotInfo =
        document.querySelector('.selected-slot-info');

    if (selectedSlotInfo) {
        selectedSlotInfo.textContent =
            `선택된 위치 : KEY ${selectedSlot + 1}`;
    }

    // 토핑 UI 및 키캡 외곽선 갱신
    updateToppingUI();
    setSelectedCapOutline(selectedSlot);
};

// ============================================================
// 3D 화면에서 키캡을 직접 눌러 슬롯 선택
// - 짧은 탭/클릭만 선택으로 처리
// - 드래그 회전은 OrbitControls가 기존처럼 처리
// ============================================================
(function enableDirectKeycapSelection() {
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    
let pointerStart = null;
let pointerDownHit = null;

    // 키캡을 누를 때 살짝 내려갔다가 복귀하는 모션
    const capPressStates = new WeakMap();
    const PRESS_DISTANCE = 0.5;
    const PRESS_IN_MS = 65;
    const PRESS_OUT_MS = 150;

    function getKeycapHit(clientX, clientY) {
        const rect = renderer.domElement.getBoundingClientRect();
        if (!rect.width || !rect.height) return null;

        pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);

        const visibleCaps = capModels
            .map((model, slot) => ({ model, slot }))
            .filter(item => item.model && item.model.visible);

        let nearestHit = null;
        for (const item of visibleCaps) {
            const hits = raycaster.intersectObject(item.model, true);
            if (hits.length && (!nearestHit || hits[0].distance < nearestHit.distance)) {
                nearestHit = {
                    model: item.model,
                    slot: item.slot,
                    distance: hits[0].distance
                };
            }
        }
        return nearestHit;
    }

    function animateCapPress(model) {
    if (!model) return;

    let state = capPressStates.get(model);

    if (!state) {
        state = {
            baseZ: model.position.z,
            animationId: null,
            token: 0
        };
        capPressStates.set(model, state);
    }

    // 진행 중인 애니메이션 취소
    if (state.animationId !== null) {
        cancelAnimationFrame(state.animationId);
        state.animationId = null;
    }

    state.token += 1;
    const token = state.token;

    // 현재 위치를 기준으로 움직여 위치가 튀는 현상 방지
    const startZ = model.position.z;

    // 이동 거리를 작게 설정
    const PRESS_DISTANCE = 2;
    const pressedZ = state.baseZ - PRESS_DISTANCE;
    const pressStart = performance.now();

    function pressFrame(now) {
        if (state.token !== token) return;

        const t = Math.min(1, (now - pressStart) / PRESS_IN_MS);
        const eased = 1 - Math.pow(1 - t, 3);

        model.position.z =
            startZ + (pressedZ - startZ) * eased;

        if (t < 1) {
            state.animationId = requestAnimationFrame(pressFrame);
        } else {
            const releaseStart = performance.now();

            function releaseFrame(releaseNow) {
                if (state.token !== token) return;

                const rt = Math.min(
                    1,
                    (releaseNow - releaseStart) / PRESS_OUT_MS
                );

                const springEase = 1 - Math.pow(1 - rt, 3);

                model.position.z =
                    pressedZ + (state.baseZ - pressedZ) * springEase;

                if (rt < 1) {
                    state.animationId =
                        requestAnimationFrame(releaseFrame);
                } else {
                    model.position.z = state.baseZ;
                    state.animationId = null;
                }
            }

            state.animationId = requestAnimationFrame(releaseFrame);
        }
    }

    state.animationId = requestAnimationFrame(pressFrame);
}

    
renderer.domElement.addEventListener('pointerdown', (event) => {
    pointerStart = {
        x: event.clientX,
        y: event.clientY,
        pointerId: event.pointerId
    };

    // 누르는 순간 감지한 키캡을 저장
    pointerDownHit = getKeycapHit(
        event.clientX,
        event.clientY
    );

    // 저장한 키캡에 눌림 모션 적용
    if (pointerDownHit) {
        animateCapPress(pointerDownHit.model);
    }
}, { passive: true });


renderer.domElement.addEventListener('pointerup', (event) => {
    if (
        !pointerStart ||
        pointerStart.pointerId !== event.pointerId
    ) {
        pointerStart = null;
        pointerDownHit = null;
        return;
    }

    const movedX = event.clientX - pointerStart.x;
    const movedY = event.clientY - pointerStart.y;

    // 눌렀을 때 감지한 키캡을 먼저 저장
    const hitOnDown = pointerDownHit;

    pointerStart = null;
    pointerDownHit = null;

    // 드래그한 경우에는 슬롯을 선택하지 않음
    if (Math.hypot(movedX, movedY) > 8) {
        return;
    }

    // 눌렀을 때 감지한 키캡으로 슬롯 선택
    // 눌렀을 때 감지하지 못한 경우에만 다시 감지
    const nearestHit =
        hitOnDown ||
        getKeycapHit(event.clientX, event.clientY);

    if (!nearestHit) return;

    const slotButtons = document.querySelectorAll('.slot');
    const slotButton = slotButtons[nearestHit.slot] || null;

    // 선택 슬롯 변경
    window.selectSlot(nearestHit.slot, slotButton);

}, { passive: true });


renderer.domElement.addEventListener('pointercancel', () => {
    pointerStart = null;
    pointerDownHit = null;
}, { passive: true });
})();




/* ==========================================
   FOMORA 선택 키캡 외곽선
   - 원래 키캡 색상 유지
   - 선택된 슬롯에만 흰색 외곽선 표시
   - 제품 본체와 별도로 렌더링하지 않음
========================================== */

const capOutlineMap = new WeakMap();

function removeCapOutline(model) {
    if (!model) return;

    model.traverse((mesh) => {
        if (!mesh.isMesh) return;

        const outlines = mesh.children.filter(
            child => child.userData.isFomoraCapOutline
        );

        outlines.forEach((outline) => {
            mesh.remove(outline);

            if (outline.geometry) {
                outline.geometry.dispose();
            }

            if (outline.material) {
                outline.material.dispose();
            }
        });
    });

    capOutlineMap.delete(model);
}

function createCapOutline(model) {
    if (!model) return [];

    const cached = capOutlineMap.get(model);
    if (cached) return cached;

    const meshes = [];

    // 원본 키캡 메시만 수집
    model.traverse((child) => {
        if (
            child.isMesh &&
            child.geometry &&
            !child.userData.isFomoraCapOutline
        ) {
            meshes.push(child);
        }
    });

    const outlineMeshes = [];

    meshes.forEach((mesh) => {

        // 외곽선 전용 흰색 재질
        const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.BackSide,
            depthTest: true,
            depthWrite: false,
            toneMapped: false
        });

        // 원본 지오메트리를 복제해 별도로 관리
        const outline = new THREE.Mesh(
            mesh.geometry.clone(),
            material
        );

        // 외곽선 두께
        outline.scale.setScalar(1.04);

        outline.visible = false;
        outline.renderOrder = 2;

        // 외곽선이 클릭 판정을 가로채지 않도록 설정
        outline.raycast = () => {};

        // 색상 변경 코드에서 구분하기 위한 표시
        outline.userData.isFomoraCapOutline = true;

        mesh.add(outline);

        outlineMeshes.push(outline);
    });

    capOutlineMap.set(model, outlineMeshes);

    return outlineMeshes;
}

function setSelectedCapOutline(slot) {
    capModels.forEach((model, index) => {
        if (!model) return;

        const outlines = createCapOutline(model);

        const shouldShow =
            index === slot &&
            model.visible;

        outlines.forEach((outline) => {
            outline.visible = shouldShow;
        });
    });
}

// ============================================================
// 토핑 UI 스타일
// ============================================================


function createToppingUI() {
    if (document.getElementById('fomora-topping-panel')) {
        return;
    }

    // 기존 스타일과 중복되지 않도록 스타일을 한 번만 생성
    if (!document.getElementById('fomora-topping-style')) {
        const style = document.createElement('style');
        style.id = 'fomora-topping-style';

        style.textContent = `
            #fomora-topping-panel {
                display: block;
                box-sizing: border-box;
                width: 100%;
                max-width: 100%;
                min-width: 0;
                margin: 16px 0;
                padding: 16px;
                border: 1px solid #e5e5e5;
                border-radius: 12px;
                background: #fff;
                color: #333;
                font-family: inherit;
            }

            #fomora-topping-panel * {
                box-sizing: border-box;
            }

            #fomora-topping-panel .topping-title {
                margin: 0 0 6px;
                font-size: 16px;
                font-weight: 600;
            }

            #fomora-topping-panel .topping-description {
                margin: 0 0 14px;
                color: #777;
                font-size: 12px;
                line-height: 1.5;
            }

            #fomora-topping-panel .topping-label {
                display: block;
                margin: 12px 0 7px;
                font-size: 13px;
                font-weight: 500;
            }

            #fomora-topping-panel .topping-select {
                display: block;
                width: 100%;
                min-height: 42px;
                padding: 8px 10px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background: #fff;
                color: #333;
                font: inherit;
            }

            #fomora-topping-panel .topping-remove {
                display: block;
                width: 100%;
                min-height: 40px;
                margin-top: 10px;
                cursor: pointer;
            }

            #fomora-topping-panel .topping-current {
                margin-top: 12px;
                color: #777;
                font-size: 12px;
                line-height: 1.5;
            }
        `;

        document.head.appendChild(style);
    }

    const panel = document.createElement('section');
    panel.id = 'fomora-topping-panel';

    panel.innerHTML = `
        <h3 class="topping-title">토핑(와플,마카롱)</h3>

        <p class="topping-description">
            현재 선택한 KEY에만 토핑이 적용됩니다.
        </p>

        <label class="topping-label" for="fomora-topping-select">
            토핑 종류
        </label>

        <select id="fomora-topping-select" class="topping-select">
            <option value="none">토핑 없음</option>
            ${Object.entries(TOPPINGS).map(([key, item]) => `
                <option value="${key}">
                    ${item.name} (+${item.price.toLocaleString('ko-KR')}원)
                </option>
            `).join('')}
        </select>

        <button
            type="button"
            class="topping-remove"
            id="fomora-topping-remove"
        >
            선택 슬롯의 토핑 제거
        </button>

        <div
            class="topping-current"
            id="fomora-topping-current"
        ></div>
    `;

    

const panelContainer = document.querySelector('.panel');

if (panelContainer) {
    const partsSection = Array.from(
        panelContainer.querySelectorAll(':scope > .section')
    ).find(section =>
        section.querySelector('.section-title')
            ?.textContent.trim() === '파츠'
    );

    if (partsSection) {

        function placeToppingPanel() {
            const isMobile = window.matchMedia(
                '(max-width: 900px)'
            ).matches;

            if (isMobile) {
                // 모바일에서만 파츠 섹션 안으로 이동
                partsSection.insertBefore(
                    panel,
                    partsSection.firstChild
                );

                // 파츠 탭이 숨겨져 있을 때만 토핑 숨김
                panel.style.display =
                    partsSection.classList.contains(
                        'mobile-section-hidden'
                    )
                        ? 'none'
                        : 'block';

            } else {
                // PC: 기존 배치 방식 유지
                panelContainer.insertBefore(
                    panel,
                    partsSection
                );

                // PC에서는 표시 상태를 강제로 복구
                panel.style.removeProperty('display');
            }
        }

        placeToppingPanel();

        window.addEventListener(
            'resize',
            placeToppingPanel
        );

        // 모바일 탭 전환에 따른 클래스 변경 감지
        const toppingTabObserver = new MutationObserver(() => {
            if (
                window.matchMedia('(max-width: 900px)').matches
            ) {
                panel.style.display =
                    partsSection.classList.contains(
                        'mobile-section-hidden'
                    )
                        ? 'none'
                        : 'block';
            } else {
                // PC에서는 표시 상태를 변경하지 않음
                panel.style.removeProperty('display');
            }
        });

        toppingTabObserver.observe(partsSection, {
            attributes: true,
            attributeFilter: ['class']
        });

    } else {
        console.error('파츠 섹션을 찾을 수 없습니다.');
        panelContainer.appendChild(panel);
    }

} else {
    console.error('토핑 옵션을 넣을 .panel 요소를 찾을 수 없습니다.');
}

    document
        .getElementById('fomora-topping-select')
        .addEventListener('change', event => {
            window.selectTopping(event.target.value);
        });

    document
        .getElementById('fomora-topping-remove')
        .addEventListener('click', () => {
            window.selectTopping('none');
        });

    updateToppingUI();
}


// ============================================================
// 현재 슬롯의 토핑 상태를 UI에 반영
// ============================================================

function updateToppingUI() {
    const panel =
        document.getElementById('fomora-topping-panel');

    if (!panel) return;

    const slot = selectedSlot;

    const select =
        document.getElementById('fomora-topping-select');

    const current =
        document.getElementById('fomora-topping-current');

    if (select) {
        select.value = selectedToppings[slot] || 'none';
    }

    
    if (current) {
    const toppingName = selectedToppings[slot];
    const toppingInfo = toppingName
        ? TOPPINGS[toppingName]
        : null;

    current.textContent = toppingInfo
        ? `KEY ${slot + 1} · ${toppingInfo.name}`
        : `KEY ${slot + 1} · 토핑 없음`;
}
}

// ============================================================
// 현재 색상 UI
// ============================================================

function updateCurrentColorUI() {

    const currentColor =
        selectedKeycapColors[
            selectedSlot
        ];


    document
        .querySelectorAll(
            '[data-keycap-color]'
        )
        .forEach(button => {

            if (
                button.dataset.keycapColor ===
                currentColor
            ) {

                button.classList.add(
                    'active'
                );

            }

            else {

                button.classList.remove(
                    'active'
                );

            }

        });

}


// ============================================================
// Keycap 색상 변경
// ============================================================


 // ============================================================
// Keycap 색상 변경
// ============================================================

window.changeKeycapColor = function(color, element) {
    selectedKeycapColors[selectedSlot] = color;

    if (capModels[selectedSlot]) {
        applyKeycapColorToModel(
            capModels[selectedSlot],
            color
        );
    }

    if (element) {
        if (element.parentElement) {
            element.parentElement
                .querySelectorAll('.color')
                .forEach(item => {
                    item.classList.remove('active');
                });
        }

        element.classList.add('active');
    }
};


// ============================================================
// Base 색상 변경
// ============================================================

window.changeBaseColor =
function(
    color,
    element
) {

    selectedBaseColor =
        color;


    if (element) {

        element.parentElement
            .querySelectorAll(
                '.color'
            )
            .forEach(item => {

                item.classList.remove(
                    'active'
                );

            });


        element.classList.add(
            'active'
        );

    }


    applyBaseColor();

};


// ============================================================
// 파츠 제거
// ============================================================

function removePartFromSlot(
    slot
) {

    if (
        partModels[slot]
    ) {

        productGroup.remove(
            partModels[slot]
        );

        partModels[slot] =
            null;

    }


    selectedParts[slot] =
        null;


    const nameElement =
        document.getElementById(
            `slotName${slot}`
        );


    if (nameElement) {

        nameElement.textContent =
            '비어있음';

    }

}


// ============================================================
// 모든 파츠 제거
// ============================================================

function removeAllParts() {

    for (
        let i = 0;
        i < 6;
        i++
    ) {

        removePartFromSlot(
            i
        );

    }

}


// ============================================================
// 파츠 이동
// ============================================================

function movePartToSlot(
    partModel,
    slot
) {

    if (!partModel)
        return;

    if (!capModels[0])
        return;

    if (!capModels[slot])
        return;


    const referenceCenter =
        getModelWorldCenter(
            capModels[0]
        );


    const targetCenter =
        getModelWorldCenter(
            capModels[slot]
        );


    const offset =
        targetCenter
            .clone()
            .sub(
                referenceCenter
            );


    const currentWorldPosition =
        new THREE.Vector3();


    partModel.getWorldPosition(
        currentWorldPosition
    );


    const newWorldPosition =
        currentWorldPosition
            .clone()
            .add(
                offset
            );


    const newLocalPosition =
        productGroup.worldToLocal(
            newWorldPosition
        );


    partModel.position.copy(
        newLocalPosition
    );

}


// ============================================================
// 토핑 제거
// ============================================================

function removeToppingFromSlot(slot) {
    // 진행 중인 비동기 로드를 무효화
    toppingLoadTokens[slot]++;

    if (toppingModels[slot]) {
        productGroup.remove(toppingModels[slot]);
        toppingModels[slot] = null;
    }

    selectedToppings[slot] = null;

    updateToppingUI();
}


// ============================================================
// 모든 토핑 제거
// ============================================================

function removeAllToppings() {
    for (let i = 0; i < 6; i++) {
        removeToppingFromSlot(i);
    }
}


// ============================================================
// 토핑 기준 파츠의 바운딩 박스
// ============================================================

function getToppingTargetBox(slot) {
    // 기본 파츠가 있으면 기본 파츠를 기준으로 배치
    const targetModel =
        partModels[slot] || capModels[slot];

    if (!targetModel) {
        return null;
    }

    targetModel.updateWorldMatrix(true, true);

    const box = new THREE.Box3().setFromObject(targetModel);

    if (box.isEmpty()) {
        return null;
    }

    return box;
}


// ============================================================
// 토핑을 목표 위치로 이동
// ============================================================


function moveToppingToSlot(toppingModel, slot) {
    if (!toppingModel) return;
    if (!capModels[0] || !capModels[slot]) return;

    const parent = toppingModel.parent;
    if (!parent) return;

    // 최초 위치 저장
    if (!toppingModel.userData.originalPosition) {
        toppingModel.userData.originalPosition =
            toppingModel.position.clone();
    }

    // 매번 최초 위치에서 다시 계산
    toppingModel.position.copy(
        toppingModel.userData.originalPosition
    );

    productGroup.updateMatrixWorld(true);

    // KEY 1과 선택 슬롯 사이의 위치 차이
    const referenceCenter =
        getModelWorldCenter(capModels[0]);

    const targetCenter =
        getModelWorldCenter(capModels[slot]);

    const offset = targetCenter
        .clone()
        .sub(referenceCenter);

    // 슬롯 위치로 이동할 월드 좌표 계산
    toppingModel.updateWorldMatrix(true, true);

    const slotWorldPosition =
        toppingModel.getWorldPosition(
            new THREE.Vector3()
        ).add(offset);

    // 월드 좌표를 부모의 로컬 좌표로 변환
    parent.worldToLocal(slotWorldPosition);
    toppingModel.position.copy(slotWorldPosition);

    // 슬롯 배치 후 실제 경계 상자 갱신
    productGroup.updateMatrixWorld(true);
    toppingModel.updateWorldMatrix(true, true);

    const targetPart = partModels[slot];

    if (targetPart) {
        targetPart.updateWorldMatrix(true, true);

        const partBox = new THREE.Box3()
            .setFromObject(targetPart);

        const toppingBox = new THREE.Box3()
            .setFromObject(toppingModel);

        if (!partBox.isEmpty() && !toppingBox.isEmpty()) {
            // 파츠의 윗면과 토핑의 최저점 계산
            const partTopZ = partBox.max.z;
            const toppingBottomZ = toppingBox.min.z;

            // 두 면 사이의 간격 계산
            // ========================================

            
    // 토핑 높이 미세 조정값 (직접 수정)
    // ========================================
            // 토핑별 최종 높이 보정값
const toppingHeightAdjust = {
    strawberry: -3,
    cream: -0.5,
    whipcream: -1.2
};

const toppingName = selectedToppings[slot];

const gap =
    partTopZ -
    toppingBottomZ +
    (toppingHeightAdjust[toppingName] ?? -3);

            // 현재 토핑의 월드 위치에 Z축 보정 적용
            const correctedWorldPosition =
                toppingModel.getWorldPosition(
                    new THREE.Vector3()
                );

            correctedWorldPosition.z += gap;

            // 보정된 월드 좌표를 로컬 좌표로 한 번만 변환
            parent.worldToLocal(correctedWorldPosition);

            toppingModel.position.copy(
                correctedWorldPosition
            );

            console.log(`KEY ${slot + 1}: 토핑 밀착 보정`, {
                partTopZ: partTopZ,
                toppingBottomZ: toppingBottomZ,
                gap: gap,
                finalPosition: toppingModel.position.toArray()
            });
        }
    }

    productGroup.updateMatrixWorld(true);
}

function refreshToppingPosition(slot) {
    const topping = toppingModels[slot];

    if (!topping) return;

    moveToppingToSlot(topping, slot);
}



// ============================================================
// 토핑 선택 / 교체 / 제거
// HTML에서 window.selectTopping(name)으로 호출 가능
// ============================================================

window.selectTopping = async function(toppingName) {
    const slot = selectedSlot;

    // 3구 케이스에서 사용할 수 없는 슬롯 차단
    if (
        isThreeKeyCase() &&
        (slot === 1 || slot === 3 || slot === 5)
    ) {
        alert(
            '3구 케이스에서는 KEY 2, 4, 6을 사용할 수 없습니다.'
        );
        return;
    }

    // 없음 선택: 현재 슬롯의 토핑만 제거
    if (
        toppingName === 'none' ||
        toppingName === ''
    ) {
        removeToppingFromSlot(slot);
        updatePrice();
        return;
    }

    const toppingInfo = TOPPINGS[toppingName];

    if (!toppingInfo) {
        console.error('등록되지 않은 토핑:', toppingName);
        return;
    }

    // 기존 토핑 제거 후 새 토핑 로드
    removeToppingFromSlot(slot);

    selectedToppings[slot] = toppingName;

    const loadToken = toppingLoadTokens[slot];

    try {
        const model = await loadGLB(
            `./${toppingInfo.file}`
        );

        // 로드 중 사용자가 다른 토핑을 선택했거나 제거한 경우
        if (
            toppingLoadTokens[slot] !== loadToken ||
            selectedToppings[slot] !== toppingName
        ) {
            return;
        }

        productGroup.add(model);

        toppingModels[slot] = model;

        moveToppingToSlot(model, slot);

        updateThreeKeyCaseVisibility();
        updateToppingUI();
        updatePrice();
        fitCameraToProduct();

    } catch (error) {
        // 로드 실패 시 선택 상태도 초기화
        if (
            toppingLoadTokens[slot] === loadToken &&
            selectedToppings[slot] === toppingName
        ) {
            selectedToppings[slot] = null;
            toppingModels[slot] = null;
        }

        console.error(
            '토핑 로드 실패:',
            toppingInfo.file,
            error
        );

        updateToppingUI();
        updatePrice();
    }
};


// ============================================================
// 선택 슬롯 토핑 배치 방식 변경
// top = 위쪽 / side = 옆쪽
// ============================================================

window.setToppingPlacement = function(placement) {
    if (!TOPPING_PLACEMENT[placement]) {
        console.error('잘못된 토핑 배치 방식:', placement);
        return;
    }

    const slot = selectedSlot;

    if (
        isThreeKeyCase() &&
        (slot === 1 || slot === 3 || slot === 5)
    ) {
        alert(
            '3구 케이스에서는 KEY 2, 4, 6을 사용할 수 없습니다.'
        );
        return;
    }

    toppingPlacements[slot] = placement;

    refreshToppingPosition(slot);
    updateToppingUI();
    updatePrice();
};


// ============================================================
// 파츠 로드
// ============================================================

async function loadPartToSlot(
    partName,
    slot
) {

    const partInfo =
        PARTS[partName];


    if (!partInfo) {

        console.error(
            '등록되지 않은 파츠:',
            partName
        );

        return null;

    }


    try {

        const part =
            await loadGLB(
                `./${partInfo.file}`
            );


        productGroup.add(
            part
        );


        movePartToSlot(
            part,
            slot
        );

       

        return part;

    }

    catch (error) {

        console.error(
            '파츠 로드 실패:',
            error
        );

        return null;

    }

}


// ============================================================
// .all 확인
// ============================================================

function isAllPart(
    partName
) {

    return (
        typeof partName ===
        'string' &&
        partName.endsWith(
            '.all'
        )
    );

}


// ============================================================
// .all 이름 → 일반 파츠
// ============================================================

function getBasePartName(
    partName
) {

    if (
        !isAllPart(partName)
    ) {

        return partName;

    }


    return partName.slice(
        0,
        -4
    );

}


// ============================================================
// 전체 파츠 배치
// ============================================================

async function loadPartToAllSlots(
    allPartName
) {

    const basePartName =
        getBasePartName(
            allPartName
        );


    const partInfo =
        PARTS[basePartName];


    if (!partInfo)
        return;


    removeAllParts();


    for (
        let i = 0;
        i < 6;
        i++
    ) {

        const part =
            await loadPartToSlot(
                basePartName,
                i
            );


        if (!part)
            continue;


        partModels[i] =
            part;


        selectedParts[i] =
            basePartName;

        refreshToppingPosition(i);


        if (
            isThreeKeyCase() &&
            (
                i === 1 ||
                i === 3 ||
                i === 5
            )
        ) {

            part.visible =
                false;

        }

    }    


    updateThreeKeyCaseVisibility();

}


// ============================================================
// 파츠 선택
// ============================================================

window.selectPart =
async function(
    partName
) {

    // 전체 제거

    if (
        partName ===
        'all-none'
    ) {

        removeAllParts();

        updateThreeKeyCaseVisibility();

        updatePrice();

        fitCameraToProduct();

        return;

    }


    // .all

    if (
        isAllPart(partName)
    ) {

        await loadPartToAllSlots(
            partName
        );

        updatePrice();

        fitCameraToProduct();

        return;

    }


    // 3구 케이스 제한

    if (
        isThreeKeyCase() &&
        (
            selectedSlot === 1 ||
            selectedSlot === 3 ||
            selectedSlot === 5
        )
    ) {

        alert(
            '3구 케이스에서는 KEY 2, 4, 6을 사용할 수 없습니다.'
        );

        return;

    }


    // 없음

    if (
        partName === 'none'
    ) {

        removePartFromSlot(
            selectedSlot
        );

        updatePrice();

        fitCameraToProduct();

        return;

    }


    if (
        !PARTS[partName]
    ) {

        console.error(
            '등록되지 않은 파츠:',
            partName
        );

        return;

    }


    removePartFromSlot(
        selectedSlot
    );


    const part =
        await loadPartToSlot(
            partName,
            selectedSlot
        );


    if (!part)
        return;


    partModels[
        selectedSlot
    ] = part;


    selectedParts[
        selectedSlot
    ] = partName;

    refreshToppingPosition(selectedSlot);


    updateThreeKeyCaseVisibility();

    updatePrice();

    fitCameraToProduct();

};


// ============================================================
// 축 제거
// ============================================================

function removeSwitches() {

    for (
        let i = 0;
        i < 6;
        i++
    ) {

        if (
            switchModels[i]
        ) {

            productGroup.remove(
                switchModels[i]
            );

            switchModels[i] =
                null;

        }

    }

}


// ============================================================
// 축 이동
// ============================================================

function moveSwitchToSlot(
    switchModel,
    slot
) {

    if (!switchModel)
        return;

    if (!capModels[0])
        return;

    if (!capModels[slot])
        return;


    const referenceCenter =
        getModelWorldCenter(
            capModels[0]
        );


    const targetCenter =
        getModelWorldCenter(
            capModels[slot]
        );


    const offset =
        targetCenter
            .clone()
            .sub(
                referenceCenter
            );


    const currentWorldPosition =
        new THREE.Vector3();


    switchModel.getWorldPosition(
        currentWorldPosition
    );


    const newWorldPosition =
        currentWorldPosition
            .clone()
            .add(
                offset
            );


    const newLocalPosition =
        productGroup.worldToLocal(
            newWorldPosition
        );


    switchModel.position.copy(
        newLocalPosition
    );

}


// ============================================================
// 선택 축 전체 KEY에 배치
// ============================================================

async function loadSwitchToAllSlots(
    switchName
) {

    const switchInfo =
        SWITCH_OPTIONS[
            switchName
        ];


    if (!switchInfo)
        return;


    removeSwitches();


    for (
        let i = 0;
        i < 6;
        i++
    ) {

        if (
            isThreeKeyCase() &&
            (
                i === 1 ||
                i === 3 ||
                i === 5
            )
        ) {

            continue;

        }


        try {

            const model =
                await loadGLB(
                    `./${switchInfo.file}`
                );


            productGroup.add(
                model
            );


            moveSwitchToSlot(
                model,
                i
            );


            switchModels[i] =
                model;

        }

        catch (error) {

            console.error(
                `${switchInfo.name} 로드 실패:`,
                error
            );

        }

    }


    updateThreeKeyCaseVisibility();

}


// ============================================================
// 축 재로드
// ============================================================

async function reloadSelectedSwitch() {

    if (
        !SWITCH_OPTIONS[
            selectedSwitch
        ]
    ) {

        return;

    }


    await loadSwitchToAllSlots(
        selectedSwitch
    );

}


// ============================================================
// ⭐ 축 선택
// ============================================================

window.selectSwitch = async function(switchName, element) {

    console.log('축 선택 함수 실행:', switchName);
    console.log('선택된 요소:', element);

    if (!SWITCH_OPTIONS[switchName]) {
        console.log('등록되지 않은 축:', switchName);
        return;
    }

    // 아래는 기존 코드 그대로 유지


    selectedSwitch =
        switchName;


    // 모든 리스트 비활성화

    document
        .querySelectorAll(
            '[data-switch]'
        )
        .forEach(item => {

            item.classList.remove(
                'active'
            );

        });


    // 선택된 리스트 활성화

    if (element) {

        element.classList.add(
            'active'
        );

    }


    // 실제 3D 축 변경

    await loadSwitchToAllSlots(
        selectedSwitch
    );


    updatePrice();


    fitCameraToProduct();

};


// ============================================================
// .all 파츠 확인
// ============================================================

function getSelectedAllPart() {

    if (
        selectedParts.length !== 6
    ) {

        return null;

    }


    const firstPart =
        selectedParts[0];


    if (!firstPart)
        return null;


    for (
        let i = 0;
        i < 6;
        i++
    ) {

        if (
            selectedParts[i] !==
            firstPart
        ) {

            return null;

        }

    }


    const allPartName =
        `${firstPart}.all`;


    if (
        ALL_PART_PRICES[
            allPartName
        ] !== undefined
    ) {

        return allPartName;

    }


    return null;

}


// ============================================================
// 가격
// ============================================================

function updatePrice() {

    let partPrice =
        0;


    // 케이스

    const baseOption =
        BASE_OPTIONS[
            selectedBase
        ];


    const baseOptionPrice =
        baseOption
            ? baseOption.price
            : 0;


    // 축

    const switchOption =
        SWITCH_OPTIONS[
            selectedSwitch
        ];


    const switchPrice =
        switchOption
            ? switchOption.price
            : 0;


    // 전체 파츠

    const selectedAllPart =
        getSelectedAllPart();


    if (selectedAllPart) {

        partPrice =
            ALL_PART_PRICES[
                selectedAllPart
            ];

    }

    else {

        for (
            let i = 0;
            i < 6;
            i++
        ) {

            const partName =
                selectedParts[i];


            if (!partName)
                continue;


            const partInfo =
                PARTS[partName];


            if (!partInfo)
                continue;


            partPrice +=
                partInfo.price;

        }

    }

    // 토핑 가격 합산
let toppingPrice = 0;

for (let i = 0; i < 6; i++) {
    const toppingName = selectedToppings[i];

    if (!toppingName) continue;

    const toppingInfo = TOPPINGS[toppingName];

    if (!toppingInfo) continue;

    toppingPrice += toppingInfo.price;
}

// 기존 파츠 가격에 토핑 가격 추가
partPrice += toppingPrice;


    // 총 금액

    const totalPrice =
        BASE_PRICE +
        baseOptionPrice +
        switchPrice +
        partPrice;


    // 화면 표시

    const basePriceElement =
        document.getElementById(
            'basePrice'
        );


    const switchPriceElement =
        document.getElementById(
            'switchPrice'
        );


    const partPriceElement =
        document.getElementById(
            'partPrice'
        );


    const totalPriceElement =
        document.getElementById(
            'totalPrice'
        );


    if (basePriceElement) {

        basePriceElement.textContent =
            (
                BASE_PRICE +
                baseOptionPrice
            ).toLocaleString(
                'ko-KR'
            ) +
            '원';

    }


   if (switchPriceElement) {

    switchPriceElement.textContent =
        switchOption
            ? switchOption.name
            : '-';

}


    if (partPriceElement) {

        partPriceElement.textContent =
            partPrice.toLocaleString(
                'ko-KR'
            ) +
            '원';

    }


    if (totalPriceElement) {

        totalPriceElement.textContent =
            totalPrice.toLocaleString(
                'ko-KR'
            ) +
            '원';

    }

}


// ============================================================
// 구매
// ============================================================

window.buyProduct =
function() {

    const configuration = {

        base:
            selectedBase,

        type:
            selectedType,

        switch:
            selectedSwitch,

        switchName:
            SWITCH_OPTIONS[
                selectedSwitch
            ]
                ? SWITCH_OPTIONS[
                    selectedSwitch
                ].name
                : '',

        baseColor:
            selectedBaseColor,

        keycapColors:
            selectedKeycapColors,

        parts:
            selectedParts

    };


    console.log(
        '선택한 제품 구성:',
        configuration
    );


    alert(
        '현재는 테스트 버전입니다.\n\n' +
        '선택한 구성은 F12 → Console에서 확인할 수 있습니다.'
    );

};


// ============================================================
// 초기화
// ============================================================

async function init() {

    await loadBase(
        'case.glb'
    );

    createToppingUI();


    await loadCaps(
        'A'
    );


    await loadSwitchToAllSlots(
        selectedSwitch
    );


    await renderOptionThumbnails();

    updatePrice();


    fitCameraToProduct();

}


init();


// ============================================================
// Resize
// ============================================================

window.addEventListener(
    'resize',
    () => {

        camera.aspect =
            container.clientWidth /
            container.clientHeight;


        camera.updateProjectionMatrix();


        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );


        fitCameraToProduct();

    }
);


// ============================================================
// Animation
// ============================================================

function animate() {

    requestAnimationFrame(
        animate
    );


    controls.update();


    renderer.render(
        scene,
        camera
    );

}


/* 파츠 썸네일 방향 설정
   각도 단위: 도(degree)
   X: 위아래 기울이기
   Y: 좌우 회전
   Z: 옆으로 기울이기
*/

const THUMBNAIL_ROTATIONS = {
    chicken: { x: -90, y: 0, z: 0 },
    chickenegg: { x: -90, y: 0, z: 0 },
    chick: { x: -90, y: 0, z: 0 },
       

    // 여기에 다른 파츠도 추가할 수 있습니다.
};



/* ============================================================
   파츠 옵션 카드 GLB 썸네일 (개선된 버전)
============================================================ */

const THUMBNAIL_CACHE_VERSION = 'thumb-v2';
const THUMBNAIL_DB_NAME = 'FOMORA_ThumbnailDB';
const THUMBNAIL_STORE_NAME = 'thumbnails';

let thumbnailDBPromise = null;

function openThumbnailDB() {
    if (thumbnailDBPromise) return thumbnailDBPromise;

    thumbnailDBPromise = new Promise((resolve, reject) => {
        if (!('indexedDB' in window)) {
            reject(new Error('IndexedDB를 지원하지 않습니다.'));
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
        const transaction = db.transaction(THUMBNAIL_STORE_NAME, 'readonly');
        const request = transaction.objectStore(THUMBNAIL_STORE_NAME).get(key);
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error);
    });
}

async function saveThumbnail(key, dataURL) {
    const db = await openThumbnailDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(THUMBNAIL_STORE_NAME, 'readwrite');
        transaction.objectStore(THUMBNAIL_STORE_NAME).put(dataURL, key);
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
        transaction.onabort = () => reject(transaction.error);
    });
}

function getThumbnailCacheKey(card, fileName) {
    const modelKey = card.dataset.part || card.dataset.base || card.dataset.model || fileName;
    const rotation = THUMBNAIL_ROTATIONS[modelKey] || { x: 0, y: 0, z: 0 };

    return [
        THUMBNAIL_CACHE_VERSION,
        fileName,
        `${rotation.x},${rotation.y},${rotation.z}`,
        '160x120'
    ].join('|');
}

function showSavedThumbnail(card, dataURL) {
    if (card.querySelector('.part-thumbnail-image, .part-thumbnail-canvas')) {
        return;
    }

    const img = document.createElement('img');
    img.className = 'part-thumbnail-image';
    img.src = dataURL;
    img.alt = '';
    img.width = 160;
    img.height = 120;
    img.style.width = '100%';
    img.style.height = '100px';
    img.style.display = 'block';
    img.style.objectFit = 'contain';

    card.prepend(img);
}

async function renderOptionThumbnails() {
    if (window.__thumbnailRenderingPromise) {
        return window.__thumbnailRenderingPromise;
    }

    window.__thumbnailRenderingPromise = runThumbnailRendering();

    try {
        await window.__thumbnailRenderingPromise;
    } finally {
        window.__thumbnailRenderingPromise = null;
    }
}

async function runThumbnailRendering() {
    const cards = document.querySelectorAll('[data-part], [data-base], [data-model]');
    if (!cards.length) return;

    const uncachedCards = [];
    let cacheAvailable = true;

    // 1. 캐시된 항목 먼저 빠르게 확인 및 적용
    for (const card of cards) {
        if (card.querySelector('.part-thumbnail-image, .part-thumbnail-canvas')) continue;

        const partName = card.dataset.part;
        if (partName === 'none' || partName === 'all-none') continue;

        let fileName;
        if (partName) {
            const lookupName = partName.endsWith('.all') ? partName.slice(0, -4) : partName;
            const partInfo = PARTS[lookupName];
            if (!partInfo) continue;
            fileName = partInfo.file;
        } else {
            fileName = card.dataset.base || card.dataset.model;
            if (!fileName || fileName === 'none') continue;
        }

        const cacheKey = getThumbnailCacheKey(card, fileName);

        try {
            const savedImage = await getSavedThumbnail(cacheKey);
            if (savedImage) {
                showSavedThumbnail(card, savedImage);
                continue; // 캐시가 있으면 미캐시 목록에 넣지 않음
            }
        } catch (error) {
            cacheAvailable = false;
        }

        uncachedCards.push({ card, fileName, cacheKey });
    }

    if (uncachedCards.length === 0) return;

    // 2. 캐시가 없는 항목들만 렌더러 초기화 후 처리
    const thumbRenderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true
    });

    thumbRenderer.setPixelRatio(1);
    thumbRenderer.setSize(160, 120);
    thumbRenderer.outputColorSpace = THREE.SRGBColorSpace;
    thumbRenderer.setClearColor(0xffffff, 0);
    thumbRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    thumbRenderer.toneMappingExposure = 0.8;

    const thumbScene = new THREE.Scene();
    thumbScene.add(new THREE.HemisphereLight(0xffffff, 0x888888, 2));

    const thumbLight = new THREE.DirectionalLight(0xffffff, 3);
    thumbLight.position.set(4, 6, 8);
    thumbScene.add(thumbLight);

    const thumbCamera = new THREE.PerspectiveCamera(35, 160 / 120, 0.01, 1000);
    const modelCache = new Map();

    async function loadCachedModel(fileName) {
        if (modelCache.has(fileName)) return modelCache.get(fileName);
        const promise = loadGLB(`./${fileName}`).catch(error => {
            modelCache.delete(fileName);
            return null;
        });
        modelCache.set(fileName, promise);
        return promise;
    }

    try {
        for (const item of uncachedCards) {
            const { card, fileName, cacheKey } = item;
            if (card.querySelector('.part-thumbnail-image, .part-thumbnail-canvas')) continue;

            const model = await loadCachedModel(fileName);
            if (!model) continue;

            const previewModel = model.clone(true);
            const modelKey = card.dataset.part || card.dataset.base || card.dataset.model || fileName;
            const rotation = THUMBNAIL_ROTATIONS[modelKey] || { x: 0, y: 0, z: 0 };

            previewModel.rotation.set(
                THREE.MathUtils.degToRad(rotation.x),
                THREE.MathUtils.degToRad(rotation.y),
                THREE.MathUtils.degToRad(rotation.z)
            );

            thumbScene.add(previewModel);
            previewModel.updateMatrixWorld(true);

            const box = new THREE.Box3().setFromObject(previewModel);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());

            previewModel.position.sub(center);
            previewModel.updateMatrixWorld(true);

            const maxSize = Math.max(size.x, size.y, size.z);
            if (maxSize > 0) {
                const distance = (maxSize / (2 * Math.tan(THREE.MathUtils.degToRad(thumbCamera.fov / 2)))) * 1.7;

                thumbCamera.position.set(distance * 0.5, distance * 0.5, distance);
                thumbCamera.near = Math.max(0.001, distance / 100);
                thumbCamera.far = distance * 100;
                thumbCamera.lookAt(0, 0, 0);
                thumbCamera.updateProjectionMatrix();

                thumbRenderer.render(thumbScene, thumbCamera);

                const dataURL = thumbRenderer.domElement.toDataURL('image/png');
                showSavedThumbnail(card, dataURL);

                if (cacheAvailable) {
                    try {
                        await saveThumbnail(cacheKey, dataURL);
                    } catch (error) {
                        // 캐시 저장 실패 무시
                    }
                }
            }

            thumbScene.remove(previewModel);
            await new Promise(resolve => requestAnimationFrame(resolve));
        }
    } finally {
        thumbRenderer.dispose();
    }
}

let thumbnailStartRequested = false;

function startThumbnailRendering() {
    if (thumbnailStartRequested) return;
    const cards = document.querySelector('[data-part], [data-base], [data-model]');
    if (!cards) return;

    thumbnailStartRequested = true;
    renderOptionThumbnails().catch(error => {
        thumbnailStartRequested = false;
    });
}

function observeThumbnailCards() {
    startThumbnailRendering();

    const observer = new MutationObserver(() => {
        if (thumbnailStartRequested) {
            observer.disconnect();
            return;
        }
        startThumbnailRendering();
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeThumbnailCards, { once: true });
} else {
    observeThumbnailCards();
}

if (typeof animate === 'function') {
    
    // 모바일 옵션 카드 터치 애니메이션
(function () {
    let pressedCard = null;

    document.addEventListener('touchstart', function (event) {
        const card = event.target.closest(
            '[data-part], [data-base], [data-model]'
        );

        if (!card) return;

        pressedCard = card;
        card.classList.add('touch-pressed');
    }, { passive: true });

    function releaseCard() {
        if (!pressedCard) return;

        pressedCard.classList.remove('touch-pressed');
        pressedCard = null;
    }

    document.addEventListener('touchend', releaseCard, { passive: true });
    document.addEventListener('touchcancel', releaseCard, { passive: true });
    document.addEventListener('touchmove', releaseCard, { passive: true });
})();

    animate();
    
}