"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  p-24">
      <h1 className="text-black font-extrabold text-3xl pb-5">
        Welcome to Boldo! Click the link below to view the Blog I just created.
      </h1>
      <Link href={"/blog"} className="text-blue-500 hover:text-blue-700">
        Go to Blog &rarr;
      </Link>
    </main>
  );
}
