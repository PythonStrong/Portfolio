import React from 'react'

export default function Modal() {
  return (
    <div>
         {/* 1 */}
         <Marquee direction='left'>
                   <div className='grid  grid-cols-2 shadow_card gap-10 sm:grid-cols-5 text-center py-8 select-none uppercase'>
                        {/* html  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4  neon'>Html</p>
                        </div>
                        {/* css  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Css</p>
                        </div>
                        {/* scss */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Scss</p>
                        </div>
                        {/* js */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Javascript</p>
                        </div>
                        {/* tailwind  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Tailwind & Daisy Ui</p>
                        </div>
                    </div>
                   </Marquee>
                    {/* 2 */}
                   <Marquee direction='right'>
                   <div className='grid  grid-cols-2 shadow_card gap-10 sm:grid-cols-5 text-center py-8 select-none uppercase'>
                        {/* Python  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Python</p>
                        </div>
                        {/* React  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>React js</p>
                        </div>
                        {/* chakra ui  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Chakra ui</p>
                        </div>
                        {/* material ui  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Material ui</p>
                        </div>
                        {/* Typescript */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Typescript</p>
                        </div>
                    </div>
                   </Marquee>
                    {/* 3 */}
                   <Marquee direction='left'>
                   <div className='grid  grid-cols-2 shadow_card gap-10 sm:grid-cols-5 text-center py-8 select-none uppercase'>
                        {/* Github  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>github</p>
                        </div>
                        {/* Ant design  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Ant Design</p>
                        </div>
                        {/* Prisma  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Prisma</p>
                        </div>
                        {/* Nuxt js  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Nuxt js</p>
                        </div>
                        {/* NOde js  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Node js</p>
                        </div>
                    </div>
                   </Marquee>
                    {/* 4 */}
                  <Marquee direction='right'>
                  <div className='grid  grid-cols-2 shadow_card gap-10 sm:grid-cols-5 text-center py-8 select-none uppercase'>
                        {/* MOngo db  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Mongo db</p>
                        </div>
                        {/* vue  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Vue js</p>
                        </div>
                        {/* Next js  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Next js</p>
                        </div>
                        {/* express js  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Express Js</p>
                        </div>
                        {/* My Sql  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>My Sql</p>
                        </div>
                    </div>
                  </Marquee>
                    {/* 5 */}
                  <Marquee direction='left'>
                  <div className='grid  grid-cols-2 shadow_card gap-10 sm:grid-cols-5 text-center py-8 select-none uppercase'>
                        {/* Java */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Java</p>
                        </div>
                        {/* C#  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>C#</p>
                        </div>
                        {/* PHP  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>PHP</p>
                        </div>
                        {/* Linux  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Linux</p>
                        </div>
                        {/* Bot  */}
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                            <p className='my-4 neon'>Tg Bot</p>
                        </div>
                    </div>
                  </Marquee>
    </div>
  )
}
