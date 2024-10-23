"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperNavButtons from "@/components/SwiperNavButtons";
import Link from "next/link";

const Page = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <section className="bg-primary-300 text-white py-24 px-4 md:px-8">
          <div className="container mx-auto max-w-3xl">
            <h5 className="text-3xl font-bold text-center mt-11 mb-8 leading-snug">
              Gold Membership
            </h5>
            <p className="text-lg leading-8 mb-6">
              Join 30-minute aerobic classes via Zoom to boost endurance and overall fitness.
              With different levels available, you can exercise at your own pace and in your comfort zone.
              Improve balance, coordination, and reaction time—all from the convenience of home.
            </p>
            <p className="text-lg leading-8 mb-6">
              Stay after class for exclusive 15-minute seminars by Cora Zone Health,
              covering topics like managing angina, controlling blood pressure, understanding the heart&apos;s electrical system...
            </p>
            {/* Swiper Navigation Buttons */}
            <div className="flex justify-center my-8">
              <SwiperNavButtons
                containerStyles="flex gap-4"
                btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
                iconStyles="text-2xl"
                leftPath="/packages/individual" // Path to Gold package
                rightPath="/packages/diamond" // Path to Individual package
              />
            </div>
            <h6 className='text-2xl font-bold text-center mt-11 mb-8 leading-snug'>
              Training Packages:
              <br/>
              <span className="text-xs block">(Click bellow)</span>
            </h6>
            <ul className="list-disc pl-6 text-lg leading-8 cursor-pointer ">
            <Link href={`https://buy.stripe.com/6oE01O5vd3GfbvObIY`}>
                <li className='hover:text-accent transition-all'>$45 one time pay</li>
              </Link>
              <Link href={`https://buy.stripe.com/cN201Oe1J4Kj1VefZf`}>
                <li className='hover:text-accent transition-all'>$45 monthly</li>
              </Link>
              <Link href={`https://buy.stripe.com/dR615S0aT7WvgQ8bJ0`}>
                <li className='hover:text-accent transition-all'>$495 yearly <span className="text-secondary-400">(get 1 month free)</span></li>
              </Link>
            </ul>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  )
}

export const runtime = 'edge';
export default Page