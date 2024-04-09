import React from "react";
import FooterNavLinks from "./footerNavLinks";

function NewFooter() {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-64  ">
            <div className="flex flex-col items-center justify-center w-1/2 border-t-2 space-y-6 py-6">
                <FooterNavLinks />
                <p className=" text-gray-400 font-light ">
                    Made with ❤️ by{" "}
                    <a className=" text-gray-400 hover:text-blue-400 hover:font-bold" href="https://www.prawegko.dev" target="_blank">
                        Praweg
                    </a>
                </p>
                {/* <p className="mt-2 text-sm font-light text-gray-400">
                    © {new Date().getFullYear()} PikoTech, LLC.
                </p> */}
            </div>
        </footer>
    );
}

export default NewFooter;
