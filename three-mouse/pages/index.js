import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import MyUser from "@/model/my-user";
import MyPlane from "@/model/my-plane";
import MyCamera from "@/model/my-camera";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="App">
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <MyCamera />
        <MyUser />
        <MyPlane />
        <ambientLight intensity={0.8} />
        <directionalLight />
      </Canvas>
    </div>
  );
}
