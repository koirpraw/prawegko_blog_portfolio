import React from "react";
import FooterNavLinks from "./footerNavLinks";

function NewFooter() {
    let today = new Date();
    let day = today.getUTCDate();
    let month = today.getUTCMonth() + 1;
    let year = today.getUTCFullYear().toString().slice(2);

    let todayDate = `${day}/${month}/${year}`;



    return (
        <footer className="flex flex-col items-center justify-center w-full h-64  ">
            <div className="flex flex-col items-center justify-center w-1/2 border-t-2 space-y-6 py-6">
                <FooterNavLinks />
                <div>
                    <p className=" text-gray-400 font-light ">
                        Made with ❤️ by{" "}
                        <a className=" text-gray-400 hover:text-blue-400 hover:font-bold" href="https://www.prawegko.dev" target="_blank">
                            Praweg
                        </a>
                    </p>
                    <div className="flex flex-col justify-center items-center space-x-4">
                        <p className="text-5xl font-signature">Prawegko</p>
                        <p className="text-gray-400">{todayDate}</p>
                        {/* <GeneralUtils /> */}

                    </div>
                </div>



                {/* <p className="mt-2 text-sm font-light text-gray-400">
                    © {new Date().getFullYear()} PikoTech, LLC.
                </p> */}
            </div>
        </footer>
    );
}

export default NewFooter;
