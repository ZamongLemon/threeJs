const { useRef } = require("react");

const MyPlane = () => {
  const myMesh = useRef();
  return (
    <mesh
      scale={100}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      ref={myMesh}
    >
      <planeBufferGeometry />
      <meshPhongMaterial color="cornflowerblue" />
    </mesh>
  );
};
export default MyPlane;
