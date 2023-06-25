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

  const imageCollection = () => {
    const newImages = urlImages.map((id) => {
      return <div className=" h-1/5 rounded overflow-hidden flex">
        <img
          src={`https://docs.google.com/uc?id=${id}`}
          alt="Perfil Image" />
      </div>
    })
    setImages(newImages)
  }

  return (
    <div className="bg-fixed bg-gradient-to-b from-cyan-950 to-emerald-950">
      <div className="h-screen border-b">
        <div>
          <header className="pl-5 pt-5 tracking-[0.24em] font-bold text-base text-slate-100 leading-9 md:text-[2rem] md:text-center">
            <h1>Visions Beyond Imagination</h1>
            <h2>AI-Generated</h2>
          </header>
        </div>
        <section className="m-3 mt-3 md:text-[1.5rem] md:max-w-4xl md:m-auto">
          <div className=" inline-block max-w-[250px] md:w-[250px] rounded-md border overflow-hidden mr-5">
              <img
                className="min-w-full scale-110"
                src="https://docs.google.com/uc?id=14YyXcaCaKe2qazsjTOSHXAp2yauHDGqd"
                alt="Perfil Image"
              />
          </div>
          <p className="mt-5 italic leading-8 tracking-[0.08em] text-slate-400">
            Welcome to my artistic universe driven by artificial intelligence!
            Each artwork is the result of a collaboration between my creative vision and the powerful mind of AI, resulting in visually stunning compositions and surprising concepts.
            Get ready to dive into a world of vibrant colors, intriguing shapes, and mesmerizing textures.
            Join me in this data-powered artistic exploration and discover the wonders that artificial intelligence can create.
            Welcome to the future of artistic expression!
          </p>

        </section>
      </div>
      <section className="h-screen pt-10 pb-10 p-5 flex justify-between flex-wrap gap-2">
        {images}
      </section>
    </div>
  )
}

export default App
