"use client";
import Image from "next/image";
import { Navbar } from "src/app/components/Navbar";
import { Builder } from "src/app/components/builder/Builder";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Builder />
    </div>
  );
}
