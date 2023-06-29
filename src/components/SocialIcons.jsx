import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

const SocialIcons = () => {
    return (
        <div className='pl-20 pr-20 w-full fixed flex flex-row justify-between bg-transparent'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,

                }}
                className=''>
                <SocialIcon
                    url="https://www.linkedin.com/in/renan-silva-brand%C3%A3o-817393a9/"
                    fgColor='gray'
                    bgColor='transparent '
                />
                <SocialIcon
                    url="https://github.com/Durvaks"
                    fgColor='gray'
                    bgColor='transparent '
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className="cursor-pointer"
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
            </motion.div>
        </div>
    )
}

export default SocialIcons