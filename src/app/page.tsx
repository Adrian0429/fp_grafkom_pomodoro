import Image from "next/image";
import DataStream from "./DataStream";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DataStream />
    </main>
  );
}
