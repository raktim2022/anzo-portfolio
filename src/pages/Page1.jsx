import React, { useEffect, useRef, useState } from "react";
import img from "/Q.png";
import Tilttext from "../components/Tilttext";

const Page1 = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const titleref = useRef(null);
  const mousemove = (dets) => {
    if (!titleref.current) return;

    const rect = titleref.current.getBoundingClientRect();
    setX((dets.clientX - rect.x - rect.width / 2) / 20);
    setY(
      -(dets.clientY - rect.y - rect.height / 2) / 20 // Added negative sign to invert Y rotation
    );
    titleref.current.style.transform = `rotateX(${Y}deg) rotateY(${X}deg)`;
  };

  useEffect(() => {
    // Add any cleanup if needed
  }, []);

  return (
    <div
      onMouseMove={mousemove}
      className="h-screen w-full px-5 py-8 bg-slate-100"
    >
      <div className="h-full w-full relative rounded-3xl bg-center p-3 px-9 bg-cover overflow-hidden shadow-xl bg-[url('./land2.jpg')] shadow-zinc-600">
        <img src={img} className="w-24" alt="Q logo" />
        <Tilttext titleref={titleref} />
      </div>
    </div>
  );
};

export default Page1;
