import FullNavbar from "@/components/FullNavbar";
import NewFooter from "@/components/NewFooter";
// import { Roboto } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body >
                <FullNavbar />
                <main className="py-16">{children}</main>
                <NewFooter />
            </body>

        </html>
    )
}