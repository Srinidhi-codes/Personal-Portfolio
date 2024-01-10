import React from 'react'
import Navbar from './Navbar'
import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoInstagram } from "react-icons/bi";
import main from "./images/main.png"
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { animate, motion } from "framer-motion"

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
}

const fadeInUp = {
    initial: {
        y: -60,
        opacity: 0,
        transition: {
            duration: 0.8, ease: easing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: 0.2,
            ease: easing
        }
    }
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
    initial: {
        y: -20,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.04,
            staggerDirection: -1
        }
    }
}

const lastName = {
    initial: {
        y: -20,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.04,
            staggerDirection: 1
        }
    }
}

const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition }
    }
};

const btnGroup = {
    initial: {
        y: -60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing }
    },
    animate: {
        y: 0,
        opacity: 1,
        animation: {
            duration: 0.6,
            ease: easing
        }
    }
};
const star = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.8, ease: easing }
    },
    animate: {
        y: 0,
        opacity: 1,
        animation: {
            duration: 0.6,
            ease: easing
        }
    }
};

const header = {
    initial: {
        y: -60,
        opacity: 0,
        transition: { duration: 0.05, ease: easing }
    },
    animate: {
        y: 0,
        opacity: 1,
        animation: {
            duration: 0.6,
            ease: easing
        }
    }
};

const container = {
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeInOut',
            duration: .2
        }
    }
}

const title = {
    hidden: {
        y: 60,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .2,
            duration: 0.6,
            ease: easing
        }
    }
};

const hoverEffect = {
    whileHover: {
        scale: 1.5, rotate: 630, borderRadius: "100%"
    },
    whileTap: {
        scale: .8, rotate: 630, borderRadius: "100%"
    },
}


export const HomePage = () => {
    const [text] = useTypewriter({
        words: ['Full Stack Developer', 'Front-End Developer', 'Back-End Developer'],
        loop: [],
        typeSpeed: 120,
        deleteSpeed: 50,
    })

    return (
        <motion.div initial='initial' whileInView='animate'>
            <motion.header
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: easing }}
                id='home'
                className='w-full h-[100vh] bg-skin-base text-skin-text flex flex-col gap-10 lg:flex-row lg:justify-between justify-evenly items-center' >
                <motion.div className='flex flex-col lg:px-28 px-10 w-[25rem] lg:w-auto'>
                    <span className='lg:text-[2rem] text-[1.5rem] font-bold first mt-12 lg:mt-0'>Hello, It's Me</span><br /><span className='lg:text-[3.5rem] text-[2.5rem] font-bold mt-[-1.5rem]'>Srinidhi<br /></span><span className='lg:text-[2rem] text-[1.5rem] font-bold flex lg:flex-row flex-col'>And I'm a<span className='lg:text-[2rem] text-[1.5rem] font-bold text-skin-main [text-shadow:3px_3px_1rem_#0ef] lg:ml-3'> {text}<Cursor className="text-red-500" cursorStyle='</>' /></span></span>
                    <motion.div initial='initial' whileInView="animate" variants={fadeInUp} className='flex gap-8 py-8'>
                        <BiLogoGithub size={30} className='rounded-full text-skin-main outline outline-offset-1 p-1 hover:p-0 hover:shadow-[0_0_1rem_5px_#0ef] animate-[bounce_1.3s_ease-in-out_infinite]' />
                        <BiLogoLinkedinSquare size={30} className='rounded-full text-skin-main outline outline-offset-1 p-1 hover:p-0 hover:shadow-[0_0_1rem_5px_#0ef] animate-[bounce_1.5s_ease-in-out_infinite]' />
                        <BiLogoInstagram size={30} className='rounded-full text-skin-main outline outline-offset-1 p-1 hover:p-0 hover:shadow-[0_0_1rem_5px_#0ef] animate-[bounce_1.6s_ease-out_infinite]' />
                    </motion.div>
                    <motion.button variants={btnGroup} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='bg-skin-main w-fit lg:px-5 lg:py-4 px-3 py-2 text-[1rem] rounded-full text-skin-base lg:font-bold hover:shadow-[0_0_1rem_5px_#0ef] transition-all ease-in-out duration-700 main-button'>Download Resume</motion.button>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0, x: 200 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1 }} className='mx-auto lg:mx-0 mb-8 lg:mb-0'>
                    <motion.img src={main} alt="" className='main ' />
                </motion.div>
            </motion.header>
        </motion.div >
    )
}
