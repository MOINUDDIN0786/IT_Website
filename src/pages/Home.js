import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
// import Intro from './Intro';
// import Portfolio from './Career';
// import Services from './Services';



const Home = () => {
    return (
        <>
            <Hero />
            <Clients/>
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

