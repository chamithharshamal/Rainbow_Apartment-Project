"use client";

import Header from '../sections/Header';
import Hero from '../sections/Hero';
import About from '../sections/About';
import FloorGuide from '../sections/FloorGuide';
import Rooftop from '../sections/Rooftop';
import Apartments from '../sections/Apartments';
import Amenities from '../sections/Amenities';
import Gallery from '../sections/Gallery';
import Location from '../sections/Location';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <About />
                <FloorGuide />
                <Rooftop />
                <Apartments />
                <Amenities />
                <Gallery />
                <Location />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
