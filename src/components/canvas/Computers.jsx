import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.25}
      groundColor='black'/>
      <pointLight intensity={1}/>
      <spotLight
      position={[-20, 50, 10]}
      angle={[0,12]}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      {/* edits the 3D model properties*/}
      <primitive
        object={computer.scene}
        scale={isMobile? 0.45 : 0.75}
        position={isMobile? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>

    )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  //checks if were in a mobile device
  const mediaQuery = window.matchMedia("(max-width: 500px)");

  setIsMobile(mediaQuery.matches);

  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  };

    //event listener (the above cb function) checks for changes to screen size
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        autoRotate
        enableZoom={false}
        autoRotateSpeed={0.4}
        // limits rotation to one axis
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas