import { useRouter } from "next/navigation";
import React from "react";

interface BuyNowButtonProps {
  text: string;
  containerStyles: string;
  href?: string;
}

const BuyNowButton: React.FC<BuyNowButtonProps> = ({ text, containerStyles, href }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href); // Simply redirect to the provided href ("/packages")
    }
  };

  return (
    <button
      className={`${containerStyles} bg-accent text-white uppercase rounded-lg p-2`}
      onClick={handleClick}
    >
      <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all
      duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
      <span className=" ease relative text-white transition duration-300 group-hover:text-white">
        {text}
      </span>
    </button>
  );
};

export default BuyNowButton;
