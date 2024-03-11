//import { Main } from "next/document";
//import Image from "next/image";
import Usuarios from "@/components/Usuarios";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-stone-100">
      <div>
        <Usuarios />
      </div>
    </main>
  );
}
