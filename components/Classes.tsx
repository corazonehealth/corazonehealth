"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import CustomButton from "./CustomButton"
import { fadeIn } from "@/lib/variants"
import classes from "@/constants/classes"


const Classes = () => {
  return (
    <section id='class'>
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2">
        {classes.map((item, index) => {
          return <div className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center
          items-center" key={index}>
            {/*overlay */}
            <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
            <Image
              src={item.img}
              fill
              className="object-cover"
              alt="class"
            />
            {/*text & btn */}
            <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
              <motion.h3
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="h3 text-accent">{item.name}</motion.h3>
              <motion.p
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="text-white">
                {item.description}
              </motion.p>
              <motion.div
                    variants={fadeIn('up', 0.8)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.2}}>
                <CustomButton containerStyles="w-[164px] h-[46px]" text="Read more" />
              </motion.div>
            </div>
          </div>



        })}
      </motion.div>
    </section>
  )
}
//2.02..01
export default Classes