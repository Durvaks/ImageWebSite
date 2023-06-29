import React from 'react'
import { motion } from 'framer-motion'


const Header = () => {
    return (
        <header className="pt-5 tracking-[0.24em] font-bold text-[1.8rem] text-slate-100 leading-[4rem] md:text-[2rem] md:text-center">
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 80
                }}
            >
                <h1 className=" text-cyan-300">Visions Beyond Imagination</h1>
                <h2 className=" text-sm text-yellow-500">AI-Generated</h2>
            </motion.div>
        </header>
    )
}

export default Header;
