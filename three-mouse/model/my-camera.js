import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
const MyCamera = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const handlePointerLock = () => {
    gl.domElement.requestPointerLock();
  };

  const handleMouseMove = (event) => {
    if (document.pointerLockElement) {
      camera.rotation.y -= event.movementX * 0.002;
      camera.rotation.x -= event.movementY * 0.002;
    }
  };

  const handleCreated = (controls) => {
    controls.enabled = false;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handlePointerLock);
  };

  useEffect(() => {
    camera.position.set(0, 100, 0);
  }, [camera]);

  useFrame(() => {
    camera.lookAt(0, 0, 0);
  });

  return (
    <OrbitControls
      onCreated={handleCreated}
      ref={controlsRef}
      target={[0, 5, 0]}
      args={[camera, gl.domElement]}
      enableDamping={true}
    />
  );
};
export default MyCamera;
