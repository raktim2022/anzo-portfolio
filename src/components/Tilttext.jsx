import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Tilttext = ({titleref}) => {
  return (
    <div className="title h-full">
      <div ref={titleref} className="text-white transition-all ease-linear duration-500 absolute mt-24 leading-none font-[anzo2] font-extrabold tracking-tighter">
        <h1 className="text-white text-[4.2vw] tracking-tighter uppercase">
          i am <span className="text-zinc-600">dark mode</span> <sup>tm</sup>
        </h1>
        <h1 className="text-[10vw] uppercase tracking-tight">designer</h1>
        <h1 className="text-white text-[3.7vw] uppercase">to hire</h1>
      </div>
      <div className="text-xl tracking-tighter text-white leading-none absolute top-96 left-16">
        <h3 className="font-bold">BRAND DESIGN | WEBSITE DESIGN</h3>
        <h3 className="font-extralight">BESPOKE FREELANCE</h3>
      </div>
    </div>
  );
};

export default Tilttext;
