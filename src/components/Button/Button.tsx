import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <motion.button
      className={`bg-purple text-white cursor-pointer bg-opacity-20 hover:bg-opacity-30 transition rounded-md px-4 py-3 flex items-center gap-x-2 shadow ${className}`}
      whileHover={{
        scale: 1.1,
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
