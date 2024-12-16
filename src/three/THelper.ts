import {
  AxesHelper,
  Color,
  GridHelper,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { pointLightList, spotLightList } from "./TLight";

import { VertexNormalsHelper } from "three/addons/helpers/VertexNormalsHelper.js";

import { box, geometryMesh } from "./TBasicObject";

const helperList: Object3D[] = [];

const axesHelper = new AxesHelper(500);
const gridHelper = new GridHelper(
  500,
  20,
  "rgb(100, 100, 100)",
  "rgb(100, 100, 100)"
);

const boxHelper = new VertexNormalsHelper(box, 5, new Color("blue").getHex());
const geomeytyHelper = new VertexNormalsHelper(
  geometryMesh,
  5,
  new Color("blue").getHex()
);
const pointLightHelperList = pointLightList.map(
  (light) => new PointLightHelper(light, light.distance, light.color)
);
const spotLightHelperList = spotLightList.map(
  (light) => new SpotLightHelper(light, light.color)
);

const ojectHeplerList = [boxHelper, geomeytyHelper];
helperList.push(
  axesHelper,
  gridHelper,
  ...ojectHeplerList,
  // ...pointLightHelperList,
  ...spotLightHelperList
);

export { helperList };
