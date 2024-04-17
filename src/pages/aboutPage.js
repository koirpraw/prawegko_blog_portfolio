

import React from 'react'

function AboutPage() {
    var currentYear = new Date().getFullYear();
    var bellaAge = currentYear - 2020;
    var sonAge = currentYear - 2022;
    var usDuration = currentYear - 2006;
    return (
        <div className='flex flex-col justify-center items-center space-y-8 w-full px-6'>
            <div className='flex justify-center lg:w-3/4'>
                <h3 className="text-3xl font-light ">Welcome to My Digital WorkShop. I am so Glad to Virtually meet you.</h3>
            </div>


            <div className='flex flex-col justify-center items-center lg:w-3/4 '>
                <h2 className='text-3xl '>About me:</h2>
                {/* <p className='text-xl'>Welcome to my Digital Workshop. I am so glad to Virtually Meet you.
                </p>
                <p className='text-xl'> Let me Introduce Myself:</p>
                <p className='text-lg'>My Name is Praweg & i live in Colorado with my beautiful Wife, a {sonAge} yrs old son & a {bellaAge} yrs old fluffy poodle named Bella.
                    I was born and raised in Nepal and have been calling US my second home for past {usDuration} yrs.
                </p> */}
                <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            {/* <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl '>Piktogram</h2>
                <p className='text-lg font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl '>PikIntrest</h2>
                <p className='text-lg font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl '>PikChatter</h2>
                <p className='text-lg font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div> */}



        </div>
    )
}

export default AboutPage