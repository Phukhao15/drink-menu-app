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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDrinks = drinks.filter((item) => {
    const categoryMatch = 
      selectedCategory === "all" || 
      item.category === selectedCategory;
    
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

  const translate = (th, en, zh) => {
    return language === "th" ? th : language === "en" ? en : zh;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white p-4 md:p-8">
      {/* Navbar */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categoryLabels={categoryLabels}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Header */}
      <motion.div className="text-center mb-16 relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-r from-amber-200 to-orange-200 opacity-20 blur-xl"
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
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* หัวข้อเมนู */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mt-8 tracking-widest"
          initial={{ letterSpacing: '0em', opacity: 0 }}
          animate={{ letterSpacing: '0.2em', opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {translate("เมนูเครื่องดื่ม", "DRINK MENU", "饮品菜单")}
        </motion.h2>
        
        {/* คำอธิบายย่อย
        <motion.p 
          className="mt-4 text-amber-700/80 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          {translate("เครื่องดื่มรสเลิศจากธรรมชาติ", "Premium natural beverages", "天然优质饮品")}
        </motion.p> */}
      </motion.div>

      {/* Drink Menu */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8"
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
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 mx-auto max-w-md p-8 rounded-xl shadow-sm border border-amber-100">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
              className="text-5xl mb-4 text-amber-400"
            >
              🥤
            </motion.div>
            <p className="text-amber-800/80 text-xl font-medium">
              {translate(
                "ไม่พบเครื่องดื่มที่ค้นหา",
                "No drinks found",
                "没有找到饮品"
              )}
            </p>
            <p className="text-amber-600/60 mt-2">
              {translate(
                "ลองค้นหาด้วยคำอื่นดูนะคะ",
                "Try another search term",
                "请尝试其他搜索词"
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