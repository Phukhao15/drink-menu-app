import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import drinks from "./data/drinks";
import categoryLabels from "./data/categoryLabels";
import MenuItem from "./components/MenuItem";
import Navbar from "./components/Navbar";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
const App = () => {
  const [language, setLanguage] = useState("th");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState(""); // เพิ่ม state สำหรับการค้นหา

  // ฟังก์ชันกรองสินค้าตามหมวดหมู่และคำค้นหา
  const filteredDrinks = drinks.filter((item) => {
    // กรองตามหมวดหมู่
    const categoryMatch = 
      selectedCategory === "all" || 
      item.category === selectedCategory;
    
    // กรองตามคำค้นหา (ทั้งชื่อไทย, อังกฤษ, จีน)
    const searchMatch = 
      searchQuery === "" ||
      item.name.th.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.zh.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  // Translation helper
  const translate = (th, en, zh) => {
    return language === "th" ? th : language === "en" ? en : zh;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-4 md:p-8">
      {/* Navbar */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categoryLabels={categoryLabels}
        searchQuery={searchQuery} // ส่งค่า searchQuery ไปยัง Navbar
        setSearchQuery={setSearchQuery} // ส่งฟังก์ชัน setSearchQuery ไปยัง Navbar
      />

       {/* Header */}
<motion.div className="text-center mb-16 relative overflow-hidden">
  {/* Background decoration */}
  <motion.div
    className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-orange-100 opacity-20"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.3 }}
  />
  
  {/* ชื่อร้าน */}
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="relative"
  >

    <motion.div
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-amber-400 rounded-full"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    />
  </motion.div>

  {/* หัวข้อเมนู */}
  <motion.h2
    className="text-3xl font-light text-blue-900 mt-8 tracking-widest"
    initial={{ letterSpacing: '0em', opacity: 0 }}
    animate={{ letterSpacing: '0.2em', opacity: 1 }}
    transition={{ delay: 0.7, duration: 1 }}
  >
    {translate("เมนูเครื่องดื่ม", "DRINK MENU", "饮品菜单")}
  </motion.h2>
</motion.div>

        {/* Drink Menu */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
        >
        <AnimatePresence mode="popLayout">
          {filteredDrinks.map((item) => (
            <motion.div
              key={item.id}
              variants={item}
              layout
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              className="flex justify-center"
            >
              <MenuItem
                name={item.name}
                image={item.image}
                price={item.price}
                lang={language}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredDrinks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 my-8"
        >
          <div className="bg-blue-50 mx-auto max-w-md p-8 rounded-xl shadow-sm border border-blue-100">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
              className="text-4xl mb-4"
            >
              🥤
            </motion.div>
            <p className="text-gray-500 text-xl font-medium">
              {translate(
                "ไม่พบเครื่องดื่มที่ค้นหา",
                "No drinks found",
                "没有找到饮品"
              )}
            </p>
          </div>
        </motion.div>
      )}
      
      <LocationSection />
      <Footer />
    </div>
  );
};

export default App;