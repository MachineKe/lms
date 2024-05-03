import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center relative h-screen">
      <div className="w-[50%] md:w-[50%] relative">
        {/* <Image
          src={require("../../public/Assets/pexels-august-de-richelieu-4261790.jpg")}
          alt=""
          className="object-contain 1100:max-w-[90%] 1500px:max-w-[85%] z-[10]"
          
        /> */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      </div>
      <div className="md:w-[50%] flex flex-col items-center text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white md:w-3/4 leading-tight">
          Enjoy the best online learning experience at Gloxad Academy
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4 md:w-3/4">
          We offer 40k+ online courses & have 500k+ registered students. Find
          your desired course today.
        </p>
        <div className="mt-6 md:mt-8 w-full md:w-3/4 relative">
          <input
            type="search"
            placeholder="Search Courses..."
            className="w-full py-2 px-4 border border-gray-300 dark:border-none dark:bg-[#575757] rounded-md focus:outline-none focus:ring-2 focus:ring-[#39c1f3] dark:focus:ring-white"
          />
          <div className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-12 bg-[#39c1f3] rounded-r-md">
            <BiSearch className="text-white" size={24} />
          </div>
        </div>
        <div className="flex items-center mt-6 md:mt-8">
          <Image
            src={require("../../public/Assets/client1.jpg")}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <Image
            src={require("../../public/Assets/client2.jpg")}
            alt=""
            className="w-10 h-10 rounded-full ml-[0]px]"
          />
          <Image
            src={require("../../public/Assets/client3.jpg")}
            alt=""
            className="w-10 h-10 rounded-full ml-[5]px]"
          />
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 ml-2">
            500K+ People have already trusted us.{" "}
            <Link href="/courses" className="text-[#37a39a] dark:text-[#46e256]">
              View Courses
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
