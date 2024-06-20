import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Skills() {
    return (
        <div name='technologic' className='bg-[#0a192f] text-gray-300 w-full md:h-screen'>
            {/* contanier  */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='font-mono'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>My Know Technologics</p>
                    <p className='py-4'>// These are the technologies i've worked with</p>
                </div>

                <div className='w-full flex flex-col'>
                    {/* 1 */}
                    <Marquee direction='left' autoFill pauseOnClick>
                        <div className='grid  grid-cols-2 shadow_card gap-10 sm:grid-cols-5 text-center py-8 select-none uppercase'>
                            {/* html  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card ml-5'>
                                <p className='my-4 text-red-500 neon'>Html</p>
                            </div>
                            {/* css  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-blue-500 neon'>Css</p>
                            </div>
                            {/* scss */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-fuchsia-500 neon'>Scss</p>
                            </div>
                            {/* js */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-yellow-500 neon'>Javascript</p>
                            </div>
                            {/* tailwind  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-sky-500 neon'>Tailwind & Daisy Ui</p>
                            </div>
                        </div>
                    </Marquee>
                    {/* 2 */}
                    <Marquee direction='right' autoFill pauseOnClick>
                        <div className='grid  grid-cols-2 shadow_card gap-10 sm:grid-cols-5 text-center py-8 select-none uppercase'>
                            {/* Python  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card ml-5'>
                                <p className='my-4 text-cyan-500 neon'>Python</p>
                            </div>
                            {/* React  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-blue-600 neon'>React</p>
                            </div>
                            {/* chakra ui  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-emerald-500 neon'>chakra ui</p>
                            </div>
                            {/* material ui  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-blue-800 neon'>Material ui</p>
                            </div>
                            {/* Typescript */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-sky-500 neon'>Typescript</p>
                            </div>
                        </div>
                    </Marquee>
                    {/* 3 */}
                    <Marquee direction='left' autoFill pauseOnClick>
                        <div className='grid  grid-cols-2 shadow_card gap-10 sm:grid-cols-5 text-center py-8 select-none uppercase'>
                            {/* Github  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card ml-5'>
                                <p className='my-4 text-gray-500 neon'>github</p>
                            </div>
                            {/* Ant design  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-orange-500 neon'>Ant Design</p>
                            </div>
                            {/* Prisma  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-pink-500 neon'>Prisma</p>
                            </div>
                            {/* Nuxt js  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-cyan-500 neon'>Nuxt js</p>
                            </div>
                            {/* NOde js  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-green-500 neon'>Node js</p>
                            </div>
                        </div>
                    </Marquee>
                    {/* 4 */}
                    <Marquee direction='right' autoFill pauseOnClick>
                        <div className='grid  grid-cols-2 shadow_card gap-10 sm:grid-cols-5 text-center py-8 select-none uppercase'>
                            {/* MOngo db  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card ml-5'>
                                <p className='my-4 text-green-500 neon'>Mongo db</p>
                            </div>
                            {/* vue  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-green-600 neon'>Vue js</p>
                            </div>
                            {/* Next js  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-cyan-500 neon'>Next js</p>
                            </div>
                            {/* express js  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-orange-800 neon'>Express Js</p>
                            </div>
                            {/* My Sql  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-yellow-100 neon'>My Sql</p>
                            </div>
                        </div>
                    </Marquee>
                    {/* 5 */}
                    <Marquee direction='left' autoFill pauseOnClick>
                        <div className='grid  grid-cols-2 shadow_card gap-10 sm:grid-cols-5 text-center py-8 select-none uppercase'>
                            {/* Java */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card ml-5'>
                                <p className='my-4 text-yellow-500 neon'>Java</p>
                            </div>
                            {/* C#  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-blue-700 neon'>C#</p>
                            </div>
                            {/* PHP  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-sky-500 neon'>PHP</p>
                            </div>
                            {/* Linux  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-orange-500 neon'>Linux</p>
                            </div>
                            {/* Bot  */}
                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 card'>
                                <p className='my-4 text-sky-700 neon'>Tg Bot</p>
                            </div>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
