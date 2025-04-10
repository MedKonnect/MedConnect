import React from 'react'
import Button from '../ui/button'
import Link from 'next/link'

const links = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Contact us', path: '/contact' },
]
const Nav = () => {
  return (
    <nav className='flex justify-between items-center text-white'>
        <p className='font-bold leading-[3%]'>MEDCONNECT</p>
        <ul className='lg:flex hidden space-x-8'>
            {
                links.map((link, index) => (
                    <Link href={link.path} key={index}>
                        <p>{link.name}</p>
                    </Link>
                ))
            }
        </ul>
        <Button variant='primary'>Sign up</Button>
    </nav>
  )
}

export default Nav