"use client"
import Navbar from './Navbar';
import React, { useEffect } from 'react';

const Navbarin: React.FC = () => {
    useEffect(() => {
        

        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', () => {});

    }, [])
    return (
        <>
            <Navbar />
        </>
    );
}

export default Navbarin;
