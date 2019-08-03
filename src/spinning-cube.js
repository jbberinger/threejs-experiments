import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';

const spinningCube = () => {
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75, // FOV in degrees
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near clipping plane
    1000, // far clipping plane
  );

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({
    color: 0x00ff00,
  });
  const cube = new Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
};

export default spinningCube;
