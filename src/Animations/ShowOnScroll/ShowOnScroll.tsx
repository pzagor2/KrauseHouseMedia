import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ShowOnScrollProps {
  children: React.ReactNode;
}

export default function ShowOnScroll({ children }: ShowOnScrollProps) {
  const [shouldShow, setShouldShow] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    const layout = document.getElementById("layout");
    const handleScroll = () => {
      const currentYPos = layout?.scrollTop ?? 0;
      const isScrollingDown = currentYPos > lastYPos;

      setLastYPos(currentYPos);
      setShouldShow(isScrollingDown);
    };

    layout && layout.addEventListener("scroll", handleScroll, false);
    return () => {
      layout && layout.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <motion.div
      animate={{
        opacity: shouldShow ? 1 : 0,
        visibility: shouldShow ? "visible" : "hidden",
      }}
      initial={{ opacity: 0, visibility: "hidden" }}
      transition={{ opacity: { duration: 0.5 } }}
    >
      {children}
    </motion.div>
  );
}
