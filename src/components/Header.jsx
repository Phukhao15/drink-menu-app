import { motion } from "framer-motion";

const Header = ({ language, translate }) => {
  return (
    <motion.div className="text-center mb-16 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-br from-amber-100/40 to-orange-100/30 blur-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
      />
      
      <motion.div
        className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br from-blue-100/30 to-cyan-100/20 blur-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
      />

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative py-8"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent"
          initial={{ letterSpacing: "0.5em" }}
          animate={{ letterSpacing: "0.1em" }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {translate("ป้าญา", "PA'YA", "雅阿姨")}
        </motion.h1>
        
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        />
      </motion.div>

      {/* Menu Title Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="mb-8"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          {translate("เมนูเครื่องดื่ม", "DRINK MENU", "饮品菜单")}
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          {translate(
            "เครื่องดื่มสูตรพิเศษจากวัตถุดิบคุณภาพ พร้อมเสิร์ฟความอร่อยถึงมือคุณ",
            "Specialty drinks made from premium ingredients, delivering deliciousness to you",
            "采用优质原料制成的特色饮品，为您带来美味体验"
          )}
        </motion.p>
      </motion.div>

      {/* Decorative Divider */}
      <motion.div
        className="mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
    </motion.div>
  );
};

export default Header;