import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Paratexts = ({head, para}) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div ref={textRef}>
      <p className="font-extralight opacity-50">{head}</p>
      <p className="font-bold">
        {para}
      </p>
    </div>
  );
};

export default Paratexts;
