"use client";

import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { FC } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface SwiperNavButtonsProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
  leftPath?: string;   // Make leftPath optional
  rightPath?: string;  // Make rightPath optional
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
      {leftPath && (  // Render left button only if leftPath is provided
        <button onClick={() => router.push(leftPath)} className={btnStyles}>
          <FaArrowLeft className={iconStyles} />
        </button>
      )}
      {rightPath && (  // Render right button only if rightPath is provided
        <button onClick={() => router.push(rightPath)} className={btnStyles}>
          <FaArrowRight className={iconStyles} />
        </button>
      )}
    </div>
  );
};

export default SwiperNavButtons;
