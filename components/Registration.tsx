"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  BookOpen,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Clock,
  Users,
  Star,
} from "lucide-react";

const Registration = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    courseLevel: "",
    preferredSchedule: "",
    experience: "",
    goals: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          birthDate: "",
          courseLevel: "",
          preferredSchedule: "",
          experience: "",
          goals: "",
        });
        setSubmitStatus("success");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        throw new Error(result.error || "Failed to submit registration");
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const courseLevels = [
    {
      id: "beginner",
      name: "Эхлэгч",
      description: "Япон хэл сураагүй эсвэл маш бага мэддэг",
      duration: "8 долоо хоног",
      price: "₮150,000",
      features: ["Хирагана, Катакана", "Энгийн өгүүлбэр", "Баз цаг"],
    },
    {
      id: "elementary",
      name: "Суурь",
      description: "Хирагана, Катакана мэддэг",
      duration: "12 долоо хоног",
      price: "₮200,000",
      features: ["JLPT N5 түвшин", "Өдөр тутмын хэл", "Грамматик"],
    },
    {
      id: "intermediate",
      name: "Дунд",
      description: "JLPT N5 түвшинтэй",
      duration: "16 долоо хоног",
      price: "₮250,000",
      features: ["JLPT N4 түвшин", "Бизнес хэл", "Кандзи"],
    },
    {
      id: "advanced",
      name: "Дээд",
      description: "JLPT N4-N3 түвшинтэй",
      duration: "20 долоо хоног",
      price: "₮300,000",
      features: ["JLPT N3 түвшин", "Сэтгүүл", "Уран зохиол"],
    },
  ];

  const scheduleOptions = [
    { id: "morning", name: "Өглөө (9:00-11:00)", icon: Clock },
    { id: "afternoon", name: "Өдөр (14:00-16:00)", icon: Clock },
    { id: "evening", name: "Орой (19:00-21:00)", icon: Clock },
    { id: "weekend", name: "Амралтын өдөр", icon: Calendar },
  ];

  return (
    <section
      id="registration"
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
            <GraduationCap className="w-4 h-4 text-sakura-600" />
            <span className="text-sm font-medium text-sakura-700">Бүртгэл</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-fuji-800 mb-6"
          >
            Япон хэлний сургалтад
            <span className="text-gradient block">бүртгүүлэх</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-fuji-600 max-w-3xl mx-auto"
          >
            Япон хэл сурах аялалаа эхлүүлэхэд бэлэн үү? Манай мэргэжлийн баг
            таны хүсэлтийг хүлээн авч, танд тохиромжтой сургалтын төлөвлөгөөг
            бэлдэх болно.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Levels */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-fuji-800 mb-6">
              Сургалтын түвшин
            </h3>
            <div className="space-y-4">
              {courseLevels.map((level, index) => (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-sakura-300"
                  onClick={() =>
                    setFormData({ ...formData, courseLevel: level.id })
                  }
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-fuji-800">
                      {level.name}
                    </h4>
                    <span className="text-sakura-600 font-bold text-lg">
                      {level.price}
                    </span>
                  </div>
                  <p className="text-fuji-600 text-sm mb-3">
                    {level.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-fuji-500 mb-3">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {level.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Групп
                    </span>
                  </div>
                  <div className="space-y-1">
                    {level.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-fuji-600"
                      >
                        <CheckCircle className="w-4 h-4 text-sakura-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-fuji-800 mb-6">
              Бүртгэлийн форм
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h4 className="text-lg font-semibold text-fuji-800 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-sakura-600" />
                  Хувийн мэдээлэл
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-fuji-700 mb-2">
                      Нэр
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all"
                      placeholder="Нэрээ оруулна уу"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-fuji-700 mb-2">
                      Овог
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all"
                      placeholder="Овгоо оруулна уу"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-fuji-700 mb-2">
                      И-мэйл
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all"
                      placeholder="И-мэйл хаягаа оруулна уу"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-fuji-700 mb-2">
                      Утас
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all"
                      placeholder="Утасны дугаараа оруулна уу"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-fuji-700 mb-2">
                    Төрсөн огноо
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Course Preferences */}
              <div>
                <h4 className="text-lg font-semibold text-fuji-800 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-sakura-600" />
                  Сургалтын сонголт
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-fuji-700 mb-2">
                      Сургалтын түвшин
                    </label>
                    <select
                      name="courseLevel"
                      value={formData.courseLevel}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all"
                    >
                      <option value="">Түвшингээ сонгоно уу</option>
                      {courseLevels.map((level) => (
                        <option key={level.id} value={level.id}>
                          {level.name} - {level.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-fuji-700 mb-2">
                      Хүссэн цаг
                    </label>
                    <select
                      name="preferredSchedule"
                      value={formData.preferredSchedule}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all"
                    >
                      <option value="">Цагаа сонгоно уу</option>
                      {scheduleOptions.map((schedule) => (
                        <option key={schedule.id} value={schedule.id}>
                          {schedule.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-fuji-700 mb-2">
                    Япон хэлний туршлага
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all resize-none"
                    placeholder="Япон хэл сурсан туршлагаа тайлбарлана уу..."
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-fuji-700 mb-2">
                    Сургалтаас хүлээх үр дүн
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all resize-none"
                    placeholder="Япон хэл сурснаар юу хийх хүсэлтэй вэ?"
                  />
                </div>
              </div>

              {/* Payment Method */}

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-xl"
                >
                  <p className="text-green-700 font-medium">
                    ✅ Таны бүртгэл амжилттай илгээгдлээ! Бид удахгүй танд
                    холбогдох болно.
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <p className="text-red-700 font-medium">
                    ❌ Уучлаарай, алдаа гарлаа. Дахин оролдоно уу.
                  </p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-sakura-500 to-sakura-600 hover:from-sakura-600 hover:to-sakura-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Илгээж байна...</span>
                  </>
                ) : (
                  <>
                    <span>Бүртгэл илгээх</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-sakura-50 to-matcha-50 rounded-2xl border border-sakura-200">
              <h4 className="text-lg font-semibold text-fuji-800 mb-3 flex items-center">
                <Star className="w-5 h-5 mr-2 text-sakura-600" />
                Чухал мэдээлэл
              </h4>
              <ul className="space-y-2 text-sm text-fuji-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-sakura-500 mr-2 mt-0.5 flex-shrink-0" />
                  Бүртгэл илгээсний дараа 24 цагийн дотор холбогдох болно
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-sakura-500 mr-2 mt-0.5 flex-shrink-0" />
                  Сургалтын эхлэх өдрийг таны хүссэн цагт тохируулна
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-sakura-500 mr-2 mt-0.5 flex-shrink-0" />
                  Үнэгүй туршилтын хичээл боломжтой
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-sakura-500 mr-2 mt-0.5 flex-shrink-0" />
                  Сургалтын материал үнэгүй өгөгдөнө
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
