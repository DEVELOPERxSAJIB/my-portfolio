import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ mobile }) => {
  const computer = useGLTF("./real_drone/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={7.12} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight
        castShadow
        position={[10, 100, 10]}
        angle={0.6}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={mobile ? 0.65 : 1.5}
        position={[2, .5, 2]}
        rotation={[-0.01, -0.1, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setMobile(mediaQuery.matches);

    const handleMediaQuaryChange = (event) => {
      setMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQuaryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuaryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers mobile={mobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
