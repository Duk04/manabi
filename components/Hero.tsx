"use client";

import { motion } from "framer-motion";
import { Star, Users, BookOpen, Sparkles, Target, Globe } from "lucide-react";

const Hero = () => {
  const features = [
    { icon: Target, text: "JLPT бэлтгэл", color: "sakura" },
    { icon: Globe, text: "Соёлын ойлголт", color: "matcha" },
    { icon: Users, text: "Төрөлх багш", color: "gold" },
  ];

  const japanesePhrases = [
    "こんにちは",
    "ありがとう",
    "おはよう",
    "さようなら",
    "お疲れ様",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden sakura-bg"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-sakura-50 via-white to-matcha-50"></div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 left-20 w-32 h-32 border border-sakura-300 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute top-40 right-40 w-24 h-24 border border-matcha-300 rounded-full animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        ></div>
        <div
          className="absolute bottom-40 left-40 w-40 h-40 border border-gold-300 rounded-full animate-spin"
          style={{ animationDuration: "25s" }}
        ></div>
      </div>

      {/* Mount Fuji Silhouette with Enhanced Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-fuji-400 via-fuji-300 to-transparent opacity-30"></div>

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-20 left-10"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-sakura-200 to-sakura-300 rounded-full opacity-40 shadow-lg"></div>
      </motion.div>

      <motion.div
        className="absolute top-40 right-20"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-matcha-200 to-matcha-300 rounded-full opacity-40 shadow-lg"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20"
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="w-24 h-24 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full opacity-30 shadow-lg"></div>
      </motion.div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 mb-8 shadow-xl border border-sakura-100"
            >
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-gold-500 fill-current" />
                <Star className="w-4 h-4 text-gold-500 fill-current" />
                <Star className="w-4 h-4 text-gold-500 fill-current" />
              </div>
              <span className="text-sm font-semibold text-fuji-700">
                Монгол улс даяар 500+ сурагч итгэж байна
              </span>
              <Sparkles className="w-4 h-4 text-sakura-500" />
            </motion.div>

            {/* Enhanced Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              <span className="text-fuji-800">Япон хэл</span>
              <br />
              <span className="text-gradient bg-gradient-to-r from-sakura-500 via-matcha-500 to-gold-500 bg-clip-text text-transparent">
                сурах
              </span>
              <br />
              <span className="text-fuji-800">Жинхэнэ арга заалтаар</span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-fuji-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Манай дэлгэрэнгүй япон хэл сургалтаар япон хэл сурах сайхан аялалд
              эхлээрэй. Анхлан суралцагчаас дэлгэрэнгүй мэдлэгтэй болтол, япон
              хэл, соёлын гоо үзэмжийг нээж мэдээрэй.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full bg-${feature.color}-100 border border-${feature.color}-200`}
                >
                  <feature.icon
                    className={`w-4 h-4 text-${feature.color}-600`}
                  />
                  <span
                    className={`text-sm font-medium text-${feature.color}-700`}
                  >
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              <motion.div
                className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-sakura-600 mb-1">
                  50+
                </div>
                <div className="text-sm text-fuji-600 font-medium">Хичээл</div>
              </motion.div>
              <motion.div
                className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-matcha-600 mb-1">
                  500+
                </div>
                <div className="text-sm text-fuji-600 font-medium">Сурагч</div>
              </motion.div>
              <motion.div
                className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-gold-600 mb-1">95%</div>
                <div className="text-sm text-fuji-600 font-medium">
                  Амжилтын хувь
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-sakura-100">
              {/* Japanese Phrases Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mb-8 p-4 bg-gradient-to-r from-sakura-100 to-matcha-100 rounded-2xl"
              >
                <div className="flex justify-between items-center">
                  {japanesePhrases.map((phrase, index) => (
                    <motion.span
                      key={phrase}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 + index * 0.1, duration: 0.3 }}
                      className="text-lg font-bold text-fuji-700"
                    >
                      {phrase}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Japanese Characters */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                {[
                  "あ",
                  "い",
                  "う",
                  "え",
                  "お",
                  "か",
                  "き",
                  "く",
                  "け",
                  "こ",
                  "さ",
                  "し",
                  "す",
                  "せ",
                  "そ",
                  "た",
                  "ち",
                  "つ",
                  "て",
                  "と",
                  "な",
                  "に",
                  "ぬ",
                  "ね",
                ].map((char, index) => (
                  <motion.div
                    key={char}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      delay: 1.6 + index * 0.05,
                      duration: 0.4,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-gradient-to-br from-sakura-100 to-sakura-200 rounded-xl flex items-center justify-center text-xl font-bold text-sakura-700 shadow-md hover:shadow-lg transition-all duration-300 border border-sakura-200"
                  >
                    {char}
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Course Preview */}
              <div className="bg-gradient-to-r from-matcha-50 to-sakura-50 rounded-2xl p-6 border border-matcha-200">
                <h3 className="text-lg font-semibold text-fuji-800 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-matcha-600" />
                  Япон хэлний соёл
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sakura-400 to-sakura-600 rounded-full flex items-center justify-center shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-fuji-700 text-lg">
                      Мэндчилгээний соёл
                    </p>
                    <p className="text-sm text-fuji-600">
                      Япон хэлний соёлын чухал хэсэг
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-full h-3 shadow-inner">
                  <motion.div
                    className="bg-gradient-to-r from-sakura-500 to-matcha-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ delay: 2, duration: 1 }}
                  ></motion.div>
                </div>
                <p className="text-xs text-fuji-500 mt-2">Соёлын ойлголт 75%</p>
              </div>

              {/* Enhanced Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-sakura-300 to-sakura-500 rounded-full opacity-80 shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-matcha-300 to-matcha-500 rounded-full opacity-80 shadow-lg"
                animate={{ y: [0, 10, 0], rotate: [0, -180, -360] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-sakura-400 rounded-full flex justify-center bg-white/20 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-4 bg-gradient-to-b from-sakura-400 to-sakura-600 rounded-full mt-2"
          ></motion.div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="text-xs text-fuji-600 mt-2 text-center"
        >
          Дээш гүйлгэх
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
