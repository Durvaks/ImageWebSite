import React from 'react'
import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import Lightbox from './Lightbox';

const SectionImages = () => {

  const [urlImages, setUrlImages] = useState([
    "11gKKM9Id-VqDoP9MnBHabhUeVYwQBHqV",
    "12N_kt91xeHfKOMPFqht8b9-fBetRMWAv",
    "10Zc0dTtSBjYOhLRYfyjmcIt4HnWNkSDu",
    "126Wn39ZFA1jFocwWxEjddddyR6eChJgL",
    "12qbJn_lOsLuQlXvEuOSyoDJB72os0AT4",
    "1067aaNyxPAkfInMBY5aq-7-aogNKXFP_",
    "14JMS9Jdr-7Ui6RwReK8-6XtheBVdrepP",
    "143j0ZQg4EDNyEc3ZRfE_pfDwK6eM0nBy",
    "13svuK_o3DBAGqvkyGmOfb_Q3XWfdGh1x",
    "12eaINVQHEQ-VwGQJhXsyoAL5vw-POySP",
    "12_e_t7Efe8xftMByyCkiSDyVSNI8cWPH",
    "14HLE0ueYN1tG3h3AFfgtn2DNen7vGQ3H",
  ])
  const [images, setImages] = useState([])
  const [lightboxUrl, setLightboxUrl] = useState('')
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const imageHandleClick = (url) => {
    setLightboxOpen(true);
    setLightboxUrl(url);
  }

  useEffect(() => {
    imageCollection();
  }, [urlImages])

  const imageCollection = () => {
    const newImages = urlImages.map((id) => {
      return <motion.div
        initial={{ rotate: 180, scale: 0 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 80
        }}        
        className="w-[20vw] min-w-[150px] h-[20vw] min-h-[150px] rounded overflow-hidden flex mx-auto relative cursor-pointer opacity-80 hover:opacity-100 hover:border-opacity-100 border-opacity-40 border-black border-4"
        onClick={() => { imageHandleClick(`https://docs.google.com/uc?id=${id}`) }}
        key={id}
      >
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover min-h-full w-full"
          src={`https://docs.google.com/uc?id=${id}`}
          alt="Perfil Image"
        />
      </motion.div>
    })
    setImages(newImages)
  }

  return (
    <section className="min-h-screen pb-10 p-5 bg-indigo-950 bg-opacity-70">
      <h1 className=' text-center text-[2rem] font-[500] border border-slate-700 bg-slate-950 bg-opacity-60 text-slate-50'>Galery</h1>
      <div className='flex justify-between flex-wrap gap-2 pt-10'>
        {lightboxOpen ? <Lightbox url={lightboxUrl} desactive={() => { setLightboxOpen(false) }} /> : ''}
        {images}
      </div>
    </section>
  )
}

export default SectionImages