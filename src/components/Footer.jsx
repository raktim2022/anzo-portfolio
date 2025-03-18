import React, { useEffect, useRef } from "react";
import { FiInstagram, FiDribbble, FiLinkedin } from "react-icons/fi";
import { RiArrowUpLine } from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  const footerRef = useRef(null);
  const lineRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the footer line
    gsap.fromTo(
      lineRef.current,
      { width: 0 },
      {
        width: "100%",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate the content
    gsap.fromTo(
      contentRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Scroll to top function for the arrow
    const scrollToTop = document.querySelector(".scroll-to-top");
    if (scrollToTop) {
      scrollToTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="min-h-[50vh] w-full bg-black px-10 py-16 text-white relative"
    >
      <div
        ref={lineRef}
        className="w-0 h-[1px] bg-white opacity-30 mb-16"
      ></div>
      
      <div
        ref={contentRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20"
      >
        <div className="col-span-1">
          <h2 className="text-5xl md:text-7xl font-[anzo1] mb-6">ANZO</h2>
          <p className="text-zinc-400 text-sm md:text-base">
            Modern, impactful and luxurious design that works.
            <br />
            Let's create something amazing together.
          </p>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-lg uppercase tracking-wider mb-4 font-[anzo1]">Contact</h3>
          <p className="text-zinc-400 mb-2">hello@anzo.studio</p>
          <p className="text-zinc-400">+1 (555) 123-4567</p>
          
          <div className="mt-8 flex gap-6">
            <FiInstagram className="text-2xl hover:text-zinc-400 transition-colors cursor-pointer" />
            <FiDribbble className="text-2xl hover:text-zinc-400 transition-colors cursor-pointer" />
            <FiLinkedin className="text-2xl hover:text-zinc-400 transition-colors cursor-pointer" />
            {/* <FiBehance className="text-2xl hover:text-zinc-400 transition-colors cursor-pointer" /> */}
          </div>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-lg uppercase tracking-wider mb-4 font-[anzo1]">Services</h3>
          <ul className="space-y-2 text-zinc-400">
            <li className="hover:text-white transition-colors cursor-pointer">Brand Design</li>
            <li className="hover:text-white transition-colors cursor-pointer">Website Design</li>
            <li className="hover:text-white transition-colors cursor-pointer">Development</li>
            <li className="hover:text-white transition-colors cursor-pointer">Bespoke Freelance</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-center">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} ANZO.STUDIO. All rights reserved.
        </p>
        
        <button className="scroll-to-top mt-6 md:mt-0 group flex items-center gap-2 cursor-pointer">
          <span className="text-zinc-500 group-hover:text-white transition-colors">Back to top</span>
          <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-white transition-colors">
            <RiArrowUpLine className="text-zinc-500 group-hover:text-white transition-colors" />
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
