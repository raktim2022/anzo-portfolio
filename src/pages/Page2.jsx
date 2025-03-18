import React from "react";
import Words from "../components/Words";
import walk from "../../public/walk.mp4"

const Page2 = () => {
  return (
    <div className="w-full h-full mt-32">
      {["IMPACTFUL", "DESIGN", "IS THE", "DESIGN", "THAT", "WORKS!"].map(
        (item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <Words dets={item} />
            </div>
          );
        }
      )}
      {/* <video src={walk} loop muted autoPlay className="w-full bg-red-400 z-20" /> */}
    </div>
  );
};

export default Page2;
