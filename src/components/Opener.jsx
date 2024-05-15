import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Opener = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={` ${
        !isOpen ? "hidden" : ""
      } fixed  w-full  bg-transparent z-50 `}
    >
      <div className=" absolute backdrop-blur-sm bg-n-8/70 z-10 flex items-center justify-center top-[12rem] left-[2rem] h-[20rem] w-[25rem]  md:left-[20rem] md:top-[10rem] md:w-[50vw] md:h-[30vw] rounded-xl border border-n-4/20 p-4">
        <div className=" w-[100%] h-[100%] flex flex-col ">
          <h1 className="h1 text-center mt-[2.5rem] md:mt-[4rem] ">
            Follow Me 👇
          </h1>
          <span
            onClick={handleClick}
            className=" absolute right-3 w-[2.8rem] h-[2.8rem] md:w-[3.4rem] md:h-[3.4rem]  rounded-full md:top-[1rem] md:right-[1rem] flex items-center justify-center cursor-pointer "
          >
            <MdCancel size={40} />
          </span>
          <div className=" mt-[3.5rem] md:mt-[5rem] mx-auto gap-[10rem] flex  ">
            <a
              target="_blank"
              href="https://twitter.com/Priyanshu_k0/"
              className="bg-n-8 w-20  p-2 h-20  pt-4 pl-[1rem] rounded-full border border-n-3 cursor-pointer opacity-100 md:opacity-45 hover:opacity-100 transition-opacity "
            >
              <FaXTwitter size={50} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/priyanshu-kayarkar/"
              className="bg-n-8 w-20  p-2 h-20  pt-4 pl-[1rem] rounded-full border border-n-3 cursor-pointer opacity-100 md:opacity-45 hover:opacity-100 transition-opacity  "
            >
              <FaLinkedinIn size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opener;
