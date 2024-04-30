import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import DiscoverUs from "../components/DiscoverUs.jsx";
import OurProducts from "../components/OurProducts.jsx";
import Footer from "../components/Footer.jsx";

import { countries } from "../data/Data.js";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero id='home'/>
            <DiscoverUs id='about'/>
            <OurProducts />
            <Footer />
        </>
    );
};

export default HomePage;