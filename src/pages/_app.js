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


import { createTheme, NextUIProvider,NextThemeProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';


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
      <Component {...pageProps} />
    </NextUIProvider>
     </NextThemesProvider>
  );
}

export default MyApp;