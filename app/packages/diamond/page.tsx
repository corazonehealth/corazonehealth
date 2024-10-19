"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperNavButtons from "@/components/SwiperNavButtons";
import Link from "next/link";

const Page = () => {
  return (
    <Swiper>
      {/* Diamond Package */}
      <SwiperSlide>
        <section className="bg-black text-white py-24 px-4 md:px-8">
          <div className="container mx-auto max-w-3xl">
            <h5 className="text-3xl font-bold text-center mt-11 mb-8 leading-snug">
              Diamond Membership
            </h5>
            <p className="text-lg leading-8 mb-6">
              Enjoy all the benefits of the Gold Membership, plus personalized support!
              Receive weekly check-ins by phone or email,
              and tailored programs designed for fall prevention and managing multiple metabolic and neuromuscular conditions.
              We also help interpret diagnostic tests and health assessments, whether conducted by us or other healthcare providers.
            </p>
            <p className="text-lg leading-8 mb-6">
              Need help reaching the right health practitioners or authorities?
              As a Diamond member, you gain access to the Cora Zone Health network for support.
              We assist in tracking vital health markers, so you’re better prepared for your next healthcare appointment.
            </p>
            <p className="text-lg leading-8 mb-6">
              This membership is ideal not just for those in the city,
              but also for those in rural areas with limited access to healthcare professionals.
              With an Exercise Physiologist and Kinesiologist just a few clicks away,
              you can confidently address concerns without waiting for your next check-up.
              Get advice on medications, side effects, symptom management, and spotting health changes before an ER visit is necessary.
            </p>
            {/* Swiper Navigation Buttons */}
            <div className="flex justify-center my-8">
              <SwiperNavButtons
                containerStyles="flex gap-4"
                btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
                iconStyles="text-2xl"
                leftPath="/packages/gold" // Path to Gold package
                rightPath="/packages/individual" // Path to Individual package
              />
            </div>
            <h6 className="text-2xl font-bold text-center mt-11 mb-8 leading-snug">
              Membership Pricing:
            </h6>
            <ul className="list-disc pl-6 text-lg leading-8 cursor-pointer">
              <Link href={`https://buy.stripe.com/8wMbKw9Lt1y757q003`}>
                <li className='hover:text-accent transition-all'>$80 monthly</li>
              </Link>
              <Link href={`https://buy.stripe.com/4gw6qc5vdccL0Ra28a`}>
                <li className='hover:text-accent transition-all'>$880 yearly <span className="text-secondary-400">(get 1 month free)</span></li>
              </Link>
            </ul>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Page;




      {/* Gold Package
      <SwiperSlide>
        <section className="bg-black text-white py-24 px-4 md:px-8">
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
              covering topics like managing angina, controlling blood pressure, understanding the heart's electrical system,
              functional training, metabolic conditions, and tips to enhance brain and heart health.
            </p>
            {/* Swiper Navigation Buttons */}
            {/* <div className="flex justify-center my-8">
              <SwiperNavButtons
                containerStyles="flex gap-4"
                btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
                iconStyles="text-2xl"
              />
            </div>
            <h6 className="text-2xl font-bold text-center mt-11 mb-8 leading-snug">
              Membership Pricing:
            </h6>
            <ul className="list-disc pl-6 text-lg leading-8 cursor-pointer ">
              <Link href={`https://buy.stripe.com/eVa3e0bTBfoXbvO000`}>
                <li className='hover:text-accent transition-all'>$40 monthly</li>
              </Link>
              <Link href={`https://buy.stripe.com/fZe4i44r91y7gQ8fYZ`}>
                <li className='hover:text-accent transition-all'>$440 yearly <span className="text-secondary-400">(get 1 month free)</span></li>
              </Link>
            </ul>
          </div>
        </section>
      </SwiperSlide> */}

      {/* Individual Package */}
      {/* <SwiperSlide>
        <section className="bg-black text-white py-24 px-4 md:px-8">
          <div className="container mx-auto max-w-3xl">
            <h5 className="text-3xl font-bold text-center mt-11 mb-8 leading-snug">
              Individualized Training
            </h5>
            <p className="text-lg leading-8 mb-6">
              Whether you're aiming to shed stubborn fat or enhance your performance in your favorite sport,
              our personal training sessions with a highly qualified,
              certified trainer can help you achieve your goals safely and efficiently—no matter the condition or injury.
            </p>
            <p className="text-lg leading-8 mb-6">
              Recovering from a car accident or workplace injury?
              Provide us with your ICBC claim number to receive 12 free Active Rehab sessions.
              We handle direct billing and all communication with your insurance provider.
            </p> */}
            {/* Swiper Navigation Buttons */}
            {/* <div className="flex justify-center my-8">
              <SwiperNavButtons
                containerStyles="flex gap-4"
                btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
                iconStyles="text-2xl"
              />
            </div>
            <h6 className="text-2xl font-bold text-center mt-11 mb-8 leading-snug">
              Training Packages:
            </h6>
            <ul className="list-disc pl-6 text-lg leading-8 cursor-pointer ">
              <Link href={`https://buy.stripe.com/00g9Co4r9foX9nG7sw`}>
                <li className='hover:text-accent transition-all'>1 session: $80 </li>
              </Link>
              <Link href={`https://buy.stripe.com/28o4i4g9RccL6buaEJ`}>
                <li className='hover:text-accent transition-all'>3 sessions: $240</li>
              </Link>
              <Link href={`https://buy.stripe.com/9AQ4i49LtekTczS006`}>
                <li className='hover:text-accent transition-all'>10 sessions: $700<span className="text-secondary-400">(save $100)</span></li>
              </Link>
              <Link href={`https://buy.stripe.com/5kAaGsbTBekT2ZiaEL`}>
                <li className='hover:text-accent transition-all'>20 sessions: $1,400<span className="text-secondary-400">(save $200)</span></li>
              </Link>
            </ul>
          </div>
        </section>
      </SwiperSlide> */} 