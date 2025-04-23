import { motion } from "framer-motion";

const MenuItem = ({ name, image, price, lang }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.04,
      y: -6,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.97,
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.08,
      transition: { duration: 0.3 },
    },
  };

  const priceVariants = {
    hover: {
      scale: 1.1,
      color: "#EA580C", // ส้มอ่อน
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
      className="bg-[#FFFDF6] rounded-3xl border-[3px] border-[#166534] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer flex flex-col"
    >
      <div className="w-full h-48 bg-[#064E3B] flex items-center justify-center overflow-hidden">
        <motion.img
          src={image}
          alt={name[lang]}
          variants={imageVariants}
          className="h-full object-contain p-4"
          style={{ maxWidth: "100%", maxHeight: "100%", width: "auto" }}
        />
      </div>

      <div className="p-4 text-center flex-grow flex flex-col bg-[#FFFDF6]">
        <motion.h3
          className="text-lg font-bold text-[#B45309] mb-1"
          whileHover={{ color: "#BE123C" }}
        >
          {name[lang]}
        </motion.h3>
        <motion.p
          className="text-base font-bold text-[#3B82F6]"
          variants={priceVariants}
          whileHover="hover"
        >
          {price}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default MenuItem;
