import React from "react";
import vid1 from "../../public/big moon.mp4";
const Page6 = () => {
  return (
    <div className="h-screen w-full px-3 py-5 bg-slate-100">
      <div className="h-full w-full relative rounded-3xl bg-center bg-cover overflow-hidden shadow-xl bg-[url('https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1322,h_614,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg')] shadow-zinc-700">
        <div className="text-[40rem] absolute bottom-32 text-white ml-10 leading-[14rem] font-[anzo1]">
          ABOUT
        </div>
        <video src={vid1} autoPlay loop muted className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Page6;
