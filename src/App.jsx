import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import SectionImages from "./components/SectionImages"

function App() {

  return (
    <div className="w-screen overflow-x-hidden bg-[url('https://docs.google.com/uc?id=12eaINVQHEQ-VwGQJhXsyoAL5vw-POySP')] bg-cover bg-no-repeat bg-fixed">
      <div className="border-b bg-black bg-opacity-60 p-5">
        <Header />
        <Main />
      </div>
      <SectionImages />
      <Footer />
    </div>
  )
}

export default App
