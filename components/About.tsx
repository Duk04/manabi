"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, Globe, Heart, BookOpen } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: GraduationCap,
      title: "Сертификаттай багш",
      description: "Мэргэжлийн япон хэлтэй багш 10+ жилийн заах туршлагатай",
    },
    {
      icon: Award,
      title: "JLPT бэлтгэл",
      description: "Бүх JLPT түвшний (N5-N3) дэлгэрэнгүй бэлтгэл",
    },
    {
      icon: Globe,
      title: "Соёлын хослуулалт",
      description: "Зөвхөн хэл биш, жинхэнэ япон соёлыг сурах",
    },
    {
      icon: Heart,
      title: "Хувийн сургалт",
      description: "Таны сурах хурдад тохируулсан уян хатан сургалтын хөтөлбөр",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding fuji-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sakura-100 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-matcha-100 rounded-full opacity-20 translate-y-32 -translate-x-32"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-sakura-100 rounded-full px-4 py-2 mb-6"
            >
              <BookOpen className="w-4 h-4 text-sakura-600" />
              <span className="text-sm font-medium text-sakura-700">
                Манай сургалтын тухай
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-fuji-800 mb-6"
            >
              Япон хэлийг
              <span className="text-gradient block">Хүсэл & Мэргэжлээр</span>
              сурах
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-fuji-600 mb-8 leading-relaxed"
            >
              Манай япон хэлний сургалт нь таныг бүрэн анхлан суралцагчаас
              дэлгэрэнгүй мэдлэгтэй болтол хөтлөхөөр зохион байгуулагдсан.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sakura-400 to-sakura-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fuji-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-fuji-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Teacher Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
              {/* Teacher Image Placeholder */}
              <div className="w-full h-80 bg-gradient-to-br from-sakura-100 to-matcha-100 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sakura-200/30 to-matcha-200/30"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-sakura-400 to-sakura-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">田中</span>
                  </div>
                  <h3 className="text-2xl font-bold text-fuji-800 mb-2">
                    Отгонцэцэг
                  </h3>
                  <p className="text-fuji-600">Мэргэжлийн япон хэлтэй багш</p>
                </div>
              </div>

              {/* Teacher Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-sakura-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-sakura-600">10+</div>
                  <div className="text-sm text-sakura-700">Жил заасан</div>
                </div>
                <div className="bg-matcha-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-matcha-600">500+</div>
                  <div className="text-sm text-matcha-700">
                    Сурагчдад заасан
                  </div>
                </div>
              </div>

              {/* Teacher Bio */}
              <div className="bg-gradient-to-r from-fuji-50 to-sakura-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-fuji-800 mb-3">
                  Багшийн тухай
                </h4>
                <p className="text-fuji-600 text-sm leading-relaxed">
                  Отгонцэцэг багш нь Монголын өнцөг булан бүрээс зорин ирсэн
                  сурагчдад 10 гаруй жил япон хэл заасан мэргэжлийн япон хэлний
                  багш юм.
                </p>
              </div>

              {/* Certifications */}
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2 bg-gold-50 rounded-full px-3 py-1">
                  <Award className="w-4 h-4 text-gold-600" />
                  <span className="text-sm font-medium text-gold-700">
                    JLPT сертификаттай
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-sakura-50 rounded-full px-3 py-1">
                  <GraduationCap className="w-4 h-4 text-sakura-600" />
                  <span className="text-sm font-medium text-sakura-700">
                    Хэл шинжлэлийн магистр
                  </span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-sakura-300 rounded-full opacity-60 animate-float"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-matcha-300 rounded-full opacity-60 animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-sakura-600 mb-2">50+</div>
            <div className="text-fuji-600">Хичээл</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-matcha-600 mb-2">50+</div>
            <div className="text-fuji-600">Дүрмийн цэг</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-600 mb-2">500+</div>
            <div className="text-fuji-600">Үгсийн сан</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
