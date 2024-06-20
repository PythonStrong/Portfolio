import { useState } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/contact/Contact'
import Loader from './components/loader/Loader'
import ScrollToTop from 'react-scroll-to-top'
import AnimatedCursor from 'react-animated-cursor'

function App() {
  const [loader, setLoader] = useState(true)
  setInterval(() => {
    setLoader(false)
  }, 4000);

  return (
    <>
      {loader ? <Loader /> :
        <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </div>
      }
      <div className='none'>
        <AnimatedCursor
          innerSize={12}
          outerSize={20}
          color='255, 255, 255'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
      <ScrollToTop style={{ paddingLeft: '6px', borderRadius: '10px', }} smooth />
      </div>
    </>
  )
}

export default App
