import { Texture, TextureLoader } from "three";

const textureLoader: TextureLoader = new TextureLoader();
const pictureTexture: Texture = textureLoader.load(
  "/src/assets/ns7l0_furniture.png"
);

export { pictureTexture };
