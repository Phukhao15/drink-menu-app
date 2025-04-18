import { motion } from "framer-motion";

const LocationSection = () => {
  return (
    <section className="mt-16 max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        📍 ที่ตั้งร้าน / Location
      </motion.h2>

      {/* รูปหน้าร้าน */}
      <motion.div 
        className="w-full mb-6 overflow-hidden rounded-2xl shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img 
          src="/images/shopfront.png" 
          alt="หน้าร้านป้าญาชาชัก" 
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* แผนที่ */}
      <motion.div
        className="aspect-w-16 aspect-h-9 rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <iframe
          title="ร้านป้าญาชาชัก บน Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5288517135155!2d100.5772845793457!3d13.746950599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f984b01cfd1%3A0x314e23593cd865d2!2z4Lib4LmJ4Liy4Lii4Liy4LiB4Liy4LmB4Lif4LmC4Lia4Lij4Liy4LiT!5e0!3m2!1sth!2sth!4v1744959500266!5m2!1sth!2sth" // 👈 ใส่ลิงก์ของคุณตรงนี้
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default LocationSection;
