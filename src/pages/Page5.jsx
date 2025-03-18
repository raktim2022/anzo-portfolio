import React from 'react'
import Words from '../components/Words';

const Page5 = () => {
  return (
    <div className="w-full h-full mt-32">
      {["HELPING", "MY", "CLIENTS", "TO ACHIEVE", "THEIR", "DREAMS!"].map(
        (item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <Words dets={item} />
            </div>
          );
        }
      )}
    </div>
  )
}

export default Page5