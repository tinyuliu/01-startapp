// import threejs
import * as THREE from "three";
// 導入軌道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Create the scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // renderer.domElement is the canvas

// Create geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Create material
const material = new THREE.MeshBasicMaterial({color: 0xee82ee});
// Create mash
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Set te camera position, the default will be 0
camera.position.z = 5;
camera.position.y = 2;
camera.position.x = 2;
camera.lookAt(0, 0, 0);

// 添加世界座標輔助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 添加軌道控制器
const controls = new OrbitControls(camera, renderer.domElement);
// 設置帶組尼的慣性
controls.enableDamping = true;
// 設置組尼係數
controls.dampingFactor = 0.05;
// 設置旋轉速度
controls.autoRotate = 0.05;


// Render function
function animate() {
	// 每一次都要更新
	controls.update();
	//每一幀都調用函數
	requestAnimationFrame(animate);
	//旋轉
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	// Render
	renderer.render(scene, camera);
}

animate();


