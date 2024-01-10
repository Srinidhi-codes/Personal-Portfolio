import React from 'react'
import { useForm } from 'react-hook-form';
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


const ContactPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false }} className='lg:h-[100vh] h-[110vh] bg-skin-second flex flex-col items-center gap-20'>
                <motion.div initial="hidden" variants={title} whileInView={'show'} className='text-skin-text lg:text-[3.5rem] text-[2rem] font-bold text-center mt-[3rem] lg:mb-[5rem]'>Contact <span className='text-skin-main'>Me!</span></motion.div>
                <motion.div className='login-box' initial={{ opacity: 0, scale: 0, x: 100 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1 }}>
                    <motion.form initial={{ opacity: 0, scale: 0, x: 200 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1 }} className='' onSubmit={handleSubmit((data) => console.log(data))}>
                        <div class="user-box">
                            <input {...register('fullname', { required: true })} />
                            <label>Full Name</label>
                            {errors.fullname && <p className='text-red-600 font-bold mt-[-1.5rem]'>Full name is required.</p>}
                        </div>
                        <div class="user-box">
                            <input {...register('email', { required: true }, { pattern: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi })} />
                            <label>Email</label>
                            {errors.age && <p className='text-red-600 font-bold mt-[-1.5rem]'>Please enter proper Email.</p>}
                        </div>
                        <div class="user-box">
                            <input {...register('mobile', { required: true })} />
                            <label>Phone</label>
                            {errors.age && <p className='text-red-600 font-bold mt-[-1.5rem]'>Please enter your number.</p>}
                        </div>
                        <div class="user-box">
                            <input {...register('message', { required: true })} />
                            <label>Message</label>
                            {errors.age && <p className='text-red-600 font-bold mt-[-1.5rem]'>Please type your message.</p>}
                        </div>
                        <button type='submit'>
                            SEND
                            <span></span>
                        </button>
                    </motion.form>
                </motion.div>
            </motion.div>
        </>
    )
}

export default ContactPage