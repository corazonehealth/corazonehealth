import About from "@/components/About";
import Blog from "@/components/Blog";
import Classes from "@/components/Classes";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import Link from "next/link";

// export const runtime = 'edge';

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="classes">
        <Classes />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="membership">
        <Membership />
      </section>
      {/* Other sections */}
      <section id="blog">
        <Blog/>
      </section>
    </main>
  );
}
