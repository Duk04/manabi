"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    courses: [
      { name: "N5 - Эхлэгч", href: "#courses" },
      { name: "N4 - Анхан шат", href: "#courses" },
      { name: "N3 - Дунд шат", href: "#courses" },
      { name: "N2 - Дээд дунд шат", href: "#courses" },
      { name: "N1 - Дээд шат", href: "#courses" },
    ],
    resources: [
      { name: "Нийтлэл", href: "#blog" },
      { name: "Сурах зөвлөгөө", href: "#blog" },
      { name: "Дүрмийн заавар", href: "#blog" },
      { name: "Үгийн жагсаалт", href: "#blog" },
      { name: "Соёлын мэдлэг", href: "#blog" },
    ],
    support: [
      { name: "Бидэнтэй холбогдох", href: "#contact" },
      { name: "Түгээмэл асуулт", href: "#contact" },
      { name: "Сурагчдын дэмжлэг", href: "#contact" },
      { name: "Техникийн тусламж", href: "#contact" },
      { name: "Санал хүсэлт", href: "#contact" },
    ],
    company: [
      { name: "Бидний тухай", href: "#about" },
      { name: "Манай багш нар", href: "#about" },
      { name: "Амжилтын түүхүүд", href: "#testimonials" },
      { name: "Нууцлалын бодлого", href: "#" },
      { name: "Үйлчилгээний нөхцөл", href: "#" },
    ],
  };

  return (
    <footer className="bg-fuji-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sakura-500 to-matcha-500"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-sakura-400 to-sakura-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ま</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-sakura-400 to-matcha-400 bg-clip-text text-transparent">
                    Miraya
                  </span>
                </div>
                <p className="text-fuji-300 leading-relaxed mb-6">
                  Монголын өнцөг булан бүрээс ирсэн сурагчдад япон хэл сурах
                  боломжийг олгож, төрөлх хэлтэй багш нар боловсруулсан
                  дэлгэрэнгүй хэлний сургалтаар хүчирхэгжүүлнэ.
                </p>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              ></motion.div>
            </div>

            {/* Links Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Хичээлүүд</h4>
              <ul className="space-y-2">
                {footerLinks.courses.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-fuji-300 hover:text-sakura-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Нөөц</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-fuji-300 hover:text-matcha-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4">Дэмжлэг</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-fuji-300 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-fuji-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 text-fuji-400"
            >
              <span>© 2024 Miraya. Япон хэл сургах</span>
              <Heart className="w-4 h-4 text-sakura-500 fill-current" />
              <span>хүсэлтэй</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-6"
            >
              <a
                href="#"
                className="text-fuji-400 hover:text-sakura-400 transition-colors duration-200"
              >
                Үйлчилгээний нөхцөл
              </a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-sakura-500 to-sakura-600 rounded-full flex items-center justify-center hover:from-sakura-600 hover:to-sakura-700 transition-all duration-300"
                aria-label="Дээш гүйлгэх"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-sakura-500/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-16 h-16 bg-matcha-500/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-gold-500/10 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
    </footer>
  );
};

export default Footer;
