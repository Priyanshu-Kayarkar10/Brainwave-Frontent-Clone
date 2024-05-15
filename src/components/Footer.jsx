import React from "react";
import Section from "./Section";
import { socials } from "../contants";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 ">
      <div className="container flex md:justify-between justify-center items-center gap-10 max-sm:flex-col  ">
        <p className="caption text-n-4 lg:block ">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        <div className=" border border-n-7 px-3 py-3 lg:py-4 rounded-md ">
          <h2 className="font-code md:text-[0.72rem] lg:text-[1.3rem] ">
            Build With 💖 by{" "}
            <span className=" tracking-wide font-bold ">PRIYASNHU</span>
          </h2>
        </div>

        <ul className="flex gap-5 flex-wrap ">
          {socials.map((item) => (
            <a
              className="flex items-center justify-center w-10  h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 "
              key={item.id}
              href={item.url}
              target="_blank"
            >
              {/* <img width={16} height={16} src={item.iconUrl} alt={item.title} /> */}
              {item.icon === "Twitter" ? <FaXTwitter /> : <FaLinkedinIn />}
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
