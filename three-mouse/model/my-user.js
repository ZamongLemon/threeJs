import { useRef } from "react";

const MyUser = () => {
  const myMesh = useRef();
  return (
    <mesh scale={10} position={[0, 5, 0]} ref={myMesh}>
      <boxBufferGeometry />
      <meshPhongMaterial color="red" />
    </mesh>
  );
};
export default MyUser;
