import Blog from '@/components/Blog'
import Classes from '@/components/Classes'
import Hero from '@/components/Hero'
import Membership from '@/components/Membership'
import Team from '@/components/Team'

// export const runtime = 'edge';

export default function Home() {
  return (
    <main>
      <section id='hero'>
        <Hero />
      </section>
      <section id='classes'>
        <Classes />
      </section>
      <section id='team'>
        <Team />
      </section>
      <section id='membership'>
        <Membership />
      </section>
      {/* Other sections */}
      <section id='blog'>
        <Blog />
      </section>
    </main>
  )
}
