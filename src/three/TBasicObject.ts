import {
  MeshBasicMaterial,
  Mesh,
  BoxGeometry,
  Object3D,
  MeshStandardMaterial,
  PlaneGeometry,
  BufferAttribute,
  DoubleSide,
  MeshLambertMaterial,
  MeshPhongMaterial,
} from "three";
import { pictureTexture } from "./TTexture";

const objects: Object3D[] = [];

const floor = new Mesh(
  new BoxGeometry(200, 10, 200),
  new MeshStandardMaterial({ color: "rgb(100, 100, 100)", roughness: 0.2 })
);

floor.position.y = -5;
floor.receiveShadow = true;

const box = new Mesh(
  new BoxGeometry(20, 20, 20),
  new MeshStandardMaterial({
    color: "rgb(255, 0, 0)",
    metalness: 0.7,
    roughness: 0.3,
  })
);
box.position.y = 10;
box.position.x = 10;
box.position.z = 10;
box.castShadow = true;

const sideLength = 40;

const vertices: Float32Array = new Float32Array([
  0,
  sideLength,
  sideLength,
  //
  0,
  sideLength,
  0,
  //
  sideLength,
  sideLength,
  0,
  //
  sideLength,
  sideLength,
  sideLength,

  //
  0,
  sideLength * 2,
  sideLength,
  //
  0,
  sideLength * 2,
  0,

  //

  sideLength,
  sideLength * 2,
  0,
  //
  sideLength,
  sideLength * 2,
  sideLength,
]);

const indecies = [
  3, 2, 6, 6, 7, 3, 6, 2, 1, 6, 1, 5, 4, 7, 6, 4, 6, 5, 4, 0, 7, 7, 0, 3, 4, 1,
  0, 4, 5, 1, 0, 2, 3, 0, 1, 2,
];

const uv = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1]);

const geometry: BoxGeometry = new BoxGeometry();
geometry.setIndex(indecies);
geometry.setAttribute("position", new BufferAttribute(vertices, 3));
geometry.setAttribute("normal", new BufferAttribute(vertices, 3));
geometry.setAttribute("uv", new BufferAttribute(uv, 2));

const geometryMaterial = new MeshStandardMaterial({
  color: "rgb(255, 255, 255)",
  map: pictureTexture,
  // metalness: 1,
  // roughness: 0.3,
});
const geometryMesh = new Mesh(geometry, geometryMaterial);
geometryMesh.castShadow = true;
//相框
const gallery: Mesh = new Mesh(
  new PlaneGeometry(100, 100),
  new MeshBasicMaterial({
    color: "rgb(200, 200, 200)",
    map: pictureTexture,
    side: DoubleSide,
  })
);

gallery.position.set(20, 50, -30);

objects.push(floor);
objects.push(box);
objects.push(gallery);
objects.push(geometryMesh);
export { objects, box, geometryMesh };
