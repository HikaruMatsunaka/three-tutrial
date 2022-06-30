//シーンを用意
//シーンを作る
const scene = new THREE.Scene();

//カメラを用意する
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//レンダリングの準備をする
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//準備完了
//描画するものを用意

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

//キューブをシーンに追加する
scene.add(cube);

//カメラの位置を調整
camera.position.z = 5;

//最後に、レンダリングをして描画する
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  //動きをつけていく
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
}
animate();
