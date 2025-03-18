import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import walk from "../../public/walk.mp4"

const Words = ({ dets }) => {
  const wordRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const chars = wordRef.current.innerText.split("");
    wordRef.current.innerHTML = "";

    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      wordRef.current.appendChild(span);
    });

    gsap.from(wordRef.current.children, {
      scrollTrigger: {
        trigger: wordRef.current,
        start: "top 60%",
        end: "bottom 30%",
        // markers: true,
        // scrub:true,
        toggleActions: "play none none reverse",
      },
      rotationX: 360,
      opacity: 0,
      duration: 1.2,
      stagger: 0.08,
      ease: "power3.out",
    });
  }, [dets]); // Add dets as dependency

  return (
    <div>
      {dets === "WORKS!" && (
        <div
          ref={wordRef}
          className="text-[35rem] w-full leading-[28rem] font-[anzo1]"
        >
          {dets}
          {/* <video src={walk} loop muted autoPlay className="w-full bg-red-400 z-20" /> */}
        </div>
      )}
      {dets !== "WORKS!" && (
        <div
          ref={wordRef}
          className="text-[35rem]  leading-[28rem] font-[anzo1]"
        >
          {dets}
        </div>
      )}
    </div>
  );
};

export default Words;
