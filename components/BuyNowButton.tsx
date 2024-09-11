import {motion} from "framer-motion"
import { fadeIn } from "@/lib/variants"
import { useRouter } from "next/navigation"


const BuyNowButton = ({text, containerStyles, href} : {text: string, containerStyles: string, href?: string }) => {
    const router = useRouter()
    const handleClick = () =>{
        if(href){
            router.push(href)
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