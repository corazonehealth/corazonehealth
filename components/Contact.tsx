"use Client"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

//import brandsImages
import brandImages from "@/constants/BrandImages"

//variants 
const brandContainerVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear"
    },
  },
}

const brandItem = {
  hidden: {
    y: 20, opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3,]
    },
  },
}


const Contact = () => {
  return (
    <section className='py-8'>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 py-8">
          {brandImages.map((img, index) => {
            return (
              <div
                key={index}>
                <Link
                  className="group"
                  href={img.href}>
                  <Image className="opacity-50 group-hover:opacity-100 transition-all mx-auto"
                    src={img.src}
                    width={204}
                    height={106}
                    alt="brand" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact