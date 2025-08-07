"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Сара Жонсон",
      country: "АНУ",
      level: "N3",
      rating: 5,
      text: "Манабии миний япон хэл сурах аялалыг өөрчилсөн. Зохион байгуулагдсан арга, соёлын ойлголт бүх зүйлийг ойлгомжтой болгосон. Би юу ч мэдэхгүй байснаас 6 сарын дотор итгэлтэй яриа хийх болсон!",
      avatar: "СЖ",
      progress: "N4-ийг давж, N3-т суралцаж байна",
    },
    {
      name: "Алекс Чен",
      country: "Канад",
      level: "N2",
      rating: 5,
      text: "Заахын чанар гайхалтай. Танака Сэнсэйгийн заах арга нь маш үр дүнтэй тул би анхны оролдлогодоо N3-ийг давж чадсан. Соёлын контекст ойлгоход үнэхээр тустай.",
      avatar: "АЧ",
      progress: "N3-ийг давж, N2-т суралцаж байна",
    },
    {
      name: "Мария Родригес",
      country: "Испани",
      level: "N4",
      rating: 5,
      text: "Сургалт хэл сурах, соёлын ойлголтыг хослуулсан нь миний таалагддаг. Интерактив хичээл, бодит жишээнүүд япон хэлийг хүртээмжтэй, сурах сонирхолтой болгодог.",
      avatar: "МР",
      progress: "N5-ийг давж, N4-т суралцаж байна",
    },
    {
      name: "Дэвид Ким",
      country: "Өмнөд Солонгос",
      level: "N1",
      rating: 5,
      text: "Олон жил япон хэлтэй тэмцэж байсан хүн болохын хувьд Манабиигийн системтэй арга эцэст нь надад тусалсан. Дэлгэрэнгүй дүрмийн тайлбарууд тун тодорхой.",
      avatar: "ДК",
      progress: "N2-ийг давж, N1-т суралцаж байна",
    },
    {
      name: "Эмма Уилсон",
      country: "Австрали",
      level: "N5",
      rating: 5,
      text: "Анхлан суралцагчдад төгс! Хирагана, катакана хичээлүүд маш сайн зохион байгуулагдсан. Би одоо энгийн япон хэл уншиж, сурах замаа итгэлтэй байна.",
      avatar: "ЭУ",
      progress: "N5-ийг дуусгаж, N4-т эхлэж байна",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-padding sakura-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-matcha-100 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-100 rounded-full opacity-20 translate-y-32 -translate-x-32"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-sakura-100 rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4 text-sakura-600 fill-current" />
            <span className="text-sm font-medium text-sakura-700">
              Сурагчдын амжилт
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-fuji-800 mb-6"
          >
            Манай сурагчид
            <span className="text-gradient block">
              Бидний тухай юу гэж хэлдэг
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-fuji-600 max-w-3xl mx-auto"
          >
            Манай батлагдсан заах арга, дэлгэрэнгүй сургалтын хөтөлбөрөөр япон
            хэлний ур чадвараа өөрчилсөн мянга мянган амжилттай суралцагчдад
            нэгдээрэй.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-sakura-200">
              <Quote className="w-12 h-12" />
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-fuji-700 leading-relaxed mb-8 italic"
            >
              "{testimonials[currentIndex].text}"
            </motion.p>

            {/* Student Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-sakura-400 to-sakura-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-fuji-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-fuji-600">
                    {testimonials[currentIndex].country}
                  </p>
                  <p className="text-sm text-sakura-600 font-medium">
                    {testimonials[currentIndex].progress}
                  </p>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-sakura-100 rounded-full px-4 py-2">
                  <span className="text-sakura-700 font-semibold">
                    {testimonials[currentIndex].level}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-sakura-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-sakura-600" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-sakura-500" : "bg-sakura-200"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-sakura-50 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-sakura-600" />
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="grid md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-sakura-600 mb-2">98%</div>
            <div className="text-fuji-600">Сэтгэл ханамжийн хувь</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-matcha-600 mb-2">95%</div>
            <div className="text-fuji-600">Давж гарах хувь</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-600 mb-2">4.9/5</div>
            <div className="text-fuji-600">Дундаж үнэлгээ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-fuji-600 mb-2">100+</div>
            <div className="text-fuji-600">Сэтгэл ханамжтай сурагч</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
