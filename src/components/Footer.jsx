import { motion } from "framer-motion";

function Footer() {  // เอาพารามิเตอร์ language ออก
  return (
    <div className="bg-white/90 backdrop-blur">
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-center text-gray-500 text-sm py-6 px-4 border-t border-gray-200"
      >
        <div className="max-w-6xl mx-auto">
          <p className="mb-2">
            © {new Date().getFullYear()} ป้าญาชาชัก - เครื่องดื่มอร่อยทุกแก้ว
          </p>
          <p className="text-xs text-gray-400">
            สร้างด้วยความรักจากป้าญา
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default Footer;