import {motion} from "framer-motion"
import { fadeIn } from "@/lib/variants"
import { useRouter } from "next/navigation"
import React from "react";

interface BuyNowButtonProps {
    text: string;
    containerStyles: string;
    href?: string;
    packageTitle?: string;
    packagePrice?: string
}

const BuyNowButton: React.FC<BuyNowButtonProps> = ({text, containerStyles, href, packageTitle, packagePrice}) => {
    const router = useRouter()
    const handleClick = () =>{
        if(href){
            //Construct the query string
            const queryString = new URLSearchParams({
                title: packageTitle || '',
                price: packagePrice || '',
            }).toString()

            //Navigate to the href with the query string
            router.push(`${href}?${queryString}`)
        }
    }

  return (
    <motion.button
        variants={fadeIn('up', 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}}
        className={`${containerStyles} group relative cursor-pointer overflow-hidden bg-accent uppercase rounded-lg`}
        onClick={handleClick}    
    >   
        <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 
        bg-black transition-all duration-300 groupp-hover: -translate-y-32">
        </span>
        <span className="ease relative text-white transition duration-300 group-hover:text-white">
            {text}
        </span>
    </motion.button>
  )
}

export default BuyNowButton