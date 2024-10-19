"use client";

import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { FC } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface SwiperNavButtonsProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
  leftPath: string;   // Prop for the path to navigate on left arrow click
  rightPath: string;  // Prop for the path to navigate on right arrow click
}

const SwiperNavButtons: FC<SwiperNavButtonsProps> = ({
  containerStyles,
  btnStyles,
  iconStyles,
  leftPath,
  rightPath
}) => {
  const router = useRouter(); // Now we use useRouter for navigation

  return (
    <div className={containerStyles}>
      <button onClick={() => router.push(leftPath)} className={btnStyles}>
        <FaArrowLeft className={iconStyles} />
      </button>
      <button onClick={() => router.push(rightPath)} className={btnStyles}>
        <FaArrowRight className={iconStyles} />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
