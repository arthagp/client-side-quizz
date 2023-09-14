import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="flex items-center justify-center">
        <Hero />
      </main>
    </>
  )
}
