import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import partner1 from "./../../../assets/images/partner1.png";
import partner2 from "./../../../assets/images/partner2.png";
import partner3 from "./../../../assets/images/partner3.png";
import partner4 from "./../../../assets/images/partner4.png";
import partner5 from "./../../../assets/images/partner5.png";
import partner6 from "./../../../assets/images/partner6.png";

function SuccessPartners() {
  const partners = [
    { id: 1, logo: partner1, alt: "Partner 1" },
    { id: 2, logo: partner2, alt: "Partner 2" },
    { id: 3, logo: partner3, alt: "Partner 3" },
    { id: 4, logo: partner4, alt: "Partner 4" },
    { id: 5, logo: partner5, alt: "Partner 5" },
    { id: 6, logo: partner6, alt: "Partner 6" },
  ];

  return (
    <section id="شركاؤنا" className="py-20 bg-gray-50">
      <div className="container w-[80%] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-700">
          شركاء النجاح
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          نفخر بالشراكة مع العديد من الشركات الرائدة لتحقيق إنجازات رائعة معًا
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={2}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id} className="flex justify-center mb-20">
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* Circular Background */}
                <div className="absolute inset-0 w-full h-full bg-white/80 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"></div>
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="relative w-24 h-24 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Custom Styles */}
      <style>
        {`
          .swiper-pagination-bullet {

            /* Red bullets */
            background-color:grey;
            width: 12px;
            height: 12px;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background-color: #ef4444; 
            transform: scale(1.2);
          }
        `}
      </style>
    </section>
  );
}

export default SuccessPartners;
