"use client"

import Image from "next/image"
import Link from "next/link"

import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

import CustomButton from "./CustomButton"
import { motion } from "framer-motion"

//variants
const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: "linear"
    }
  }
}
const footerItem = {
  hidden: {
    y: 20,
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8]
    }
  }
}

const Footer = () => {
  return (
    <footer className='bg-primary-200 pt-24'>
      <div className="container mx-auto pb-24">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          {/*info*/}
          <motion.div
            variants={footerItem}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-4">
            <Link href='#'>
              <Image src={'/assets/logo.jpg'} width={200} height={200} alt="logo" />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, culpa.
            </p>
            <ul className="flex flex-col gap-4">
              {/* <li className="flex items-center gap-4">
                <FaMapMarkedAlt className="text-xl text-accent" />
                <span>
                  Lincoln Park Chicago, Illinois
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>
                  (510) 710-3464 (510) 640-6326
                </span>
              </li> */}
              <li className="">
                <Link className='flex items-center gap-4' href="#">
                  <span>

                    info@corazonehealth.com
                  </span>
                </Link>
                <FaEnvelope className="text-xl text-accent" />
              </li>
            </ul>
          </motion.div>
          {/*Blog*/}
          <motion.div
            variants={footerItem}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=""
          >
            <h4 className="h4 text-accent mb-4">
              Recenet Blog posts

            </h4>
            {/*post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href='#' className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">How to stay motivated for all exercises</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">September 22, 2024</p>
              </Link>
            </div>
            {/*post*/}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href='#' className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">How to stay motivated for all exercises</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">September 22, 2024</p>
              </Link>
            </div>
            {/*post*/}
            <div className="flex flex-col gap-3 pb-3 mb-4">
              <Link href='#' className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">How to stay motivated for all exercises</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">September 22, 2024</p>
              </Link>
            </div>
          </motion.div>
          {/*Gallery*/}
          <motion.div
            variants={footerItem}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=""
          >
            <h4 className="h4 text-accent mb-4">
              Gallery
            </h4>
            {/*Gallery Images */}
            <div className="flex flex-wrap gap-2">
              <Link href='#'>
                <Image src={'/assets/photos/scadrun.jpg'}
                  width={100}
                  height={100}
                  alt="gallery"
                />
              </Link>
              <Link href='#'>
                <Image src={'/assets/photos/hh_champy.jpg'}
                  width={100}
                  height={100}
                  alt="gallery"
                />
              </Link>
              <Link href='#'>
                <Image src={'/assets/photos/hh_ss_kenzie.jpg'}
                  width={100}
                  height={100}
                  alt="gallery"
                />
              </Link>
              {/* <Link href='#'>
                <Image src={'/assets/photos/kp_evaluation.png'}
                  width={100}
                  height={100}
                  alt="gallery"
                />
              </Link> */}
              <Link href='#'>
                <Image src={'/assets/photos/treadmill_training.jpg'}
                  width={100}
                  height={100}
                  alt="gallery"
                />
              </Link>
            </div>
          </motion.div>
          {/*newsletter*/}
          <motion.div
            variants={footerItem}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h4 className="h4 text-accent m-4">
              Newsletter
            </h4>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Illum hic facilis delectus eveniet.
              </p>
              <form className="flex items-center">
                <input type="text" placeholder="Your email address" className="h-[50px]
                outline-none px-4 text-primary-300"/>
                <CustomButton containerStyles="h-[50px] px-8 " text="Send" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/*copyright */}
      <div className="text-white border-1 border-white/20 py-12">
        <div className="contaienr mx-auto h-full">
          <div className="flex items-center justify-between h-full px-12">
            <span>&Copyright 2024 Kevin App</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link href='https://www.facebook.com/profile.php?id=61561630227570' className="text-white hover:text-accent transition-all">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href='https://www.instagram.com/corazonehealth1' className="text-white hover:text-accent transition-all">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href='https://www.youtube.com/@corazonehealth' className="text-white hover:text-accent transition-all">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer