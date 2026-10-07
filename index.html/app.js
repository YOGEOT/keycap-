import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// ============================================================
// 기본 설정
// ============================================================

const container =
    document.getElementById(
        'canvas-container'
    );


// ============================================================
// Scene
// ============================================================

const scene =
    new THREE.Scene();

scene.background =
    new THREE.Color(
        0xf4f4f4
    );


// ============================================================
// Camera
// ============================================================

const camera =
    new THREE.PerspectiveCamera(
        35,
        container.clientWidth /
        container.clientHeight,
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

const renderer =
    new THREE.WebGLRenderer({
        antialias: true
    });

renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
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

controls.enableDamping =
    true;

controls.dampingFactor =
    0.08;

controls.minDistance =
    0.1;

controls.maxDistance =
    10000;

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

    wafle: {
        file: 'wafle.glb',
        name: '와플',
        price: 1000

    }

};


// ============================================================
// ⭐ 케이스별 추가금액
//
// 여기에서 케이스별 추가금액을 직접 수정할 수 있습니다.
//
// case.glb
// → 기본 베이스
//
// pattern_case.glb
// → 패턴 베이스
//
// 3case.glb
// → 3구 케이스
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
// ⭐ .all 파츠별 추가금액
//
// 각 .all 파츠의 "전체 배치 가격"을
// 여기에서 직접 수정할 수 있습니다.
//
// 예:
//
// egg.all
// → KEY 1~6 전체 배치
// → +5,000원
//
// takoyaki.all
// → KEY 1~6 전체 배치
// → +6,000원
//
// yakgwa.all
// → KEY 1~6 전체 배치
// → +4,000원
//
// ※ 기존 egg / takoyaki / yakgwa 가격과 별개입니다.
// ============================================================

const ALL_PART_PRICES = {

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

    'marshmallow.01.all': 4000,

    'marshmallow.02.all': 4000,

    'macaron.all': 3000,

    'yakgwa.all': 3000

};


// ============================================================
// 현재 상태
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


let selectedType =
    'A';


let selectedSlot =
    0;


let selectedBaseColor =
    '#ff8bd1';


let selectedKeycapColors = [

    '#ff8bd1',
    '#ff8bd1',
    '#ff8bd1',
    '#ff8bd1',
    '#ff8bd1',
    '#ff8bd1'

];


// ============================================================
// 가격
// ============================================================

const BASE_PRICE =
    15900;


