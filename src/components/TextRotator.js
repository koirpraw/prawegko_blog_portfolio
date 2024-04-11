import React from "react";

function TextRotator() {
    const selfTitles = ["an Enterprenuer 🚀 ", "a Tinkerer 🛠️ ", "a Tech Enthusiast 🖥️", "a DIY Enthusiast 🪚", "a New Dad 👨‍🍼"]
    return (
        <div className="py-8 flex flex-col justify-center items-center overflow-hidden">

            <p className="inline text-3xl lg:text-4xl">a Software Developer</p>
            <p className="inline text-3xl"> & </p>


            <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">

                <ul className="block text-left leading-tight [&_li]:block animate-text-slide ">

                    {selfTitles.map((title, index) => {
                        return <li key={index} className="text-[#2f7df4] text-3xl">{title}</li>
                    })}

                </ul>
            </span>
        </div>
        // </div>
    );
}

export default TextRotator;