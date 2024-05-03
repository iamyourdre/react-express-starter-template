import React from 'react';
import { FaClover } from "react-icons/fa6";

const Hero = () => {

  return (
    <div className="px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] font-playfair font-bold my-16">
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 lg:pr-16 text-center md:text-left">
          <p className='text-6xl xl:text-8xl ease-in duration-100'>Hello, World!</p>
          <p className="py-9 md:w-10/12 lg:w-full text-xs font-thin lg:text-sm xl:text-base">Stay in the middle.. Like you a little.. Don't want no riddle.. 말해줘 say it back, oh, say it ditto.. 아침은 너무 멀어 so say it ditto.. I don't want to walk in this 미로.. 다 아는 건 아니어도.. 바라던 대로 말해줘..</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
