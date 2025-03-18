import React from "react";
import img1 from "../../public/laptop.png";
import vid1 from "../../public/anzo.mp4";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page3 = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // console.log(line1ref.current);
    var initialPath = `M 630 80 Q 95 80 630 80`;
    var t1 = gsap.timeline();

    t1.from(".line1 path", {
      scrollTrigger: {
        trigger: ".line1 path",
        start: "top 80%",
        end: "top 70%",
        toggleActions: "play none none reverse",
        // markers: true,
        scrub: 2,
      },
      attr: { d: initialPath },
      duration: 0.9,
    });
    t1.from(".line2 path", {
      scrollTrigger: {
        trigger: ".line2 path",
        start: "top 85%",
        end: "top 75%",
        toggleActions: "play none none reverse",
        // markers: true,
        scrub: 2,
      },
      attr: { d: initialPath },
      duration: 0.9,
    });
    t1.from(".line3 path", {
      scrollTrigger: {
        trigger: ".line3 path",
        start: "top 90%",
        end: "top 80%",
        toggleActions: "play none none reverse",
        // markers: true,
        scrub: 2,
      },
      attr: { d: initialPath },
      duration: 0.9,
    });
  });

  return (
    <div className="w-full h-screen relative p-5">
      <div className="w-[52rem] z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src={img1}
          className="h-full overflow-hidden w-full object-cover scale-110"
        />
      </div>
      <div className="w-[42rem] h-[30rem] flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <video
          src={vid1}
          muted
          autoPlay
          loop
          className="h-full object-cover border-none"
        />
      </div>
      <div className="string w-full pt-10 flex justify-center items-center flex-col text-3xl">
        <svg
          className="line1"
          width="full"
          height="160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 160 80 Q 95 80 1100 80"
            stroke="black"
            fill="transparent"
          />
        </svg>
        <svg
          className="line2"
          width="full"
          height="160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 80 80 Q 95 80 1200 80" stroke="black" fill="transparent" />
        </svg>
        <svg
          className="line3"
          width="full"
          height="160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 0 80 Q 95 80 1330 80" stroke="black" fill="transparent" />
        </svg>
      </div>
    </div>
  );
};

export default Page3;
