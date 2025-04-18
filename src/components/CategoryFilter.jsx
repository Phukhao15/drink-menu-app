import { motion } from "framer-motion";

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onSelect, 
  language, 
  categoryLabels,
  searchQuery // เพิ่ม prop นี้เพื่อรับค่าค้นหา
}) => {
  // Animation variants
  const buttonVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.03,
      y: -1,
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    },
    tap: { 
      scale: 0.97,
      transition: { 
        duration: 0.1 
      } 
    },
    selected: {
      scale: 1.03,
      boxShadow: "0 2px 4px -1px rgba(59, 130, 246, 0.2), 0 1px 2px -1px rgba(59, 130, 246, 0.1)"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  // ฟังก์ชันกรองหมวดหมู่ตามคำค้นหา
  const filteredCategories = categories.filter(cat => {
    if (!searchQuery) return true;
    const label = categoryLabels[cat][language].toLowerCase();
    return label.includes(searchQuery.toLowerCase());
  });

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-1 md:gap-2 my-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filteredCategories.length > 0 ? (
        filteredCategories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => onSelect(cat)}
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            animate={selectedCategory === cat ? "selected" : ""}
            className={`px-3 py-1.5 rounded-full border transition-colors duration-200 font-medium text-xs sm:text-sm ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            {categoryLabels[cat][language]}
          </motion.button>
        ))
      ) : (
        <motion.div 
          className="text-gray-500 py-2"
          variants={itemVariants}
        >
          {language === 'th' ? 'ไม่พบหมวดหมู่ที่ค้นหา' : 
           language === 'en' ? 'No categories found' : '未找到类别'}
        </motion.div>
      )}
    </motion.div>
  );
};

export default CategoryFilter;