import { motion } from "framer-motion";

const MenuItem = ({ name, image, price, lang }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      rotate: "-1deg"
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6
      }
    }
  };

  const priceVariants = {
    hover: {
      scale: 1.1,
      color: "#3B82F6",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden cursor-pointer"
      style={{ willChange: 'transform' }}
    >
      <motion.div 
        className="overflow-hidden"
        whileHover="hover"
      >
        <motion.img
          src={image}
          alt={name[lang]}
          variants={imageVariants}
          className="w-full h-48 object-contain object-center bg-green-800 p-4"
          style={{ transformOrigin: 'center center' }}
        />
      </motion.div>
      
      <motion.div 
        className="p-4 text-center"
        variants={textVariants}
      >
        <motion.h3 
          className="text-xl font-bold text-gray-800 mb-2"
          whileHover={{ color: "#1E40AF" }}
        >
          {name[lang]}
        </motion.h3>
        <motion.p 
          className="text-blue-500 font-bold text-lg"
          variants={priceVariants}
          whileHover="hover"
        >
          {price}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default MenuItem;