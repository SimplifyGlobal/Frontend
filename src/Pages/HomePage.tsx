// import React from 'react'
import Header from '../components/HomePage/Header';
import Hero from '../components/HomePage/Hero';
import Benefits from '../components/HomePage/Benefits';
import HowItWorks from '../components/HomePage/HowItWorks';
import Testimonials from '../components/HomePage/Testimonials';
import FAQ from '../components/HomePage/FAQ';
import Footer from '../components/HomePage/Footer';

function HomePage() {
    return (
        <div>
            <div className="min-h-screen bg-white">
                <Header />
                <main>
                    <Hero />
                    <Benefits />
                    <HowItWorks />
                    <Testimonials />
                    <FAQ />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage