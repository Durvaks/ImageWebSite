import { useEffect, useState } from "react"

function App() {
  const [urlImages, setUrlImages] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    setUrlImages([
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
  }, [])

  useEffect(() => {
    imageCollection();
  }, [urlImages])

  const ligthbox = (imageLink) => {
    const dom = <div className=" z-10 fixed top-0 left-0 w-full h-full bg-slate-800 opacity-50 flex items-center justify-center"
      onClick={setImageLightbox('')}
    >
            <img
              className=" opacity-100"
              src={imageLink}
              alt="Perfil Image"
            />
    </div>
    setImageLightbox(dom)
  }

  const imageCollection = () => {
    const newImages = urlImages.map((id) => {
      return <div className=" w-[20vw] min-w-[150px] h-[20vw] min-h-[150px] rounded overflow-hidden flex mx-auto relative cursor-pointer hover:border"
        
      >
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover min-h-full w-full"
          src={`https://docs.google.com/uc?id=${id}`}
          alt="Perfil Image" />
      </div>
    })
    setImages(newImages)
  }

  return (
    <div className="bg-fixed bg-[url('https://docs.google.com/uc?id=12_e_t7Efe8xftMByyCkiSDyVSNI8cWPH')] min-w-[600px] bg-cover bg-opacity-30">
      <div className="min-h-screen border-b bg-black bg-opacity-60">
        <div>
          <header className="pl-5 pt-5 tracking-[0.24em] font-bold text-[1.8rem] text-slate-100 leading-[4rem] md:text-[2rem] md:text-center">
            <h1>Visions Beyond Imagination</h1>
            <h2>AI-Generated</h2>
          </header>
        </div>
        <section className="m-3 mt-3 md:ml-[20%] md:mb-[15%] md:mt-[10%] md:text-[1.5rem] md:max-w-4xl flex flex-wrap">
          <div className="md:min-w-[250px] inline-block max-w-[250px] md:w-[250px] rounded-md border overflow-hidden mr-5">
            <img
              className="min-w-full scale-110"
              src="https://docs.google.com/uc?id=14YyXcaCaKe2qazsjTOSHXAp2yauHDGqd"
              alt="Perfil Image"
            />
          </div>
          <p className=" max-w-[600px] mt-5 italic leading-8 tracking-[0.08em] text-slate-400">
            Welcome to my artistic universe driven by artificial intelligence!
            Each artwork is the result of a collaboration between my creative vision and the powerful mind of AI, resulting in visually stunning compositions and surprising concepts.
            Get ready to dive into a world of vibrant colors, intriguing shapes, and mesmerizing textures.
            Join me in this data-powered artistic exploration and discover the wonders that artificial intelligence can create.
            Welcome to the future of artistic expression!
          </p>

        </section>
      </div>
      <section className="min-h-screen pt-10 pb-10 p-5 flex justify-between flex-wrap gap-2 min-w-[600px] bg-indigo-950 bg-opacity-70">
        {images}
      </section>
    </div>
  )
}

export default App
