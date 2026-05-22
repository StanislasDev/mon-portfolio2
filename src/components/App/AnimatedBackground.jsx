import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const colors = ["bg-cyan-400", "bg-purple-400", "bg-yellow-400", "bg-pink-400", "bg-blue-400"];
  const sizes = ["w-1 h-1", "w-2 h-2", "w-3 h-3"];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {Array.from({ length: 40 }, (_, i) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const delay = Math.random() * 5;
        const duration = 3 + Math.random() * 4;

        return (
          <motion.div
            key={i}
            className={`absolute ${size} ${color} rounded-full opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBackground;