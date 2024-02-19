import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 main">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Getwayconnect logo"
          width={800}
          height={300}
          priority
        />

      <h1 className="text-green-600 text-4xl">Coming Soon</h1>
    </main>
  );
}
