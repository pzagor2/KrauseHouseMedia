import { motion } from "framer-motion";

import ballImage from "@/assets/ball.png";

const loaderVariants = {
  animationOne: {
    x: [-30, 30],
    y: [0, -15],
    rotate: [0, 360],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.8,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
      rotate: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 3,
      },
    },
  },
};

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-y-2 ${className}`}
    >
      <motion.img
        src={ballImage}
        className="w-6 h-6"
        variants={loaderVariants}
        animate="animationOne"
      ></motion.img>
      <div className="uppercase">Loading...</div>
    </div>
  );
};

export default Loader;
