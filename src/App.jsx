
import './App.css'
import Navbar from './components/navbar'
import HeroSection from './components/hero'
import OurMenu from './components/OurMenu'
import IngredientsAndMethods from './components/ingredientsAndMethods'
import OurBread from './components/Ourbread'
import CustomerReview from './components/CustomerReview'


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurMenu />
      <IngredientsAndMethods />
      <OurBread />
      <CustomerReview />
    </>
  )
}

export default App
