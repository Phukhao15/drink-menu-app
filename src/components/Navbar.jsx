import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi"; // ต้องติดตั้ง react-icons ก่อน

const Navbar = ({
  language,
  setLanguage,
  selectedCategory,
  setSelectedCategory,
  categoryLabels,
  searchQuery,
  setSearchQuery
}) => {
  const categories = ["all", "tea", "coffee", "soda", "milk", "fruits"];

  const translate = (th, en, zh) => {
    return language === "th" ? th : language === "en" ? en : zh;
  };

  return (
    <motion.nav
      className="bg-white/90 shadow-sm w-full px-4 py-3 flex flex-col gap-3 sticky top-0 z-50 backdrop-blur border-b border-gray-200"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ margin: 0 }}
    >
      {/* แถวแรก: Logo และ Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="ร้านป้าญา"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold text-orange-500 hidden sm:block">
            {translate("ป้าญา", "Paa Yaa || Aunt Yaa", "Paa Yaa || Aunt Yaa")}
          </span>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder={translate("ค้นหา...", "Search...", "搜索...")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        {/* Language Switcher */}
        <div className="flex justify-center md:justify-end gap-2">
          {["th", "en", "zh"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`w-9 h-9 rounded-full text-sm font-bold transition-all border ${
                language === lang
                  ? "bg-blue-600 text-white border-blue-600 shadow"
                  : "bg-white text-gray-600 hover:bg-gray-100 border-gray-300"
              }`}
            >
              {lang === "th" ? "TH" : lang === "en" ? "EN" : "中"}
            </button>
          ))}
        </div>
      </div>

      {/* แถวสอง: Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedCategory === cat
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {translate(
              categoryLabels[cat]?.th,
              categoryLabels[cat]?.en,
              categoryLabels[cat]?.zh
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;