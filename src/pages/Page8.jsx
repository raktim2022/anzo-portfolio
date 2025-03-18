import React from "react";
import vid1 from "../../public/clock.mp4";
import Paratexts from "../components/Paratexts";

const Page8 = () => {
  return (
    <div className="h-full w-full px-3 py-5 mb-10 bg-[#FAFAFA]">
      <div className="h-full flex justify-start items-start w-full relative p-32 pt-56 rounded-3xl bg-center bg-cover overflow-hidden shadow-xl bg-black shadow-zinc-700">
        <div className="w-1/3 text-white">
          <div className="text-[16rem] z-20 left-20 absolute top-14 flex flex-col justify-center items-start text-white leading-[12rem] font-[anzo1]">
            RIGHT
            <span className="text-zinc-500">FIT</span>
          </div>
          <div className="w-[30%] h-96 bottom-36 left-10 absolute rounded-full overflow-hidden z-10">
            <video
              src={vid1}
              muted
              autoPlay
              loop
              className="h-full w-full object-cover object-bottom"
            />
          </div>
        </div>
        <div className="w-2/3 -mt-48 ml-10 flex gap-10 flex-col text-lg text-white">
          <Paratexts
            head={"PERSONALITY"}
            para={
              "Business relationships build on trust and compassion vs how can I get more for less +/-"
            }
          />
          <Paratexts
            head={"APPROACH"}
            para={
              "Full dive into personality, goals and objectives with transparency of worq process vs template and unmanageable office routine +/-"
            }
          />
          <Paratexts
            head={"DESIGN"}
            para={
              "Design that is actually functional and helps to achieve results is design that works +/-"
            }
          />
          <Paratexts
            head={"FOCUS"}
            para={
              "How can I help and what can I do solve your problem or objective vs how can I sell you more +/-"
            }
          />
          <Paratexts
            head={"FIT"}
            para={
              "The perfect suit is the one fits you vs the one you can fit in. Choose wisely you are investing in yourself! +/-"
            }
          />
          <Paratexts
            head={"CORE VALUES"}
            para={
              "Time, trust and experience are resources we can not buy, yet we are sharing them and exchange +/-"
            }
          />
          <Paratexts
            head={"TO CONSIDER"}
            para={
              "Your brand, your personal identity is the reflection of your passion and goals on your future; your first online impression matters +/-"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page8;
