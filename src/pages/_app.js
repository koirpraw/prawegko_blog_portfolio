// import '@/styles/globals.css'
// import * as React from 'react'
// import { NextUIProvider } from '@nextui-org/react'


// export default function App({ Component, pageProps }) {
//   return 
//     <NextUIProvider>
//   <Component {...pageProps} />
//     </NextUIProvider>
// }
import '../styles/globals.css';


// import { Roboto } from 'next/font/google';
import { createTheme, NextUIProvider, NextThemeProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import RootLayout from '../components/RootLayout';
import FullNavbar from '@/components/FullNavbar';
import NewFooter from '@/components/NewFooter';
// import { Inter } from 'next/font/google'

// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })

// const inter = Inter({ subsets: ['latin'] })
// const roboto = Roboto({ subsets: ['latin'] })

// 2. Call `createTheme` and pass your custom values
export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '$blue',
      background: '$white',
      text: '#000',

    }, // optional
  }
})

export const darkTheme = createTheme({
  type: 'dark',

  theme: {
    colors: {
      background: '#1d1d1d',
      text: '#fff',


    }, // optional
  }

})


function MyApp({ Component, pageProps }) {
  return (
    // <RootLayout>
    <NextThemesProvider
      // defaultTheme="system"
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <FullNavbar />
        <main className='flex flex-col justify-start min-h-screen py-24 px-24'>

          <Component {...pageProps} /></main>
        <NewFooter />
        <Analytics />
      </NextUIProvider>
    </NextThemesProvider>

    // </RootLayout>

  );
}

export default MyApp;