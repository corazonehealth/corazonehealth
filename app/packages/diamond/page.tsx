'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperNavButtons from '@/components/SwiperNavButtons'
import Link from 'next/link'

const Page = () => {
  return (
    <Swiper>
      {/* Diamond Package */}
      <SwiperSlide>
        <section className='bg-black text-white py-24 px-4 md:px-8'>
          <div className='container mx-auto max-w-3xl'>
            <h5 className='text-3xl font-bold text-center mt-11 mb-8 leading-snug'>
              Diamond Membership
            </h5>
            <p className='text-lg leading-8 mb-6'>
              Enjoy all the benefits of the Gold Membership, plus personalized
              support! Receive weekly check-ins by phone or email, and tailored
              programs designed for fall prevention and managing multiple
              metabolic and neuromuscular conditions. We also help interpret
              diagnostic tests and health assessments, whether conducted by us
              or other healthcare providers.
            </p>
            <p className='text-lg leading-8 mb-6'>
              Need help reaching the right health practitioners or authorities?
              As a Diamond member, you gain access to the Cora Zone Health
              network for support. We assist in tracking vital health markers,
              so you’re better prepared for your next healthcare appointment.
            </p>
            <p className='text-lg leading-8 mb-6'>
              This membership is ideal not just for those in the city, but also
              for those in rural areas with limited access to healthcare
              professionals. With an Exercise Physiologist and Kinesiologist
              just a few clicks away, you can confidently address concerns
              without waiting for your next check-up. Get advice on medications,
              side effects, symptom management, and spotting health changes
              before an ER visit is necessary.
            </p>
            {/* Swiper Navigation Buttons */}
            <div className='flex justify-center my-8'>
              <SwiperNavButtons
                containerStyles='flex gap-4'
                btnStyles='border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300'
                iconStyles='text-2xl'
                leftPath='/packages/gold' // Path to Gold package
                rightPath='/packages/individual' // Path to Individual package
              />
            </div>
            <h6 className='text-2xl font-bold text-center mt-11 mb-8 leading-snug'>
              Training Packages:
              <br />
              <span className='text-xs block'>(Click below)</span>
            </h6>
            <ul className='list-disc pl-6 text-lg leading-8 cursor-pointer'>
              <Link href={`https://buy.stripe.com/dR6eWI1eX5On2Zi3cv`}>
                <li className='hover:text-accent transition-all'>
                  $85 one time pay
                </li>
              </Link>
              <Link href={`https://buy.stripe.com/3cs15Se1Jgt19nG6oI`}>
                <li className='hover:text-accent transition-all'>
                  $85 monthly
                </li>
              </Link>
              <Link href={`https://buy.stripe.com/6oEbKw7Dl7Wv2ZidRb`}>
                <li className='hover:text-accent transition-all'>
                  $935 yearly{' '}
                  <span className='text-secondary-400'>(get 1 month free)</span>
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
export default Page
