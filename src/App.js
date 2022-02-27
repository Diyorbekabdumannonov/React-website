import Navigation from './components/Navigation';
import Navbar from './components/Navbar/Navbar'
import Filter from './components/Fillter/Filter';
import Cards from './components/Card/Cards';
import { useState } from 'react'
import Footer from './components/Footer/Footer';
import Pagination from './components/Pagination';

function App() {
  const [showCard, setShowCard] = useState(true)
  return (
    <>
      <Navbar />
      <div className='md:mx-[90px]'>
        <Navigation />
        <Filter showCard={showCard} setShowCard={setShowCard}/>
        <Cards showCard={showCard}/>
      </div>
      <Pagination/>
      <Footer/>
    </>
  )
}

export default App;
