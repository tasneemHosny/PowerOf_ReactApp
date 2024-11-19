import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaMapPin, FaPhone, FaMailBulk } from 'react-icons/fa';
import logo from "./../../assets/images/logo.png";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto lg:w-[80%] md:w-[90%] px-4" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center text-center">
          {/* First section */}
          <div className="space-y-6 w-full">
            <img
              src={logo}
              alt="Power OF logo"
              width={150}
              height={60}
              className="mx-auto"
            />
            <p className="text-gray-400 leading-relaxed">
              الشركة الرائدة في أنظمة الحماية من الحرائق والسلامة
              <br /> في المملكة العربية السعودية
            </p>
            <div className="flex gap-6 justify-center">
              {[
               { icon: FaFacebookF, label: "Facebook" },
               { icon: FaTwitter, label: "Twitter" },
               { icon: FaInstagram, label: "Instagram" },
               { icon: FaLinkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={`Visit our ${label} page`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Second section */}
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {["من نحن", "خدماتنا", "شركاؤنا", "اتصل بنا"].map((item) => (
                <li key={item} className="hover:translate-x-2 transition-transform duration-300">
                  <a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Third section */}
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {[
                "أنظمة الحماية من الحرائق",
                "أنظمة إنذار الحريق",
                "معدات مكافحة الحرائق",
                "هندسة السلامة",
                "عقود الصيانة",
                "الخدمات الاستشارية",
              ].map((item) => (
                <li key={item} className="hover:translate-x-2 transition-transform duration-300">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fourth section */}
          <div className="text-center w-full">
            <h3 className="text-xl font-semibold mb-6">تواصل معنا</h3>
            <ul className="space-y-3 inline-block text-right">
              {[
                { icon: FaMapPin, text: "جدة، المملكة العربية السعودية"},
                { icon: FaPhone, text: "050 99 1 60 60 966+" },
                { icon: FaMailBulk, text: "info@powerof.com" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4 ">
                  <Icon className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400 text-right">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p className="flex gap-2 justify-center items-center">
            <span>© 2024 Power OF</span> <span>جميع الحقوق محفوظة</span>
          </p>
        </div>
      </div>
    </footer>
  )
}