import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../contants";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { GradientLight } from "./design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className={`block border-2 border-n-7 rounded-xl relative p-0.5 md:max-w-[24rem]  `}
            >
              <div className="relative z-2 flex flex-col min-w-[22rem] p-[2.4rem] pointer-events-none ">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6">{item.text}</p>
                <div className="flex items-center mxt-auto">
                  <img
                    src={item.iconUrl}
                    height={48}
                    width={48}
                    alt={item.title}
                    className=""
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider ">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{
                  clipPath: "url(#benefits)",
                }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      className="w-full h-full object-cover"
                      src={item.imageUrl}
                      height={362}
                      width={380}
                      alt={item.title}
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
