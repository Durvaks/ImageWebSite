import React from 'react'
import {motion} from 'framer-motion'

const Main = () => {
    return (
        <motion.section 
        initial={{ y:200 , opacity:0}}
        animate={{ y:0, opacity:1 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 80
        }}   
        className=" mt-10 md:m-auto md:mb-[15%] md:mt-[10%] md:text-[1.5rem] md:max-w-6xl flex flex-wrap">
            <div className=" md:ml-20 max-h-[380px] md:min-w-[230px] inline-block max-w-[200px] md:w-[250px] rounded-full overflow-hidden mr-10 border-opacity-40 border-black border-4">
                <img
                    className="min-w-full scale-110 opacity-70"
                    src="https://docs.google.com/uc?id=14YyXcaCaKe2qazsjTOSHXAp2yauHDGqd"
                    alt="Perfil Image"
                />
            </div>
            <p className=" max-w-[800px] md:leading-[4rem] leading-[2.5rem] mt-10 italic  tracking-[0.08em] text-slate-300 m-auto">
                Each artwork is the result of a collaboration between my creative vision and the powerful mind of AI, resulting in visually stunning compositions and surprising concepts.
                Get ready to dive into a world of vibrant colors, intriguing shapes, and mesmerizing textures.
                Join me in this data-powered artistic exploration and discover the wonders that artificial intelligence can create.
                Welcome to the future of artistic expression!
            </p>
        </motion.section>
    )
}

export default Main