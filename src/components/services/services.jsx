import { Shield, Flame, Building2, Users, Target, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: "أنظمة الحماية من الحرائق",
      description: "أنظمة متطورة مصممة لحماية ممتلكاتك وأصولك من مخاطر الحريق."
    },
    {
      icon: Flame,
      title: "أنظمة إنذار الحريق",
      description: "أنظمة إنذار مبكر لضمان الاستجابة السريعة وأقصى قدر من السلامة في حالة نشوب حريق."
    },
    {
      icon: Building2,
      title: "معدات مكافحة الحرائق",
      description: "معدات حديثة للوقاية من الحرائق والسيطرة عليها بفعالية."
    },
    {
      icon: Users,
      title: "هندسة السلامة",
      description: "حلول هندسية شاملة للسلامة لمختلف الصناعات والمنشآت."
    },
    {
      icon: Target,
      title: "عقود الصيانة",
      description: "خدمات صيانة منتظمة لضمان أن أنظمة السلامة الخاصة بك دائمًا في أفضل حالة."
    },
    {
      icon: Zap,
      title: "الخدمات الاستشارية",
      description: "نصائح خبراء واستشارات لجميع احتياجات السلامة والحماية من الحرائق."
    }
  ]

  return (
    <section id="خدماتنا" className="py-20 bg-gradient-to-br from-red-50 to-red-100 bg-black">
      <div className="container lg:w-[80%] md:w-[90%] mx-auto px-4" dir="rtl">
        <h2 className="text-4xl font-bold mb-16 text-center text-red-800">
          خدماتنا
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full animate-fadeIn flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 p-4 rounded-full bg-gradient-to-r from-red-400 to-red-500 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-700 group-hover:text-red-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}