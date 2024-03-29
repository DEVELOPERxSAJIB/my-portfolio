import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#F0F0F0"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    </>
  );
};

const BallCanvas = ({ title, icon }) => {
  return (
    // <Canvas
    //   frameloop="demand"
    //   dpr={[1, 2]}
    //   gl={{ preserveDrawingBuffer: true }}
    // >
    //   <Suspense fallback={<CanvasLoader />}>
    //     <OrbitControls enableZoom={false} />
    //     <Ball imgUrl={icon} />
    //   </Suspense>

    //   <Preload all />
    // </Canvas>

    <figure className="max-w-lg">
      <img
        className="h-[120px] w-[120px] rounded-lg"
        src={icon}
        alt="image description"
      />
      <figcaption className="mt-2 text-sm text-center text-[#c3bca1] dark:text-gray-400">
        {title}
      </figcaption>
    </figure>
  );
};

export default BallCanvas;
