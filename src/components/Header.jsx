import { motion } from "framer-motion";

const Header = ({ language, translate }) => {
  return (
    <motion.div className="text-center mb-16 relative overflow-hidden">
      {/* Background decoration - วงกลมสีส้ม */}
      <motion.div
        className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-orange-100 opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      />
      
      {/* Background decoration - วงกลมสีฟ้า */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-blue-100 opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      />

      {/* หัวข้อหลัก */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative py-8"
      >
        เส้นใต้ข้อความ
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>

      {/* หัวข้อเมนู */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-medium text-gray-800 mb-2"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {translate("เมนูเครื่องดื่ม", "DRINK MENU", "饮品菜单")}
        </motion.h2>
        
        <motion.p
          className="text-lg text-gray-500 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          {translate(
            "เครื่องดื่มสูตรพิเศษจากวัตถุดิบคุณภาพ",
            "Special drinks made from quality ingredients",
            "用优质原料制成的特色饮品"
          )}
        </motion.p>
      </motion.div>

      {/* เส้นคั่น */}
      <motion.div
        className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-blue-100 via-amber-300 to-blue-100 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
    </motion.div>
  );
};

export default Header;