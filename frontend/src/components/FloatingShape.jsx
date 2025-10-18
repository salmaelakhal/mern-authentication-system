import { motion } from "framer-motion";

const FloatingShape = ({ 
  color, 
  size, 
  top, 
  left, 
  delay, 
  duration = 25,
  blur = "blur-lg",
  type = "hologram"
}) => {
  // Animations différentes selon le type
  const getAnimation = (type) => {
    switch(type) {
      case 'digital':
        return {
          y: ["0%", "-30%", "20%", "-25%", "0%"],
          x: ["0%", "25%", "-15%", "30%", "0%"],
          scale: [1, 1.2, 0.8, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.3, 0.6, 0.2, 0.8, 0.3]
        };
      case 'matrix':
        return {
          y: ["0%", "-40%", "10%", "-20%", "0%"],
          x: ["0%", "20%", "-25%", "15%", "0%"],
          scale: [1, 1.3, 0.7, 1.2, 1],
          rotate: [0, 120, 240, 360, 0],
          opacity: [0.4, 0.1, 0.7, 0.2, 0.4]
        };
      case 'binary':
        return {
          y: ["0%", "-15%", "25%", "-10%", "0%"],
          x: ["0%", "15%", "-20%", "10%", "0%"],
          scale: [1, 1.1, 0.9, 1.05, 1],
          rotate: [0, 180, 360, 180, 0],
          opacity: [0.5, 0.2, 0.8, 0.3, 0.5]
        };
      default: // hologram
        return {
          y: ["0%", "-25%", "15%", "-30%", "0%"],
          x: ["0%", "30%", "-20%", "25%", "0%"],
          scale: [1, 1.15, 0.85, 1.25, 1],
          rotate: [0, 180, 360, 540, 720],
          opacity: [0.3, 0.7, 0.2, 0.9, 0.3]
        };
    }
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-r ${color} ${size} ${blur} opacity-30`}
      style={{ top, left }}
      animate={getAnimation(type)}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay,
        repeatType: "loop"
      }}
      aria-hidden="true"
    />
  );
};

export default FloatingShape;