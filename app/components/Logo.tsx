import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-[10px]">
      <Image src={"/logoo.svg"} alt="logo" width={24} height={36} />
      <h2 className="text-[42px] font-bold text-[#0A2640]">Boldo</h2>
    </Link>
  );
};

export default Logo;
