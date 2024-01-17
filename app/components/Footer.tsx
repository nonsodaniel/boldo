import { footerCompanyData, footerLandingsData } from "@/utils/constants";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div>
      <footer className="pt-10 lg:px-[60px] xl:px-[100px]">
        <div className="flex flex-col lg:flex-row items-start justify-between px-5 lg:px-0">
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            <Logo />
            <p className="text-base pr-[4rem] lg:text-lg font-normal text-[#777777] leading-6">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:mr-10 lg:w-full xl:w-2/3 lg:gap-10 xl:gap-16 mt-8 lg:mt-0">
            <div>
              <h2 className="text-lg lg:text-xl font-bold text-[#000000]">
                Landings
              </h2>
              <ul className="mt-4 lg:mt-6 flex flex-col gap-4">
                {footerLandingsData.map((item) => (
                  <li key={item}>
                    <Link href="#">
                      <p className="text-base lg:text-lg font-normal text-[#777777] hover:underline">
                        {item}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg lg:text-xl font-bold text-[#000000]">
                Company
              </h2>
              <ul className="mt-4 lg:mt-6 flex flex-col gap-4">
                {footerCompanyData.map((item) => (
                  <li>
                    <Link href="#">
                      <p className="text-base lg:text-lg font-normal text-[#777777] hover:underline">
                        {item}
                        {item === "Career" && (
                          <span className="py-1 text-[13px] font-bold px-2 ml-[10px] bg-[#65E4A3] text-[#0A2640] rounded-3xl">
                            Hiring!
                          </span>
                        )}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg lg:text-xl font-bold text-[#000000]">
                Resources
              </h2>
              <ul className="mt-4 lg:mt-6 flex flex-col gap-4">
                {footerLandingsData.map((item) => (
                  <li key={item}>
                    <Link href="#">
                      <p className="text-base lg:text-lg font-normal text-[#777777] hover:underline">
                        {item}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-10 pb-16 px-5 lg:px-0">
          <p className="text-base lg:text-lg font-normal text-[#777777] leading-6">
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
