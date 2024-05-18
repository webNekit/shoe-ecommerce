import Container from '@/layout/Container/Container'
import Link from 'next/link'
import React from 'react'

const Footer = ({ className }) => {
  return (
    <footer className={"w-full py-10 " + className}>
        <Container>
            <div className="w-full p-5 bg-gray-950 flex items-center justify-between">
                <p className="text-white">Все права защищены 2024</p>
                <Link href={'/'} className="text-white">Kirani</Link>
            </div>
        </Container>
    </footer>
  )
}

export default Footer