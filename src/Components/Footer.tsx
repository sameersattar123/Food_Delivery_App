import Link from "next/link";
import React from "react";

const Footer = () => {

  return (
    <div className="text-red-500 h-12 md:h-24 lg:px-20 xl:px-40 flex items-center p-4 justify-between">
      <Link href="/" className="font-bold text-xl">
        MASSIMO
      </Link>
      <p> © All Right Reserved</p>
    </div>
  );
};

export default Footer;
