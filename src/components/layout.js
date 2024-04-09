

// import '../styles/globals.css';
import { createTheme, NextUIProvider, NextThemeProvider } from "@nextui-org/react"
import { NextThemesProvider } from 'next-themes'
import { Work_Sans, Poppins } from "next/font/google"
import FullNavbar from "@/components/FullNavbar";
import NewFooter from "@/components/NewFooter";
import { Analytics } from "@vercel/analytics/react";


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

export default function RootLayout({ children }) {
    return (
        <>
            {/* <body className=""> */}
            {/* <NextThemesProvider

                defaultTheme="system"
                attribute="class"
                value={{
                    light: lightTheme.className,
                    dark: darkTheme.className,
                }}
            > */}
            <NextUIProvider>
                <FullNavbar />

                <main className={`${workSans.variable}${poppins.variable}font-sans flex felx-col min-h-screen mx-auto mt-36 pb-16`}>



                    {children}</main>
                <NewFooter />
                <Analytics />
            </NextUIProvider>
            {/* </NextThemesProvider> */}
            {/* </body> */}

        </>
    )

}