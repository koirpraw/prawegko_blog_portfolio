
import { Button } from './ui/button'
import React from 'react'
import Link from 'next/link'

export default function IntroSocialButtons() {

    const socials = [
        { 'title': 'Github', 'link': 'https://github.com/koirpraw' },
        { 'title': 'LinkedIn', 'link': 'https://www.linkedin.com/in/prawegko/' },
        { 'title': 'Twitter', 'link': 'https://twitter.com/prawegko' }
    ]
    return (
        <div className='flex flex-col justify-evenly items-center space-y-4'>
            <div className='flex justify-between space-x-4'>
                {socials.map((socialInfo, index) => (
                    <Link href={socialInfo.link} target='_blank' key={index}><Button variant='outline' key={index}>{socialInfo.title}</Button></Link>
                ))}
            </div>
            <Button asChild className="h-12">
                <Link href="/prawegResume_v5.pdf" download="PrawegKoirala_Resume" target="_blank" >Download Resume</Link></Button>

        </div>
    )
}
