import React from 'react'

function TempCard(url, title, description) {
    return (
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                19
            </div>

            <div class="p-2 flex justify-center">
                <a href="#">
                    <img class="rounded-md"
                        src={url}
                        loading="lazy" />
                </a>
            </div>

            <div class="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            {title}
                        </h5>
                    </a>

                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        {description}
                    </p>
                </div>
            </div>
        </div>


    );
}

export default TempCard