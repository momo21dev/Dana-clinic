import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import Team from './components/Team'
import Offers from './components/Offers'
import Contact from './components/Contact'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/team' element={<Team />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
