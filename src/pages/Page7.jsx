import React, { useEffect, useRef } from "react";
import img1 from "../../public/triangle 3.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Page7 = () => {
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);
  const pRef3 = useRef(null);
  const sun = useRef(null);
  const circle = useRef(null);
  const rocket = useRef(null);
  const triangle = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Triangle rotation animation
    gsap.fromTo(
      triangle.current,
      {
        rotation: 0,
        opacity: 0,
        scale: 0.8,
      },
      {
        rotation: 360,
        opacity: 1,
        scale: 1,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: triangle.current,
          start: "top 40%",
          end: "bottom 60%",
          // markers: true,
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    // First paragraph animation
    gsap.fromTo(
      pRef1.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: pRef1.current,
          start: "top 80%",
          end: "top 70%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    // Second paragraph animation - starts when first completes
    gsap.fromTo(
      pRef2.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: pRef2.current,
          start: "top 70%",
          end: "top 60%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    // Third paragraph animation - starts when second completes
    gsap.fromTo(
      pRef3.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: pRef3.current,
          start: "top 60%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(sun.current, {
      rotate: 360,
      duration: 5,
      ease: "none",
      repeat: -1,
    });
    gsap.to(circle.current, {
      rotateY: 360,
      duration: 5,
      ease: "none",
      repeat: -1,
    });
    gsap.to(rocket.current, {
      scaleY: 0.7,
      duration: 2,
      ease: "bounce.in",
      repeat: -1,
    });
  }, []);

  return (
    <div className="h-full w-full px-3 py-5 bg-slate-100">
      <div className="h-full w-full relative p-32 pt-56 rounded-3xl bg-center bg-cover overflow-hidden shadow-xl bg-black shadow-zinc-700">
        <div className="text-[16rem] left-20 absolute top-14 flex flex-col justify-center items-center text-white leading-[12rem] font-[anzo1]">
          <span className="text-zinc-500">HOW</span>
          CAN
        </div>
        <div className="text-[16rem] right-20 absolute top-14 flex flex-col justify-center items-center text-white leading-[12rem] font-[anzo1]">
          <span>I HELP</span>
          YOU
        </div>
        <div className="absolute gap-4 px-20 text-xl left-4 bottom-56 font-semibold flex justify-evenly items-center text-white">
          <div className="w-1/3">
            <p ref={pRef1}>
              I am a self-taught web and brand designer with a passion for
              creating unique and timeless masterpieces for ambitious
              professionals, entrepreneurs, artists, and boutique businesses. ​
              <br />
              <br />
              Bespoke Freelance for agencies.
            </p>
          </div>
          <div className="w-1/3">
            <p ref={pRef2}>
              With a background in strategic marketing and acknowledged
              expertise in web development, I aim to minimize my client's
              resources spent on macro and micro-management, marketing research,
              and hiring a whole team of a larger agency.
            </p>
          </div>
          <div className="w-1/3">
            <p ref={pRef3}>
              My mission is to drive exceptional growth for my clients by
              increasing their brand appearance, defining their identity, and
              engaging customers through captivating black-and-white aesthetics
              with a modern, luxurious, and minimalistic touch.
            </p>
          </div>
        </div>
        <div className="absolute gap-4 w-full px-20 text-7xl font-[anzo1] left-5 bottom-28 font-semibold flex justify-evenly items-center text-white">
          <div className="w-1/3">
            <p className="flex gap-5">
              <img
                ref={sun}
                className="object-contain"
                src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_61,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SUN.png"
              />
              <p>
                DESIGN <sub>01</sub>
              </p>
            </p>
          </div>
          <div className="w-1/3">
            <p className="flex gap-5">
              <img
                ref={circle}
                className="object-contain"
                src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EARTH.png"
              />
              <p>
                {" "}
                DEVELOPMENT<sub>02</sub>
              </p>
            </p>
          </div>
          <div className="w-1/3">
            <p className="flex gap-5">
              <img
                ref={rocket}
                className="object-contain"
                src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/START%20UP.png"
              />
              <p>
                BRANDING <sub>03</sub>
              </p>
            </p>
          </div>
        </div>
        <img
          ref={triangle}
          src={img1}
          className="w-[80%] h-1/2 object-contain ml-[10%] transform-origin-center"
        />
      </div>
    </div>
  );
};

export default Page7;
