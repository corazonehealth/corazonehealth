'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperNavButtons from '@/components/SwiperNavButtons'
import Link from 'next/link'

const IndividualPackage = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <section className='bg-primary-300 text-white py-24 px-4 md:px-8'>
          <div className='container mx-auto max-w-3xl'>
            <h5 className='text-3xl font-bold text-center mt-11 mb-8 leading-snug'>
              Individualized Training
            </h5>
            <p className='text-lg leading-8 mb-6'>
              Whether you&apos;re aiming to shed stubborn fat or enhance your
              performance in your favorite sport, our personal training sessions
              with a highly qualified, certified trainer can help you achieve
              your goals safely and efficiently—no matter the condition or
              injury.
            </p>
            <p className='text-lg leading-8 mb-6'>
              Recovering from a car accident or workplace injury? Provide us
              with your ICBC claim number to receive 12 free Active Rehab
              sessions. We handle direct billing and all communication with your
              insurance provider.
            </p>
            {/* Swiper Navigation Buttons */}
            <div className='flex justify-center my-8'>
              <SwiperNavButtons
                containerStyles='flex gap-4'
                btnStyles='border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300'
                iconStyles='text-2xl'
                leftPath='/packages/diamond' // Path to Gold package
                rightPath='/packages/gold' // Path to Individual package
              />
            </div>
            <h6 className='text-2xl font-bold text-center mt-11 mb-8 leading-snug'>
              Training Packages:
              <br />
              <span className='text-xs block'>(Click below)</span>
            </h6>
            <ul className='list-disc pl-6 text-lg leading-8 cursor-pointer '>
              <Link href={`https://buy.stripe.com/00g9Co4r9foX9nG7sw`}>
                <li className='hover:text-accent transition-all'>
                  1 session: $80{' '}
                </li>
              </Link>
              <Link href={`https://buy.stripe.com/28o4i4g9RccL6buaEJ`}>
                <li className='hover:text-accent transition-all'>
                  3 sessions: $240
                </li>
              </Link>
              <Link href={`https://buy.stripe.com/bJe8wRdw77Sf4pT0YU4c80n`}>
                <li className='hover:text-accent transition-all'>
                  5 sessions: $400
                </li>
              </Link>
              <Link href={`https://buy.stripe.com/4gM6oJ4ZB1tR09DdLG4c80m`}>
                <li className='hover:text-accent transition-all'>
                  10 sessions: $800
                </li>
              </Link>
              <Link href={`https://buy.stripe.com/5kAaGsbTBekT2ZiaEL`}>
                <li className='hover:text-accent transition-all'>
                  20 sessions: $1,400
                  <span className='text-secondary-400'>(save $200)</span>
                </li>
              </Link>
            </ul>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  )
}

// export const runtime = 'edge'
export default IndividualPackage
