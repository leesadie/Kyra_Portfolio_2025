'use client';

import Image from "next/image";
import Hero from "./Hero";
import { useState, useEffect } from "react";

const SplashScreen = ({  }) => {
    const [showSplash, setShowSplash] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowSplash(false);
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <>
      {showSplash ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <Image
            src="/images/splash.svg" // Replace with your image path
            alt="Splash Screen"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
            className="animate-fadeOut"
          />
        </div>
      ) : (
        <Hero />
      )}
    </>
    );
}

export default SplashScreen;