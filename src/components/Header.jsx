import React, { useEffect } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
  const hireref = useRef(null);

  gsap.registerPlugin(useGSAP);
  
  useGSAP(() => {
    const interval = setInterval(() => {
      const tl = gsap.timeline();
      tl.to(hireref.current, {
        scale: 1.13,
        duration: 0.8,
      }).to(hireref.current, {
        scale: 1, 
        duration: 0.8,
      });
    }, 2000); // Increased interval to 2 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  });

  return (
    <div className="w-full z-10 h-10 bg-transparent fixed p-10">
      <div className="w-full flex justify-end items-center gap-4">
        <button ref={hireref} className="text-md shadow-md shadow-slate-800 capitalize border-[6px] border-white tracking-tighter leading-none bg-black hover:scale-105 hover:bg-zinc-400 duration-300 transition-all text-white py-3 px-6 font-[anzo2] rounded-3xl">hire me</button>
        <RiMenu5Line className="text-zinc-200 text-3xl mr-2" />
      </div>
    </div>
  );
};

export default Header;
