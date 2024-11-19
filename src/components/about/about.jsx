import aboutImage from './../../assets/images/who are us.png'
import { Shield, Users, Target, Zap } from 'lucide-react'

export default function About() {
  return (
    <section id="من نحن" className="py-24 bg-gray-50">
      <div className="container mx-auto lg:w-[80%] md:w-[90%] px-4" dir="rtl">
        <h2 className="text-4xl font-bold mb-16 text-center text-red-700 relative">
          من نحن
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-100 rounded-full opacity-50 z-0" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-red-100 rounded-full opacity-50 z-0" />
            <p className="text-gray-700 text-lg leading-relaxed relative z-10 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg border border-red-100">
              تأسست شركة باور أوف في جدة، المملكة العربية السعودية، وهي من بين الشركات الرائدة
              في توفير خدمات ومنتجات أنظمة الحماية من الحرائق وأجهزة إنذار الحريق ومعدات مكافحة
              الحرائق وأنظمة هندسة الأمن والسلامة.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed relative z-10 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg border border-red-100">
              يعمل فريقنا من المهندسين والفنيين المدربين والمؤهلين بشكل احترافي على التزامنا
              بتقديم خبراتنا لعملائنا في حماية الحياة والبيئة والممتلكات.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-200 to-red-300 rounded-2xl transform -rotate-3 scale-105 z-0" />
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={aboutImage}
                alt="من نحن"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "حماية متخصصة" },
            { icon: Users, title: "فريق محترف" },
            { icon: Target, title: "التركيز على العملاء" },
            { icon: Zap, title: "حلول مبتكرة" },
          ].map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-center hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-2 border border-red-100"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-100 rounded-full transform rotate-45 scale-110" />
                <item.icon className="w-12 h-12 text-red-600 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}