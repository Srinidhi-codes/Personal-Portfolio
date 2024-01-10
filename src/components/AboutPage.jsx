import React from 'react'
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoJava, BiLogoMongodb, BiLogoRedux } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import Dhanda from "./images/dhanda_studio.jpg"
import Clarivate from "./images/clarivate.jpg"
import Compsoft from "./images/compsoft.png"

const AboutPage = () => {
    return (
        <>
            <section id='about' className='bg-skin-second lg:h-[100vh] h-full flex flex-col pb-10'>
                <div className='flex flex-col bg-skin-second lg:text-[3.5rem] text-[2rem] text-skin-text px-28 text-center mt-[3rem] lg:mb-[5rem] mb-8'>
                    <div className='flex gap-3 justify-center font-bold'>
                        About <span className='text-skin-main'>Me</span><br />
                    </div>
                    <div className='lg:text-[2rem] text-[1rem] lg:mb-[-10px]'>Full Stack Developer</div>
                </div>
                <div className='grid grid-cols-2 justify-items-center text-skin-main text-[2rem]'>
                    <div>
                        <h1 className='text-skin-main lg:text-[2.5rem] text-[1.5rem] text-center font-medium mb-10'>Skills</h1>
                        <div className='flex flex-col gap-2 lg:gap-12 items-start'>
                            <span className='lg:text-[1.5rem] text-[1rem] lg:font-semibold text-skin-text flex items-center hover:text-skin-main '><BiLogoHtml5 size={50} className='text-orange-500 animate-wiggle mr-5' /> HTML</span>
                            <span className=' lg:text-[1.5rem] text-[1rem] lg:font-semibold text-skin-text flex items-center hover:text-skin-main'><BiLogoCss3 size={50} className='text-blue-500 animate-wiggle mr-5' /> CSS</span>
                            <span className=' lg:text-[1.5rem] text-[1rem] lg:font-semibold text-skin-text flex items-center hover:text-skin-main'><BiLogoJavascript size={50} className='text-yellow-400 animate-wiggle mr-5' /> Java Script</span>
                            <span className=' lg:text-[1.5rem] text-[1rem] lg:font-semibold text-skin-text flex items-center hover:text-skin-main'><BiLogoReact size={50} className='text-cyan-500 animate-wiggle mr-5' />React</span>
                            <span className=' lg:text-[1.5rem] text-[1rem] lg:font-semibold text-skin-text flex items-center hover:text-skin-main'><BiLogoRedux size={50} className='text-cyan-500 animate-wiggle mr-5' /> React-Redux</span>
                            <span className=' lg:text-[1.5rem] text-[1rem] lg:font-semibold text-skin-text flex items-center hover:text-skin-main'><TbBrandNextjs size={50} className='text-black animate-wiggle mr-5' />Next JS</span>
                            <span className=' lg:text-[1.5rem] text-[1rem] lg:font-semibold text-skin-text flex items-center hover:text-skin-main'><BiLogoNodejs size={50} className='text-green-700 animate-wiggle mr-5' /> Node JS</span>
                            <span className='lg:text-[1.5rem] text-[1rem] lg:font-semibold text-skin-text flex items-center hover:text-skin-main'><SiExpress size={40} className='text-black animate-wiggle mr-5' /> Express JS</span>
                            <span className=' lg:text-[1.5rem] text-[1rem] lg:font-semibold text-skin-text flex items-center hover:text-skin-main'><BiLogoMongodb size={50} className='text-green-700 animate-wiggle mr-5' /> MongoDB</span>
                            <span className=' lg:text-[1.5rem] text-[1rem] lg:font-semibold text-skin-text flex items-center hover:text-skin-main'><BiLogoJava size={50} className='text-blue-500 animate-wiggle mr-5' /> Java</span>
                        </div>
                    </div>
                    <div >
                        <h1 className='text-skin-main lg:text-[2.5rem] text-[1.5rem] text-center font-medium mb-10 lg:text-start'>Experience</h1>
                        <div className='flex flex-col gap-12 lg:justify-around lg:items-start items-center'>
                            <div className='lg:text-[2rem] text-[1rem] font-semibold text-skin-text flex flex-col lg:items-start items-center'><img src={Dhanda} width={50} alt="" /> Dhanda.Studio</div><span className='text-skin-text lg:text-[1.5rem] text-[0.8rem] mt-[-3rem]'>Web Developer</span><span className='text-skin-main lg:text-[1.2rem] text-[0.6rem] mt-[-3rem]'>2023-Present</span>
                            <div className='lg:text-[2rem] text-[1rem] font-semibold text-skin-text flex flex-col lg:items-start items-center mt-10 lg:mt-32'><img src={Clarivate} width={50} alt="" /> Clarivate Analytics</div><span className='text-skin-text lg:text-[1.5rem] text-[0.8rem]  mt-[-3rem]'>Intern</span><span className='text-skin-main lg:text-[1.2rem] text-[0.6rem] mt-[-3rem]'>Oct 2022 - Apr 2023</span>
                            <div className='lg:text-[2rem] text-[1rem] font-semibold text-skin-text flex flex-col lg:items-start items-center mt-10 lg:mt-32'><img src={Compsoft} width={50} alt="" /> Compsoft Technology</div><span className='text-skin-text lg:text-[1.5rem] text-[0.8rem] mt-[-3rem]'>Full Stack Developer</span><span className='text-skin-main lg:text-[1.2rem] text-[0.6rem] mt-[-3rem]'>May 2022 - Sep 2022</span>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default AboutPage