import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] font-mono'>


      {/* contanier */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full typewriter'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl'>Abdullayev Lazizbek</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0] right'>I'm a Full stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] left'>Lorem ipsum dolor sit amet consectetur CyberSecurity elit. Maiores veritatis Artifical Intelejence labore dolores commodi nam obcaecati alias eligendi ipsum ab repudiandae quo expedita illum facere ipsam dignissimos et, rerum delectus!</p>
        <div>
          <Link to='work'>
            <button className='text-[white]  group border-2 px-6 py-3 my-2 flex rounded-[8px] items-center hover:bg-red-950 hover:border-red-950'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' size={20} />
              </span>
            </button>
          </Link>

        </div>
      </div>
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
    </div>
  )
}
