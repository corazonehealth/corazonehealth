"use client"

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
//components
import CustomButton from "./CustomButton"
import SwiperNavButtons from "./SwiperNavButtons"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"


const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] ">
            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2">
                Get in 
              <motion.span 
                            variants={fadeIn('up', 0.9)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }}
              className="text-accent"> your zone</motion.span> 
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 1.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic text-center h5 lg:text-left mb-4">
              Cardiac and cancer rehabilitation. Diabetes and all metabolic conditions are welcome
            </motion.p>
            <CustomButton
            onClick={() => document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth'})}
              text="Get Started"
              containerStyles="w-[196px] h-[62px] mb-4" // Added margin-bottom to create space between button and navigation buttons
            />
            {/*swiper nav buttons */}
            <SwiperNavButtons
              containerStyles="flex justify-center lg:justify-start gap-1 mt-4 mb-4 sm:ml-4 md:ml-5 lg:ml-10 " // Moved inside and added margin-top for spacing
              btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center 
                items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] ">
            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2">
                Get in 
              <motion.span 
                            variants={fadeIn('up', 0.9)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }}
              className="text-accent"> your zone</motion.span> 
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 1.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic text-center lg:text-left mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni minus aliquid quam!
            </motion.p>
            <CustomButton
              text="Get Started"
              containerStyles="w-[196px] h-[62px] mb-4" // Added margin-bottom to create space between button and navigation buttons
            />
            {/*swiper nav buttons */}
            <SwiperNavButtons
              containerStyles="flex justify-center lg:justify-start gap-1 mt-4 mb-4 sm:ml-4 md:ml-5 lg:ml-10 " // Moved inside and added margin-top for spacing
              btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center 
                items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroSlider
