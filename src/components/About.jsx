import React from 'react'

export default function About() {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 font-mono '>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] pl-20 w-full grid grid-cols-2 gap-8 '>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-5xl font-bold  inline border-b-4 border-pink-600 text-center'>About</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4  items-center '>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Salom! Mening yoshim 15da va dasturlash bo'yicha bir yildan beri shug'ullanaman</p>
                    </div>
                    <div>
                        <p>Men 2022-yilning Fevral oyidan boshlab Dasturlash bo'yicha IT Parkda o'qishni boshladm va U yerdan keyin DataSpin academyda o'qishmni davom ettirdim va ko'p bilimni DataSpin Academyda oldim va men maktabni bitirib bo'lgach Astrum acadameyda DataScince yo'nalishi bo'yicha o'qib IDU Universitda CyberSecurity bo'yicha o'qishga topshirmoqchiman</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
