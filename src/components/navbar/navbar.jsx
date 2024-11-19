import { useState } from "react";
import logo from "./../../assets/images/logo.png";

const navItems = [
  { name: "الرئيسة", href: "#الرئيسة" },
  { name: "من نحن", href: "#من نحن" },
  { name: "خدماتنا", href: "#خدماتنا" },
  { name: "شركاؤنا", href: "#شركاؤنا" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col" dir="rtl">
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-6 w-[90%] flex justify-between items-center">
          <img src={logo} alt="logo" className="w-[150px]" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-red-600 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-red-600 p-2 text-xl"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Add padding to prevent content from hiding behind the fixed navbar */}
      <div className="pt-[80px]">
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed top-15 left-0 w-full bg-white shadow-md z-50">
            <nav className="flex flex-col items-center py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300 py-2"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
