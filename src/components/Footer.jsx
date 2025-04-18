import { motion } from "framer-motion";

function Footer({ language }) {
  const translate = (th, en, zh) => {
    return language === "th" ? th : language === "en" ? en : zh;
  };

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
            © {new Date().getFullYear()} {translate("ป้าญาชาชัก", "Paa Ya Cha Chak", "雅茶店")} -{" "}
            {translate(
              "เครื่องดื่มอร่อยทุกแก้ว",
              "Delicious drinks in every cup",
              "每杯都美味的饮品"
            )}
          </p>
          <p className="text-xs text-gray-400">
            {translate(
              "สร้างด้วยความรักจากป้าญา",
              "Made with love by Paa Ya",
              "由雅阿姨用爱制作"
            )}
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default Footer;