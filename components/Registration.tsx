"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { z } from "zod";
import {
  User,
  Calendar,
  BookOpen,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Clock,
  Users,
  Star,
} from "lucide-react";
import Courses from "./Courses";

// Zod validation schema
const registrationSchema = z.object({
  firstName: z
    .string()
    .min(2, "Нэр хамгийн багадаа 2 үсэг байх ёстой")
    .max(50, "Нэр хамгийн ихдээ 50 үсэг байх боломжтой"),
  lastName: z
    .string()
    .min(2, "Овог хамгийн багадаа 2 үсэг байх ёстой")
    .max(50, "Овог хамгийн ихдээ 50 үсэг байх боломжтой"),
  email: z.string().email("И-мэйл хаяг буруу байна"),
  phone: z
    .string()
    .regex(/^[0-9]+$/, "Утасны дугаарт зөвхөн тоо оруулна уу")
    .min(8, "Утасны дугаар хамгийн багадаа 8 орон байх ёстой")
    .max(15, "Утасны дугаар хамгийн ихдээ 15 орон байх боломжтой"),
  birthDate: z.string().min(1, "Төрсөн огноо заавал оруулах ёстой"),
  courseLevel: z.string().min(1, "Сургалтын түвшин заавал сонгох ёстой"),
  preferredSchedule: z.string().min(1, "Хүссэн цаг заавал сонгох ёстой"),
  experience: z.string().optional(),
  goals: z.string().optional(),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;
type ValidationErrors = Partial<Record<keyof RegistrationFormData, string>>;

const Registration = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<RegistrationFormData>({
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

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const result = registrationSchema.safeParse(formData);
    if (result.success) {
      setValidationErrors({});
      return true;
    } else {
      const errors: ValidationErrors = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          errors[issue.path[0] as keyof RegistrationFormData] = issue.message;
        }
      });
      setValidationErrors(errors);
      return false;
    }
  };

  const isFormValid = (): boolean => {
    const result = registrationSchema.safeParse(formData);
    return result.success;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation error when user starts typing
    if (validationErrors[name as keyof RegistrationFormData]) {
      setValidationErrors({
        ...validationErrors,
        [name]: undefined,
      });
    }
  };

  const handleInputBlur = (fieldName: keyof RegistrationFormData) => {
    // Validate individual field on blur
    const fieldSchema = registrationSchema.shape[fieldName];
    if (fieldSchema) {
      const result = fieldSchema.safeParse(formData[fieldName]);
      if (result.success) {
        // Clear error if validation passes
        if (validationErrors[fieldName]) {
          setValidationErrors({
            ...validationErrors,
            [fieldName]: undefined,
          });
        }
      } else {
        setValidationErrors({
          ...validationErrors,
          [fieldName]: result.error.issues[0]?.message,
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      console.log("Submitting form data:", formData);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error text:", errorText);

        let errorMessage = "Failed to submit registration";
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          console.error("Could not parse error response:", e);
        }

        throw new Error(errorMessage);
      }

      const result = await response.json();
      console.log("Success response:", result);

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
      setValidationErrors({});
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting registration:", error);

      let errorMessage = "Уучлаарай, алдаа гарлаа. Дахин оролдоно уу.";
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          errorMessage = "Хугацаа хэтэрлээ. Дахин оролдоно уу.";
        } else if (error.message.includes("Failed to fetch")) {
          errorMessage =
            "Серверт холбогдох боломжгүй байна. Интернэт холболтоо шалгана уу.";
        } else if (error.message.includes("Database")) {
          errorMessage = "Мэдээллийн сангийн алдаа. Дахин оролдоно уу.";
        } else {
          errorMessage = error.message;
        }
      }

      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scheduleOptions = [
    { id: "9-11", name: "Өглөө (9:00-11:00)", icon: Clock },
    { id: "11-13", name: "Өдөр (11:00-13:00)", icon: Clock },
    { id: "13-15", name: "Өдөр (13:00-15:00)", icon: Clock },
    { id: "15-17", name: "Өдөр (15:00-17:00)", icon: Clock },
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
                      onBlur={() => handleInputBlur("firstName")}
                      required
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all ${
                        validationErrors.firstName
                          ? "border-red-300 focus:ring-red-500"
                          : "border-fuji-200"
                      }`}
                      placeholder="Нэрээ оруулна уу"
                    />
                    {validationErrors.firstName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {validationErrors.firstName}
                      </p>
                    )}
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
                      onBlur={() => handleInputBlur("lastName")}
                      required
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all ${
                        validationErrors.lastName
                          ? "border-red-300 focus:ring-red-500"
                          : "border-fuji-200"
                      }`}
                      placeholder="Овгоо оруулна уу"
                    />
                    {validationErrors.lastName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {validationErrors.lastName}
                      </p>
                    )}
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
                      onBlur={() => handleInputBlur("email")}
                      required
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all ${
                        validationErrors.email
                          ? "border-red-300 focus:ring-red-500"
                          : "border-fuji-200"
                      }`}
                      placeholder="И-мэйл хаягаа оруулна уу"
                    />
                    {validationErrors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {validationErrors.email}
                      </p>
                    )}
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
                      onBlur={() => handleInputBlur("phone")}
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      required
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all ${
                        validationErrors.phone
                          ? "border-red-300 focus:ring-red-500"
                          : "border-fuji-200"
                      }`}
                      placeholder="Утасны дугаараа оруулна уу "
                    />
                    {validationErrors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {validationErrors.phone}
                      </p>
                    )}
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
                    onBlur={() => handleInputBlur("birthDate")}
                    required
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all ${
                      validationErrors.birthDate
                        ? "border-red-300 focus:ring-red-500"
                        : "border-fuji-200"
                    }`}
                  />
                  {validationErrors.birthDate && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      {validationErrors.birthDate}
                    </p>
                  )}
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
                      onBlur={() => handleInputBlur("courseLevel")}
                      required
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all ${
                        validationErrors.courseLevel
                          ? "border-red-300 focus:ring-red-500"
                          : "border-fuji-200"
                      }`}
                    >
                      <option value="">Түвшингээ сонгоно уу</option>
                      <option value="n5">N5 - Эхлэгч</option>
                      <option value="n4">N4 - Суурь</option>
                      <option value="n3">N3 - Дунд</option>
                    </select>
                    {validationErrors.courseLevel && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {validationErrors.courseLevel}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-fuji-700 mb-2">
                      Хүссэн цаг
                    </label>
                    <select
                      name="preferredSchedule"
                      value={formData.preferredSchedule}
                      onChange={handleInputChange}
                      onBlur={() => handleInputBlur("preferredSchedule")}
                      required
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-sakura-500 focus:border-transparent transition-all ${
                        validationErrors.preferredSchedule
                          ? "border-red-300 focus:ring-red-500"
                          : "border-fuji-200"
                      }`}
                    >
                      <option value="">Цагаа сонгоно уу</option>
                      {scheduleOptions.map((schedule) => (
                        <option key={schedule.id} value={schedule.id}>
                          {schedule.name}
                        </option>
                      ))}
                    </select>
                    {validationErrors.preferredSchedule && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {validationErrors.preferredSchedule}
                      </p>
                    )}
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

              {/* Validation Summary */}
              {Object.keys(validationErrors).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-amber-50 border border-amber-200 rounded-xl"
                >
                  <p className="text-amber-700 font-medium mb-2">
                    ⚠️ Дараах талбаруудыг засана уу:
                  </p>
                  <ul className="space-y-1 text-sm text-amber-600">
                    {Object.entries(validationErrors).map(([field, error]) => (
                      <li key={field} className="flex items-center">
                        <span className="w-1 h-1 bg-amber-500 rounded-full mr-2"></span>
                        {error}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

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
                  className="p-4 bg-amber-50 border border-amber-200 rounded-xl"
                >
                  <p className="text-amber-700 font-medium">
                    ❌ Уучлаарай, алдаа гарлаа. Дахин оролдоно уу.
                  </p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting || !isFormValid()}
                whileHover={{ scale: isFormValid() ? 1.02 : 1 }}
                whileTap={{ scale: isFormValid() ? 0.98 : 1 }}
                className={`w-full font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-lg ${
                  isFormValid()
                    ? "bg-gradient-to-r from-sakura-500 to-sakura-600 hover:from-sakura-600 hover:to-sakura-700 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Илгээж байна...</span>
                  </>
                ) : (
                  <>
                    <span>
                      {isFormValid()
                        ? "Бүртгэл илгээх"
                        : "Бүх талбарыг бөглөнө үү"}
                    </span>
                    {isFormValid() && <ArrowRight className="w-5 h-5" />}
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
