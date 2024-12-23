'use client';

import type { Metadata } from "next";
import "./globals.css";

import { font_reg } from "./fonts";
import { font_med } from "./fonts";
import Navbar from "./components/nav/Navbar";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${font_reg.className} ${showSplash ? 'overflow-hidden' : ''}`}
      >
        {showSplash ? (
          <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <Image
              src="/images/splash.svg" 
              alt="Splash Screen"
              width={0} 
              height={0}
              sizes="100vh"
              style={{ width: '100%', height: '100%' }}
              className="animate-fadeOut object-cover"
            />
          </div>
        ) : (
          <>
            <Navbar />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
