import Navbar from '../components/navbar'
import HeroSection from '../components/hero'
import OurMenu from '../components/OurMenu'
import IngredientsAndMethods from '../components/ingredientsAndMethods'
import OurBread from '../components/Ourbread'
import CustomerReview from '../components/CustomerReview'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <OurMenu />
            <IngredientsAndMethods />
            <OurBread />
            <CustomerReview />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home
