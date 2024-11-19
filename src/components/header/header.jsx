import BG from "./../../assets/images/bg.png";
import About from "../about/About";
import Services from "../services/Services";

function Header() {
  // Scroll to the next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("من_نحن"); // Use the ID of the next section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="الرئيسية"
        className="relative overflow-hidden h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-8 leading-tight animate-fadeIn">
              قوة الحماية والأمان
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto animate-fadeIn animation-delay-300">
              الشركة الرائدة في أنظمة الحماية من الحرائق والسلامة في المملكة العربية السعودية
            </p>
            <button
              onClick={scrollToNextSection}
              className="bg-white text-red-600 hover:bg-gray-100 text-sm sm:text-base md:text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 animate-fadeIn animation-delay-600"
            >
              اكتشف خدماتنا
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
