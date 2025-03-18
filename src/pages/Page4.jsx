import React from "react";
import vid1 from "../../public/earth.mp4";
import vid2 from "../../public/small moon.mp4";

const Page4 = () => {
  return (
    <div className="h-screen w-full px-3 py-5 bg-slate-100">
      <div className="h-full w-full relative rounded-3xl bg-center p-12 px-9 bg-cover overflow-hidden shadow-xl bg-[url('https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1322,h_614,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg')] shadow-zinc-700">
        <div className="text-[18rem] text-white ml-10 leading-[14rem] font-[anzo1]">
          <span className="text-zinc-400">WHAT</span> <br /> I DO
        </div>
        <div className="w-[23rem] absolute right-[18%] bottom-[10%] z-20 h-[23rem] rounded-full overflow-hidden">
          <video
            src={vid1}
            className="h-full scale-110  grayscale-[100%] object-top object-cover w-full"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="w-[13rem] absolute right-[7%] bottom-[40%] z-10 h-[13rem] rounded-full overflow-hidden">
          <video
            src={vid2}
            className="h-full scale-110 object-top object-cover w-full"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="text-xl tracking-tighter text-white leading-none absolute bottom-10 left-16">
          <h3 className="font-bold">I DESIGN AND DEVELOP</h3>
          <h3 className="font-extralight opacity-50">
            MODERN, IMPACTFUL AND LUXURIOUS
          </h3>
          <h3 className="font-semibold tracking-normal">
            websites that seamlessly bridge your goals with needs of your
            clients.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Page4;
