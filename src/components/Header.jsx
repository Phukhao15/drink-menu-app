import { motion } from "framer-motion";

const Header = ({ language, translate }) => {
  return (
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
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600 font-serif mb-2">
          ป้าญา
        </h1>
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
  );
};

export default Header;