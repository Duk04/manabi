"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  BookOpen,
  Clock,
  ArrowRight,
  CheckCircle,
  StarIcon,
  X,
  Calendar,
  Target,
  Award,
  Globe,
  FileText,
  Headphones,
  Users as UsersIcon,
} from "lucide-react";

const Courses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    {
      level: "N5",
      title: "Анхлан суралцагч",
      description:
        "Энгийн мэндчилгээ, хирагана, катакана, үндсэн дүрмээр аялалдаа эхлээрэй",
      duration: "8 долоо хоног",
      price: "150,000₮",
      features: [
        "Хирагана & Катакана",
        "Энгийн мэндчилгээ",
        "Энгийн дүрэм",
        "100+ үгсийн сан",
        "Соёлын тэмдэглэл",
      ],
      color: "sakura",
      characters: ["あ", "い", "う", "え", "お"],
      detailedInfo: {
        overview:
          "N5 түвшин нь япон хэл сурах эхлэл юм. Энэ түвшинд та хирагана, катакана, энгийн дүрмүүдийг сурна.",
        curriculum: [
          "Хирагана (46 үсэг)",
          "Катакана (46 үсэг)",
          "Энгийн мэндчилгээ",
          "Тоо, огноо",
          "Энгийн өгүүлбэр",
          "Үндсэн дүрмүүд",
        ],
        learningOutcomes: [
          "Хирагана, катакана уншиж бичих",
          "Энгийн япон хэл ярих",
          "Өөрийгөө танилцуулах",
          "Энгийн асуулт асуух",
          "Тоо, огноо хэлэх",
        ],
        materials: [
          "N5 сурах бичиг",
          "Дасгал хийх дэвтэр",
          "Аудио файлууд",
          "Онлайн дасгал",
          "Туршилтын асуултууд",
        ],
        schedule: "Даваа, Мягмар, Лхагва, Пүрэв, Баасан - 18:00-20:00",
        instructor: "Танака Сэнсэй",
        students: "15-20 хүн",
        certificate: "N5 түвшний гэрчилгээ",
      },
    },
    {
      level: "N4",
      title: "Дунд түвшин",
      description:
        "Үндсэн мэдлэг дээрээ канжи, илүү төвөгтэй дүрэм, өдөр тутмын яриа",
      duration: "12 долоо хоног",
      price: "150,000₮",
      features: [
        "300 Канжи",
        "Дунд түвшний дүрэм",
        "Өдөр тутмын яриа",
        "200+ үгсийн сан",
        "Уншлага дадлага",
      ],
      color: "matcha",
      characters: ["漢", "字", "学", "習", "中"],
      detailedInfo: {
        overview:
          "N4 түвшин нь N5-ийн үргэлжлэл бөгөөд илүү төвөгтэй дүрмүүд, канжи үсгийг сурна.",
        curriculum: [
          "300 канжи үсэг",
          "Дунд түвшний дүрэм",
          "Өдөр тутмын яриа",
          "Төвөгтэй өгүүлбэр",
          "Уншлага дадлага",
          "Бичих дадлага",
        ],
        learningOutcomes: [
          "300 канжи уншиж бичих",
          "Өдөр тутмын яриа хийх",
          "Төвөгтэй өгүүлбэр бүтээх",
          "Япон хэл унших",
          "Бичих урлаг эзэмших",
        ],
        materials: [
          "N4 сурах бичиг",
          "Канжи дасгал дэвтэр",
          "Аудио файлууд",
          "Уншлага материал",
          "Туршилтын асуултууд",
        ],
        schedule: "Даваа, Мягмар, Лхагва, Пүрэв, Баасан - 19:00-21:00",
        instructor: "Сато Сэнсэй",
        students: "12-18 хүн",
        certificate: "N4 түвшний гэрчилгээ",
      },
    },
    {
      level: "N3",
      title: "Дунд түвшин",
      description:
        "Дунд түвшний дүрэм, бизнес япон хэл, соёлын нюансыг эзэмших",
      duration: "16 долоо хоног",

      price: "150,000₮",
      features: [
        "600 Канжи",
        "Бизнес япон хэл",
        "Дэлгэрэнгүй дүрэм",
        "500+ үгсийн сан",
        "Бичих урлаг",
      ],
      color: "gold",
      characters: ["商", "業", "日", "本", "語"],
    },
    {
      level: "N2",
      title: "Дээд дунд түвшин",
      description: "Дэлгэрэнгүй дүрэм, академик япон хэл, мэргэжлийн харилцаа",
      duration: "20 долоо хоног",

      price: "150,000₮",
      features: [
        "1000 Канжи",
        "Академик япон хэл",
        "Төвөгтэй дүрэм",
        "800+ үгсийн сан",
        "Мэдээ уншлага",
      ],
      color: "fuji",
      characters: ["新", "聞", "読", "解", "力"],
    },
    {
      level: "N1",
      title: "Дэлгэрэнгүй түвшин",
      description:
        "Академик болон мэргэжлийн амжилтын дэлгэрэнгүй түвшний япон хэл",
      duration: "24 долоо хоног",

      price: "150,000₮",
      features: [
        "2000+ Канжи",
        "Уран зохиол",
        "Дэлгэрэнгүй бичих",
        "1000+ үгсийн сан",
        "Дипломын ажил",
      ],
      color: "sakura",
      characters: ["文", "学", "研", "究", "院"],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      sakura: {
        bg: "from-sakura-50 to-sakura-100",
        text: "text-sakura-700",
        border: "border-sakura-200",
        button: "bg-sakura-500 hover:bg-sakura-600",
        icon: "text-sakura-600",
      },
      matcha: {
        bg: "from-matcha-50 to-matcha-100",
        text: "text-matcha-700",
        border: "border-matcha-200",
        button: "bg-matcha-500 hover:bg-matcha-600",
        icon: "text-matcha-600",
      },
      gold: {
        bg: "from-gold-50 to-gold-100",
        text: "text-gold-700",
        border: "border-gold-200",
        button: "bg-gold-500 hover:bg-gold-600",
        icon: "text-gold-600",
      },
      fuji: {
        bg: "from-fuji-50 to-fuji-100",
        text: "text-fuji-700",
        border: "border-fuji-200",
        button: "bg-fuji-500 hover:bg-fuji-600",
        icon: "text-fuji-600",
      },
    };
    return colors[color as keyof typeof colors] || colors.sakura;
  };

  return (
    <section
      id="courses"
      ref={ref}
      className="section-padding matcha-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sakura-100 rounded-full opacity-20 -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-100 rounded-full opacity-20 translate-y-32 translate-x-32"></div>

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
            className="inline-flex items-center space-x-2 bg-matcha-100 rounded-full px-4 py-2 mb-6"
          >
            <BookOpen className="w-4 h-4 text-matcha-600" />
            <span className="text-sm font-medium text-matcha-700">
              Манай хичээлүүд
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-fuji-800 mb-6"
          >
            Япон
            <span className="text-gradient block">хэлний түвшингүүд</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-fuji-600 max-w-3xl mx-auto"
          >
            Бүрэн анхлан суралцагчаас дэлгэрэнгүй мэдлэгтэй болтол, манай зохион
            байгуулагдсан хичээлүүд таныг япон хэлийг эзэмших бүх түвшингээр
            жинхэнэ агуулга, батлагдсан аргуудаар хөтлөнө.
          </motion.p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const colors = getColorClasses(course.color);
            return (
              <motion.div
                key={course.level}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className={`bg-white rounded-3xl p-8 shadow-xl card-hover border ${colors.border} relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.bg} rounded-full opacity-20 -translate-y-16 translate-x-16`}
                ></div>

                {/* Level Badge */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-2xl mb-6 relative z-10`}
                >
                  <span className={`text-2xl font-bold ${colors.text}`}>
                    {course.level}
                  </span>
                </div>

                {/* Japanese Characters */}
                <div className="flex space-x-2 mb-6">
                  {course.characters.map((char, charIndex) => (
                    <motion.div
                      key={charIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: 1.2 + index * 0.1 + charIndex * 0.1,
                        duration: 0.3,
                      }}
                      className={`w-10 h-10 bg-gradient-to-br ${colors.bg} rounded-lg flex items-center justify-center text-lg font-bold ${colors.text}`}
                    >
                      {char}
                    </motion.div>
                  ))}
                </div>

                {/* Course Info */}
                <h3 className="text-xl font-bold text-fuji-800 mb-3">
                  {course.title}
                </h3>
                <p className="text-fuji-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className={`w-4 h-4 ${colors.icon}`} />
                      <span className="text-sm text-fuji-600">
                        {course.duration}
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-fuji-800">
                    {course.price}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {course.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 1.5 + index * 0.1 + featureIndex * 0.05,
                        duration: 0.3,
                      }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className={`w-5 h-5 ${colors.icon}`} />
                      <span className="text-sm text-fuji-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedCourse(course);
                    setIsModalOpen(true);
                  }}
                  className={`w-full ${colors.button} text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                >
                  <span>Дэлгэрэнгүй үзэх</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Popular Badge */}
                {course.level === "N5" && (
                  <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-2 gap-1">
                    <StarIcon className="w-4 h-4 text-white" />
                    Хамгийн түгээмэл
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-center mt-16"
        ></motion.div>
      </div>

      {/* Detailed View Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white rounded-t-3xl p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${
                        getColorClasses(selectedCourse.color).bg
                      } rounded-2xl flex items-center justify-center`}
                    >
                      <span
                        className={`text-2xl font-bold ${
                          getColorClasses(selectedCourse.color).text
                        }`}
                      >
                        {selectedCourse.level}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-fuji-800">
                        {selectedCourse.title}
                      </h2>
                      <p className="text-fuji-600">
                        {selectedCourse.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Overview */}
                <div>
                  <h3 className="text-xl font-semibold text-fuji-800 mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-matcha-600" />
                    Ерөнхий мэдээлэл
                  </h3>
                  <p className="text-fuji-600 leading-relaxed">
                    {selectedCourse.detailedInfo.overview}
                  </p>
                </div>

                {/* Course Details Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Curriculum */}
                  <div className="bg-gradient-to-br from-sakura-50 to-sakura-100 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-sakura-800 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Хичээлийн агуулга
                    </h4>
                    <ul className="space-y-2">
                      {selectedCourse.detailedInfo.curriculum.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-sakura-600" />
                            <span className="text-sm text-sakura-700">
                              {item}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Learning Outcomes */}
                  <div className="bg-gradient-to-br from-matcha-50 to-matcha-100 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-matcha-800 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Сурах үр дүн
                    </h4>
                    <ul className="space-y-2">
                      {selectedCourse.detailedInfo.learningOutcomes.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-matcha-600" />
                            <span className="text-sm text-matcha-700">
                              {item}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                {/* Materials and Schedule */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Materials */}
                  <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-gold-800 mb-4 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Сурах материал
                    </h4>
                    <ul className="space-y-2">
                      {selectedCourse.detailedInfo.materials.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-gold-600" />
                            <span className="text-sm text-gold-700">
                              {item}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Schedule and Info */}
                  <div className="bg-gradient-to-br from-fuji-50 to-fuji-100 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-fuji-800 mb-4 flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Хичээлийн мэдээлэл
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-fuji-600" />
                        <span className="text-sm text-fuji-700">
                          {selectedCourse.detailedInfo.schedule}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <UsersIcon className="w-4 h-4 text-fuji-600" />
                        <span className="text-sm text-fuji-700">
                          Багш: {selectedCourse.detailedInfo.instructor}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Headphones className="w-4 h-4 text-fuji-600" />
                        <span className="text-sm text-fuji-700">
                          Сурагч: {selectedCourse.detailedInfo.students}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-fuji-600" />
                        <span className="text-sm text-fuji-700">
                          {selectedCourse.detailedInfo.certificate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Courses;
