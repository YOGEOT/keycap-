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
        price: 1000
    },

    apple: {
        file: 'apple.glb',
        name: '사과',
        price: 1000
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

    macaron: {
        file: 'macaron.glb',
        name: '마카롱',
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
        price: 1000
    },

    hotdog: {
        file: 'hotdog.glb',
        name: '핫도그',
        price: 1000
    },

    corn: {
        file: 'corn.glb',
        name: '콘',
        price: 1000
    },

    twister_potato: {
        file: 'twister_potato.glb',
        name: '회오리감자',
        price: 1000
    },

    sodduck: {
        file: 'sodduck.glb',
        name: '소떡소떡',
        price: 1000
    },

    stick_dduck: {
        file: 'stick_dduck.glb',
        name: 'Stick Dduck',
        price: 1000
    },

    dubai: {
        file: 'dubai.glb',
        name: 'Dubai',
        price: 1000
    },

    wafle: {
        file: 'wafle.glb',
        name: '와플',
        price: 1000
    }

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

    'peach.all': 1000,

    'apple.all': 1000,

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

    'macaron.all': 3000,

    'pretzel.all': 4000,

    'cookie.all': 4000,

    'potato_hotdog.all': 4000,

    'hotdog.all': 4000,

    'corn.all': 4000,

    'twister_potato.all': 4000,

    'sodduck.all': 4000,

    'stick_dduck.all': 4000,

    'yakgwa.all': 3000

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

    // 전체 키캡 색상 변경
    for (let i = 0; i < 6; i++) {

        // 현재 선택된 색상값 저장
        selectedKeycapColors[i] = color;

    }

    // 현재 로드된 키캡에 색상 적용
    for (let i = 0; i < 6; i++) {

        const cap = capModels[i];

        if (!cap)
            continue;

        cap.traverse((child) => {

            if (!child.isMesh)
                return;

            if (!child.material)
                return;

            child.material.color.set(color);

        });

    }

    // 전체 색상 버튼 활성화
    document
        .querySelectorAll('.color')
        .forEach(item => {
            item.classList.remove('active');
        });

    if (element) {
        element.classList.add('active');
    }

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

window.selectSlot =
function(
    slot,
    element
) {

    document
        .querySelectorAll(
            '.slot'
        )
        .forEach(item => {

            item.classList.remove(
                'active'
            );

        });


    element.classList.add(
        'active'
    );


    selectedSlot =
        slot;


    updateCurrentColorUI();


    const selectedSlotInfo =
        document.querySelector(
            '.selected-slot-info'
        );


    if (selectedSlotInfo) {

        selectedSlotInfo.textContent =
            `선택된 위치 : KEY ${
                selectedSlot + 1
            }`;

    }

};


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

window.changeKeycapColor =
function(
    color,
    element
) {

    selectedKeycapColors[
        selectedSlot
    ] = color;


    if (
        capModels[selectedSlot]
    ) {

        applyKeycapColorToModel(
            capModels[selectedSlot],
            color
        );

    }


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

window.selectSwitch =
async function(
    switchName,
    element
) {

    if (
        !SWITCH_OPTIONS[
            switchName
        ]
    ) {

        return;

    }


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


    await loadCaps(
        'A'
    );


    await loadSwitchToAllSlots(
        selectedSwitch
    );


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


animate();