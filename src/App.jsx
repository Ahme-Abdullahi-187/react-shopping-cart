import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Card from './pages/Card'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <div className='my-10 mx-auto w-3/4 bg-red-300'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='card' element={<Card />} />
        </Routes>
      </div>
      <div className='flex flex-col items-center'>
        <Footer />
      </div>
    </>
  )
}

export default App