import '@/styles/globals.css'



import { createTheme, NextUIProvider, NextThemeProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
// import RootLayout from '../components/RootLayout';
import FullNavbar from '@/components/FullNavbar';
import NewFooter from '@/components/NewFooter';
import { Poppins, Work_Sans } from '@next/font/google';
import RootLayout from '@/components/layout';

// import localFont from '@next/font/local'


// const calSans = localFont({
//   display: 'swap',
//   subsets: ['latin'],
//   src: '../../public/fonts/CalSans-SemiBold.woff2',
//   variable: '--font-calsans',
// })

const workSans = Work_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-worksans',
  weight: ['400', '500', '700'],
})

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '700'],
})

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
    // <NextThemesProvider
    //   // defaultTheme="system"
    //   defaultTheme="system"
    //   attribute="class"
    //   value={{
    //     light: lightTheme.className,
    //     dark: darkTheme.className,
    //   }}
    // >
    //   <NextUIProvider>
    //     <FullNavbar />
    //     <main className={`${workSans.variable}${poppins.variable}font-sans`}>

    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>

    //       </main>
    //     <NewFooter />
    //     <Analytics />
    //   </NextUIProvider>
    // </NextThemesProvider>

    // </RootLayout>

  );
}

export default MyApp;