// ============================================================
// 재질
// ============================================================

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

            const freshPath =
                `${path}${cacheBuster}`;


            console.log(
                'GLB 로드:',
                freshPath
            );


            loader.load(

                freshPath,

                gltf => {

                    console.log(
                        'GLB 로드 완료:',
                        path
                    );

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
// Material 적용
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
// 실제 모델의 월드 Bounding Box 중심
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
// Camera 자동 맞춤
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


    distance *=
        1.35;


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
// 3구 케이스 확인
// ============================================================

function isThreeKeyCase() {

    return (
        selectedBase ===
        'case_3botton.glb'
    );

}


// ============================================================
// 3구 케이스 표시 처리
//
// 3구:
//
// KEY 1 → 표시
// KEY 2 → 숨김
// KEY 3 → 표시
// KEY 4 → 숨김
// KEY 5 → 표시
// KEY 6 → 숨김
// ============================================================

function updateThreeKeyCaseVisibility() {

    const threeKey =
        isThreeKeyCase();


    if (capModels[0]) {

        capModels[0].visible =
            true;

    }


    if (capModels[1]) {

        capModels[1].visible =
            !threeKey;

    }


    if (capModels[2]) {

        capModels[2].visible =
            true;

    }


    if (capModels[3]) {

        capModels[3].visible =
            !threeKey;

    }


    if (capModels[4]) {

        capModels[4].visible =
            true;

    }


    if (capModels[5]) {

        capModels[5].visible =
            !threeKey;

    }


    // KEY 2
    if (partModels[1]) {

        partModels[1].visible =
            !threeKey;

    }


    // KEY 4
    if (partModels[3]) {

        partModels[3].visible =
            !threeKey;

    }


    // KEY 6
    if (partModels[5]) {

        partModels[5].visible =
            !threeKey;

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

        baseModel =
            null;

    }


    try {

        console.log(
            'Base 로드 시작:',
            fileName
        );


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


        console.log(
            'Base 로드 완료:',
            fileName
        );

    }

    catch (error) {

        console.error(
            'Base 로드 실패:',
            fileName,
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


    console.log(
        '선택한 Base:',
        selectedBase
    );


    loadBase(
        selectedBase
    );


    // ⭐ 케이스 변경 후 가격 갱신
    updatePrice();

};



// ============================================================
// KEYCAP 로드
// ============================================================

async function loadCaps(
    type
) {

    console.log(
        `TYPE ${type} 로드 시작`
    );


    for (
        let i = 0;
        i < 6;
        i++
    ) {

        if (capModels[i]) {

            productGroup.remove(
                capModels[i]
            );

            capModels[i] =
                null;

        }

    }


    try {

        for (
            let i = 0;
            i < 6;
            i++
        ) {

            const capNumber =
                i + 1;


            const path =
                `./Type${type}_cap${capNumber}.glb`;


            console.log(
                '키캡 로드:',
                path
            );


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


        fitCameraToProduct();


        console.log(
            `TYPE ${type} 로드 완료`
        );

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


    console.log(
        '선택한 TYPE:',
        selectedType
    );


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
// KEYCAP 색상
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
// KEY 선택
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


    console.log(
        '선택 슬롯:',
        selectedSlot + 1
    );


    updateCurrentColorUI();


    // 선택된 KEY 표시
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
// 현재 KEY 색상 UI
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

            const buttonColor =
                button.dataset.keycapColor;


            if (
                buttonColor ===
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
// KEYCAP 색상 변경
// ============================================================

window.changeKeycapColor =
function(
    color,
    element
) {

    selectedKeycapColors[
        selectedSlot
    ] = color;


    console.log(
        `KEY ${
            selectedSlot + 1
        } 색상 변경:`,
        color
    );


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
// 전체 KEY 파츠 제거
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
// 파츠를 선택 KEY에 배치
// ============================================================

function movePartToSlot(
    partModel,
    slot
) {

    if (!partModel) {

        console.warn(
            '이동할 파츠가 없습니다.'
        );

        return;

    }


    if (!capModels[0]) {

        console.warn(
            'KEY 1 키캡이 없습니다.'
        );

        return;

    }


    if (!capModels[slot]) {

        console.warn(
            `KEY ${
                slot + 1
            } 키캡이 없습니다.`
        );

        return;

    }


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


    console.log(
        `KEY 1 → KEY ${
            slot + 1
        } 파츠 이동`
    );


    console.log(
        'KEY 1 중심:',
        referenceCenter
    );


    console.log(
        `KEY ${
            slot + 1
        } 중심:`,
        targetCenter
    );


    console.log(
        '이동량:',
        offset
    );

}


// ============================================================
// 파츠 하나 로드
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

        console.log(
            `${partInfo.name} 로드 시작`
        );


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


        console.log(
            `KEY ${
                slot + 1
            }에 ${
                partInfo.name
            } 배치 완료`
        );


        return part;

    }

    catch (error) {

        console.error(
            `${partInfo.name} 로드 실패:`,
            error
        );


        return null;

    }

}


// ============================================================
// .all 파츠인지 확인
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
// .all → 기본 파츠 이름
//
// egg.all
// → egg
//
// yakgwa.all
// → yakgwa
// ============================================================

function getBasePartName(
    partName
) {

    if (!isAllPart(partName)) {

        return partName;

    }


    return partName.slice(
        0,
        -4
    );

}


// ============================================================
// ⭐ 전체 KEY에 .all 파츠 배치
// ============================================================

async function loadPartToAllSlots(
    allPartName
) {

    // --------------------------------------------------------
    // egg.all → egg
    // --------------------------------------------------------

    const basePartName =
        getBasePartName(
            allPartName
        );


    // --------------------------------------------------------
    // 실제 파츠 존재 확인
    // --------------------------------------------------------

    const partInfo =
        PARTS[basePartName];


    if (!partInfo) {

        console.error(
            '.all 대상 파츠가 없습니다:',
            basePartName
        );

        return;

    }


    // --------------------------------------------------------
    // 기존 파츠 전체 제거
    // --------------------------------------------------------

    removeAllParts();


    // --------------------------------------------------------
    // KEY 1~6 전체 배치
    // --------------------------------------------------------

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


        if (!part) {

            continue;

        }


        partModels[i] =
            part;


        selectedParts[i] =
            basePartName;


        // ----------------------------------------------------
        // 3구 케이스
        // ----------------------------------------------------

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


        // ----------------------------------------------------
        // KEY 이름 표시
        // ----------------------------------------------------

        const nameElement =
            document.getElementById(
                `slotName${i}`
            );


        if (nameElement) {

            nameElement.textContent =
                partInfo.name;

        }

    }


    updateThreeKeyCaseVisibility();


    console.log(
        `${allPartName} 전체 배치 완료`
    );

}


// ============================================================
// 파츠 선택
// ============================================================

window.selectPart =
async function(
    partName
) {

    console.log(
        '--------------------------------'
    );


    console.log(
        '선택한 파츠:',
        partName
    );


    console.log(
        '선택된 KEY:',
        selectedSlot + 1
    );


    // ========================================================
    // .all 파츠
    // ========================================================

    if (
        isAllPart(
            partName
        )
    ) {

        // .all 가격 등록 여부 확인
        if (
            ALL_PART_PRICES[
                partName
            ] === undefined
        ) {

            console.warn(
                `${partName}의 .all 가격이 등록되지 않았습니다.`
            );


            alert(
                `${partName}의 전체 배치 가격이 설정되지 않았습니다.`
            );


            return;

        }


        await loadPartToAllSlots(
            partName
        );


        updatePrice();


        fitCameraToProduct();


        return;

    }


    // ========================================================
    // 3구 케이스에서 KEY 2 / 4 / 6 선택 방지
    // ========================================================

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


    // ========================================================
    // NONE
    // ========================================================

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

    // ========================================================
    // ALL NONE
    // 전체 KEY의 파츠 제거
    // ========================================================

    if (
    partName === 'all-none'
    ) {

    removeAllParts();


    updateThreeKeyCaseVisibility();


    updatePrice();


    fitCameraToProduct();


    return;

    }


    // ========================================================
    // 파츠 등록 여부 확인
    // ========================================================

    if (
        !PARTS[partName]
    ) {

        console.error(
            'PARTS에 등록되지 않은 파츠입니다:',
            partName
        );


        return;

    }


    // ========================================================
    // 기존 파츠 제거
    // ========================================================

    removePartFromSlot(
        selectedSlot
    );


    // ========================================================
    // 새 파츠 로드
    // ========================================================

    const part =
        await loadPartToSlot(
            partName,
            selectedSlot
        );


    if (!part) {

        updatePrice();

        return;

    }


    // ========================================================
    // 현재 KEY에 저장
    // ========================================================

    partModels[
        selectedSlot
    ] = part;


    selectedParts[
        selectedSlot
    ] = partName;


    // ========================================================
    // 현재 KEY 이름 표시
    // ========================================================

    const nameElement =
        document.getElementById(
            `slotName${selectedSlot}`
        );


    if (nameElement) {

        const partInfo =
            PARTS[partName];


        nameElement.textContent =
            partInfo
                ? partInfo.name
                : '비어있음';

    }


    // ========================================================
    // 3구 케이스 여부에 따른 표시
    // ========================================================

    if (
        isThreeKeyCase() &&
        (
            selectedSlot === 1 ||
            selectedSlot === 3 ||
            selectedSlot === 5
        )
    ) {

        part.visible =
            false;

    }


    // ========================================================
    // 가격 업데이트
    // ========================================================

    updatePrice();


    fitCameraToProduct();

};


// ============================================================
// ⭐ 현재 선택된 .all 파츠 찾기
//
// selectedParts에 같은 파츠가 6개 들어있으면
// 해당 파츠가 .all로 선택된 것으로 판단합니다.
//
// 예:
//
// [egg, egg, egg, egg, egg, egg]
// → egg.all
//
// [egg, egg, yakgwa, egg, egg, egg]
// → 일반 개별 선택으로 계산
// ============================================================

function getSelectedAllPart() {

    if (
        selectedParts.length !== 6
    ) {

        return null;

    }


    const firstPart =
        selectedParts[0];


    if (!firstPart) {

        return null;

    }


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
// ⭐ 가격 계산
//
// 총 금액:
//
// 기본 제품 가격
// +
// 케이스 추가금
// +
// 일반 파츠 추가금
// +
// .all 파츠 추가금
//
// ------------------------------------------------------------
//
// 일반 파츠:
//
// egg × 1
// → +1,000원
//
// egg × 2
// → +2,000원
//
// ------------------------------------------------------------
//
// .all 파츠:
//
// egg.all
// → KEY 1~6 전체 배치
// → 설정된 egg.all 가격만 추가
//
// 예:
// egg.all = 5,000원
//
// → +5,000원
//
// KEY 6개라고 해서
// 1,000 × 6 = 6,000원으로 계산하지 않습니다.
// ============================================================

function updatePrice() {

    let partPrice =
        0;


    // ========================================================
    // 1. 케이스 추가금액
    // ========================================================

    const baseOption =
        BASE_OPTIONS[
            selectedBase
        ];


    let baseOptionPrice =
        0;


    if (baseOption) {

        baseOptionPrice =
            baseOption.price;

    }


    // ========================================================
    // 2. .all 파츠인지 확인
    // ========================================================

    const selectedAllPart =
        getSelectedAllPart();


    // ========================================================
    // 3. .all 파츠
    // ========================================================

    if (selectedAllPart) {

        partPrice =
            ALL_PART_PRICES[
                selectedAllPart
            ];

    }


    // ========================================================
    // 4. 일반 파츠
    // ========================================================

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


    // ========================================================
    // 5. 총 금액
    // ========================================================

    const totalPrice =
        BASE_PRICE +
        baseOptionPrice +
        partPrice;


    // ========================================================
    // 화면 표시
    // ========================================================

    const basePriceElement =
        document.getElementById(
            'basePrice'
        );


    const partPriceElement =
        document.getElementById(
            'partPrice'
        );


    const totalPriceElement =
        document.getElementById(
            'totalPrice'
        );


    if (
        basePriceElement
    ) {

        basePriceElement.textContent =
            (
                BASE_PRICE +
                baseOptionPrice
            ).toLocaleString(
                'ko-KR'
            ) +
            '원';

    }


    if (
        partPriceElement
    ) {

        partPriceElement.textContent =
            partPrice.toLocaleString(
                'ko-KR'
            ) +
            '원';

    }


    if (
        totalPriceElement
    ) {

        totalPriceElement.textContent =
            totalPrice.toLocaleString(
                'ko-KR'
            ) +
            '원';

    }


    // ========================================================
    // 콘솔 확인
    // ========================================================

    console.log(
        '----------------------------'
    );


    console.log(
        '기본 제품 가격:',
        BASE_PRICE
    );


    console.log(
        '케이스 추가금:',
        baseOptionPrice
    );


    console.log(
        '파츠 추가금:',
        partPrice
    );


    console.log(
        '.all 선택:',
        selectedAllPart
    );


    console.log(
        '총 금액:',
        totalPrice
    );


    console.log(
        '----------------------------'
    );

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

        '선택한 구성은\n' +

        'F12 → Console\n\n' +

        '에서 확인할 수 있습니다.'

    );

};


// ============================================================
// 초기 실행
// ============================================================

async function init() {

    console.log(
        '================================'
    );


    console.log(
        'FOMORA 3D START'
    );


    console.log(
        '================================'
    );


    await loadBase(
        'case.glb'
    );


    await loadCaps(
        'A'
    );


    updatePrice();


    fitCameraToProduct();


    console.log(
        '================================'
    );


    console.log(
        'FOMORA 3D READY'
    );


    console.log(
        '================================'
    );

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