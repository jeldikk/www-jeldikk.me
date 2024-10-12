import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold">Hi;</h1>
      <p className="text-3xl mt-6 mb-2">I&apos; m</p>
      <p className="text-5xl mb-3">J Kamal Kumar</p>
      <div className="link flex flex-row gap-6 text-xl">
        <Link
          className="text-blue-500 underline hover:text-blue-800"
          target="_blank"
          href="https://this.jeldikk.me"
        >
          Portfolio
        </Link>
        <Link
          className="text-blue-500 underline hover:text-blue-800"
          target="_blank"
          href="https://blog.jeldikk.me"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}
