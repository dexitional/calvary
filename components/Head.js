import React from 'react'
import Head from 'next/head';

function MainHead() {
  return (
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&Bungee+Outline&family=Tilt+Prism&family=Poppins&family=Roboto&display=swap" rel="stylesheet"/>
        <link href="../../public/logo.png" rel="icon" />
    </Head>
  )
}

export default MainHead