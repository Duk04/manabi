"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://formspree.io/f/mrblogle", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus("success");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Утас",
      value: "+976 94001926",
      description: "Бидэнд хүсэлтээ илгээх",
    },
    {
      icon: Mail,
      title: "И-мэйл",
      value: "otgoo192939@gmail.com",
      description: "Бидэнд хүсэлтээ илгээх",
    },
    {
      icon: MapPin,
      title: "Цахим хаяг",
      value: "Tokyo, Japan",
      description: "Бидэнд хүсэлтээ илгээх",
    },
    {
      icon: Clock,
      title: "Цаг",
      value: "Mon-Fri: 9AM-6PM",
      description: "Ажлын цаг",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/dorjotgootgo/",
      label: "Instagram",
    },
    { icon: Twitter, href: "https://x.com/otgoo192939", label: "Twitter" },
    {
      icon: Facebook,
      href: "https://www.facebook.com/dorj.otgontsetseg.5",
      label: "Facebook",
    },
  ];

  return (
    <section
      id="contact"
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
            <MessageCircle className="w-4 h-4 text-matcha-600" />
            <span className="text-sm font-medium text-matcha-700">
              Холбоо барих
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-fuji-800 mb-6"
          >
            Япон хэл сурах
            <span className="text-gradient block">
              аялалаа эхлэхэд бэлэн үү?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-fuji-600 max-w-3xl mx-auto"
          >
            Манай япон хэлний сургалтын талаар асуулт байна уу? Манай заах
            аргуудын талаар илүү ихийг мэдэхийг хүсч байна уу? Бид таны япон хэл
            сурах аялалд тусалхад бэлэн байна.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-fuji-800 mb-6">
                Холбоо барих мэдээлэл
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-matcha-400 to-matcha-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-fuji-800 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-fuji-600 font-medium">{info.value}</p>
                      <p className="text-sm text-fuji-500">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-fuji-800 mb-6">
                Бидэнтэй холбогдох
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-br from-sakura-400 to-sakura-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h4 className="text-lg font-semibold text-fuji-800 mb-4">
                Бидэнтэй холбогдох хаяг
              </h4>
              <div className="bg-gradient-to-br from-fuji-100 to-fuji-200 rounded-2xl h-48 flex items-center justify-center relative overflow-hidden">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4704.275880013943!2d106.90091698551736!3d47.91799516384837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96925987dad11d%3A0xcbdeaf906ceaa3e0!2sTaiwan%20Cultural%20Center!5e0!3m2!1sen!2smn!4v1754534107331!5m2!1sen!2smn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>

                {/* Overlay with address info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-fuji-600" />
                    <div>
                      <p className="text-sm font-medium text-fuji-700">
                        Улаанбаатар, Монгол
                      </p>
                      <p className="text-xs text-fuji-600">
                        Сүхбаатар дүүрэг, 1-р хороо
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-fuji-800 mb-6">
              Бидэнд хүсэлтээ илгээх
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-fuji-700 mb-2">
                    Овог нэр
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-matcha-500 focus:border-transparent transition-all"
                    placeholder="Нэрээ оруулна уу"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-fuji-700 mb-2">
                    И-мэйл хаяг
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-matcha-500 focus:border-transparent transition-all"
                    placeholder="И-мэйл хаягаа оруулна уу"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-fuji-700 mb-2">
                  Гүйцээл
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-matcha-500 focus:border-transparent transition-all"
                  placeholder="Энэ юуны тухай вэ?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-fuji-700 mb-2">
                  Хүсэлт
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-fuji-200 rounded-xl focus:ring-2 focus:ring-matcha-500 focus:border-transparent transition-all resize-none"
                  placeholder="Хүсэлтээ дэлгэрэнгүй бичнэ үү..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-xl"
                >
                  <p className="text-green-700 font-medium">
                    ✅ Таны хүсэлт амжилттай илгээгдлээ! Бид удахгүй танд
                    хариулах болно.
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
                className="w-full bg-gradient-to-r from-matcha-500 to-matcha-600 hover:from-matcha-600 hover:to-matcha-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Илгээж байна...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Илгээх</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Response Time */}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-fuji-800 mb-8 text-center">
            Түгээмэл асуултууд
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-fuji-800 mb-2">
                Хичээлийг дуусгахад хэр хугацаа шаардлагатай вэ?
              </h4>
              <p className="text-fuji-600">
                Хичээлийн түвшин бүр 8-24 долоо хоног шаарддаг бөгөөд энэ нь
                таны сурах хурд болон сонгосон түвшнээс хамаарна.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-fuji-800 mb-2">
                Би өөрийн хурдаар суралцаж болох уу?
              </h4>
              <p className="text-fuji-600">
                Мэдээж! Бүх хичээлүүд нь өөрийн хурдаар суралцах боломжтой тул
                танд тохиромжтой цагт суралцаж болно.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
