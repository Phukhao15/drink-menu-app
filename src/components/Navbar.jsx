import { motion } from "framer-motion";
import { FiSearch, FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
const Navbar = ({
  language,
  setLanguage,
  selectedCategory,
  setSelectedCategory,
  categoryLabels,
  searchQuery,
  setSearchQuery
}) => {
  const categories = ["all", "tea", "coffee", "soda", "fruits"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const translate = (th, en, zh) => {
    return language === "th" ? th : language === "en" ? en : zh;
  };

  return (
    <motion.nav
      className="bg-white/95 shadow-sm w-full px-4 py-3 flex flex-col gap-3 sticky top-0 z-50 backdrop-blur-lg border-b border-amber-100"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* แถวแรก: Logo, Menu Button และ Search */}
      <div className="flex items-center justify-between gap-4 w-full">
        {/* Logo และ Menu Button (Mobile) */}
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-amber-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <IoClose size={24} /> : <FiMenu size={24} />}
          </button>
          
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="ร้านป้าญา"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {translate("ป้าญา", "Paa Yaa", "雅阿姨")}
            </span>
          </div>
        </div>

        {/* Search Bar (แสดงบน desktop เท่านั้น) */}
        <div className="hidden md:block relative flex-1 max-w-xl mx-4">
          <input
            type="text"
            placeholder={translate("ค้นหาเครื่องดื่ม...", "Search drinks...", "搜索饮品...")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-amber-50/50 text-amber-900 placeholder-amber-400"
          />
          <FiSearch className="absolute left-3 top-3 text-amber-400" />
        </div>

        {/* Language Switcher */}
        <div className="flex gap-2">
          {["th", "en", "zh"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`w-9 h-9 rounded-full text-sm font-bold transition-all border ${
                language === lang
                  ? "bg-gradient-to-br from-amber-500 to-orange-500 text-white border-transparent shadow-md"
                  : "bg-white text-amber-700 hover:bg-amber-50 border-amber-200"
              }`}
            >
              {lang === "th" ? "ไทย" : lang === "en" ? "EN" : "中文"}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Search (แสดงเมื่อเมนูเปิด) */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <input
            type="text"
            placeholder={translate("ค้นหา...", "Search...", "搜索...")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/80 text-amber-900 placeholder-amber-400"
          />
          <FiSearch className="absolute left-3 top-3 text-amber-400" />
        </motion.div>
      )}

      {/* Category Tabs */}
      <motion.div 
        className={`flex flex-wrap justify-center gap-2 ${mobileMenuOpen ? 'block' : 'hidden md:flex'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : [0, 1],
          height: mobileMenuOpen ? 'auto' : [0, 'auto']
        }}
        transition={{ duration: 0.3 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setMobileMenuOpen(false);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md"
                : "bg-amber-100 text-amber-700 hover:bg-amber-200"
            }`}
          >
            {translate(
              categoryLabels[cat]?.th,
              categoryLabels[cat]?.en,
              categoryLabels[cat]?.zh
            )}
          </button>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;