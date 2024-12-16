import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  Vector3,
  AmbientLight,
  AxesHelper,
  GridHelper,
  MOUSE,
  Object3D,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

export class TEngine {
  private dom: HTMLElement;
  private renderer: WebGLRenderer;

  private scene: Scene;
  private camera: PerspectiveCamera;

  constructor(dom: HTMLElement) {
    this.dom = dom;
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.dom.offsetWidth, this.dom.offsetHeight, true);
    this.renderer.shadowMap.enabled = true;
    this.scene = new Scene();

    const axesHelper = new AxesHelper(500);
    const gridHelper = new GridHelper(
      500,
      20,
      "rgb(100, 100, 100)",
      "rgb(100, 100, 100)"
    );

    this.scene.add(axesHelper);
    this.scene.add(gridHelper);
    this.camera = new PerspectiveCamera(
      75,
      this.dom.offsetWidth / this.dom.offsetHeight,
      0.1,
      1000
    );

    // this.camera.position.z = 5;
    this.camera.position.set(100, 100, 200);

    // this.camera.lookAt(0, 0, 0);
    // this.camera.up = new Vector3(0, 1, 0);

    // 初始化监控器
    const stats = new Stats();
    const statsDom = stats.dom;
    statsDom.style.position = "fixed";
    statsDom.style.top = "10px";
    statsDom.style.right = "10px";
    statsDom.style.left = "unset";

    //add orbit controls
    const orbitControls = new OrbitControls(
      this.camera,
      this.renderer.domElement
    );
    // orbitControls.mouseButtons = {
    //   LEFT: MOUSE.ROTATE,
    // };

    // orbitControls.autoRotate = true;
    // orbitControls.enableDamping = true;

    this.camera.lookAt(new Vector3(0, 0, 0));
    this.camera.up = new Vector3(0, 1, 0);

    const animate = () => {
      stats.update();
      orbitControls.update();

      // box.position.z += 0.1;
      this.renderer.render(this.scene, this.camera);
    };

    this.renderer.setClearColor("rgba(0, 0, 0)");
    this.renderer.clearColor();

    this.renderer.render(this.scene, this.camera);
    this.renderer.setAnimationLoop(animate);
    this.dom.append(this.renderer.domElement);
    this.dom.append(statsDom);
  }

  addObjects(...objects: Object3D[]) {
    objects.forEach((element) => {
      this.scene.add(element);
    });
  }
}
