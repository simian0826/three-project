import { AmbientLight, Object3D, PointLight, SpotLight } from "three";

const lightList: Object3D[] = [];
const pointLightList: PointLight[] = [];
const spotLightList: SpotLight[] = [];

const ambientLight = new AmbientLight("rgb(255, 255, 255)", 1);
const pointLight = new PointLight("rgb(255,0,255)", 1, 100, 0.2);
const spotLight = new SpotLight(
  "rgb(255,0,255)",
  1,
  400,
  (Math.PI / 180) * 20,
  0.4,
  0
);
ambientLight.position.set(0, 400, 0);
pointLight.position.set(40, 40, 40);
spotLight.position.set(40, 160, 40);
spotLight.castShadow = true;

spotLightList.push(spotLight);
pointLightList.push(pointLight);
lightList.push(ambientLight, ...spotLightList);

export { lightList, pointLightList, spotLightList };
