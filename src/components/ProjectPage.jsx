import React from 'react'
import Ecommerce from "./images/eommerce.png"
import Weather from "./images/Just Weather.JPG"
import { BiLinkExternal } from "react-icons/bi";
import { Link } from 'react-router-dom';
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
    hidden: { opacity: 0, y: 80 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeInOut',
            duration: 1
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


const ProjectPage = () => {
    return (
        <>
            <motion.header
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: easing }} className='bg-skin-base lg:h-[100vh] h-full flex flex-col overflow-hidden pb-10'>
                <motion.div initial="hidden" variants={title} whileInView={'show'} className='lg:text-[3.5rem] text-[2rem] font-bold text-skin-text text-center mt-[3rem] lg:mb-[8rem] mb-10' >
                    Project's
                </motion.div>
                <motion.div variants={container} initial="hidden" exit="exit" whileInView="show" class="grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-y-32">
                    <motion.div variants={item} initial="hidden" whileInView="show">
                        <Link to={"https://easy-gray-sawfish-wrap.cyclic.app/"} target='_blank' class="projects-box">
                            <img src={Ecommerce} alt="" />
                            <div class="projects-layer">
                                <h4 className='text-skin-base lg:text-[2.5rem] text-[1.5rem] font-semibold'>Ecommerce</h4>
                                <p className='text-black lg:text-[1rem] text-[0.7rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ratione saepe quas, magnam sequi quaerat
                                    qui obcaecati rerum alias quos!</p>
                                <BiLinkExternal size={50} />
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div variants={item} initial="hidden" whileInView="show">
                        <Link to={"https://just-weather-express-app.vercel.app/weather"} target='_blank' class="projects-box">
                            <img src={Weather} alt="" />
                            <div class="projects-layer">
                                <h4 className='text-skin-base lg:text-[2.5rem] text-[1.5rem] font-semibold'>Just-Weather</h4>
                                <p className='text-black lg:text-[1rem] text-[0.7rem] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ratione saepe quas, magnam sequi quaerat
                                    qui obcaecati rerum alias quos!</p>
                                <BiLinkExternal size={50} />
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div variants={item} initial="hidden" whileInView="show">
                        <Link to={""} target='_blank' class="projects-box">
                            <img src={"https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"} alt="" />
                            <div class="projects-layer">
                                <h4 className='text-skin-base lg:text-[2.5rem] text-[1.5rem] font-semibold'>Loading...</h4>
                                <p className='text-black lg:text-[1rem] text-[0.7rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ratione saepe quas, magnam sequi quaerat
                                    qui obcaecati rerum alias quos!</p>
                                <BiLinkExternal size={50} />
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.header>
        </>
    )
}

export default ProjectPage