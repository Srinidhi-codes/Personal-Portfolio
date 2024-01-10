import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

let easeing = [0.6, -0.05, 0.01, 0.99];

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
            duration: 0.6, ease: easeing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.5,
            ease: easeing
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
        transition: { duration: 0.6, ease: easeing }
    },
    animate: {
        y: 0,
        opacity: 1,
        animation: {
            duration: 0.6,
            ease: easeing
        }
    }
};
const star = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.8, ease: easeing }
    },
    animate: {
        y: 0,
        opacity: 1,
        animation: {
            duration: 0.6,
            ease: easeing
        }
    }
};

const header = {
    initial: {
        y: -60,
        opacity: 0,
        transition: { duration: 0.05, ease: easeing }
    },
    animate: {
        y: 0,
        opacity: 1,
        animation: {
            duration: 0.6,
            ease: easeing
        }
    }
};

const Navbar = () => {
    return (
        <motion.div initial='initial' animate='animate'>
            <motion.header variants={stagger} className='flex flex-col lg:flex-row lg:justify-around fixed items-center bg-skin-base text-skin-text py-[1rem] w-full z-10'>
                <motion.div variants={header} className='lg:text-[3rem] text-[2rem] font-bold'>Portfolio</motion.div>
                <motion.div variants={stagger} className='flex items-center'>
                    <ul className='flex gap-8 lg:mr-0'>
                        <motion.li variants={star}><Link to={"/"}>Home</Link></motion.li>
                        <motion.li variants={star}><Link to={"/"}>About</Link></motion.li>
                        <motion.li variants={star}><Link to={"/"}>Projects</Link></motion.li>
                        <motion.li variants={star}><Link to={"/"}>Contact</Link></motion.li>
                    </ul>
                </motion.div>
            </motion.header>
        </motion.div>
    )
}

export default Navbar