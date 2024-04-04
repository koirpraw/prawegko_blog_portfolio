
import { Button } from './ui/button'
import React from 'react'

export default function IntroSocialButtons() {

    const socials = ['Github', 'LinkedIn', 'Twitter']
    return (
        <div className='flex flex-col justify-evenly items-center space-y-4'>
            <div className='flex justify-between space-x-4'>
                {socials.map((title, index) => (
                    <Button variant='outline' key={index}>{title}</Button>
                ))}
            </div>
            <Button className="h-12">Download Resume</Button>

        </div>
    )
}
