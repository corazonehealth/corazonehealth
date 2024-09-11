"use client"

import CustomButton from "./CustomButton"

//import swiper components
import { Swiper, SwiperSlide } from "swiper/react"

//import required modules
import { Pagination } from "swiper/modules"

//swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import membershipData
import membershipData from "@/constants/membershipData"
import BuyNowButton from "./BuyNowButton"

export const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },

      }}
      className="min-h-[680px]"
    >
      {membershipData.map((item, index) => {
        return <SwiperSlide key={index}>
          <div className="border border-accent hover:bg-primary-300/80
          transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto h-full flex flex-col">
            <div className="py-5 px-[60px] border-b border-accent">
              <h4 className="h4">{item.title}</h4>
            </div>
            {/*benefits */}
            <div className="flex-grow py-[30px] px-[40px]">
              <ul className="flex flex-col gap-5 mb-7">
                {item.benefits.map((benefit, index) => {
                  return (
                    <li
                      className="flex items-center gap-2"
                      key={index}>
                      <benefit.icon className="text-accent text-lg" />
                      {benefit.text}
                    </li>
                  )
                })}
              </ul>
              {/*Prices & button */}
              <div className="mt-auto">
                <p className="text-accent mb-8 flex gap-1 items-center">
                  <strong className="text-2xl">{item.price}</strong>
                </p>
                <BuyNowButton containerStyles="w-[196px] h-[62px]" text="Buy now" href="/card-details"/>
              </div>
            </div>
          </div>
        </SwiperSlide>
      })}
    </Swiper>
  )
}
