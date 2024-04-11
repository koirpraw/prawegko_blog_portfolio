

// import '../styles/globals.css';
import { NextUIProvider } from "@nextui-org/react"

import { Work_Sans, Poppins, Montserrat } from "next/font/google"
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

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '400', '500',],
    variable: '--font-montserrat',

})
const combinedClass = `
${montserrat.className}
${poppins.className}
${workSans.className}
`
// 2. Call `createTheme` and pass your custom values


export default function RootLayout({ children }) {
    return (
        <>


            {/* <NextUIProvider> */}
            <FullNavbar />

            <main className={`${combinedClass}font-sans flex felx-col min-h-screen mx-auto mt-40 pb-16`}>



                {children}</main>
            <NewFooter />
            <Analytics />
            {/* </NextUIProvider> */}


        </>
    )

}