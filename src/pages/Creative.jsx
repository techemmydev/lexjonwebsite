import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Creative & Digital Content Services
const creativeServices = [
  {
    title: "Social Media Content Design",
    desc: "Posts, reels, stories & thumbnails for Instagram, Facebook, TikTok, LinkedIn.",
    icon: "💬",
  },
  {
    title: "Video Ad Creation",
    desc: "Promo videos, motion graphics & short-form ads for brands & events.",
    icon: "🎥",
  },
  {
    title: "Flyer & Banner Design",
    desc: "Print & digital designs for events, ads, and campaigns.",
    icon: "🖼️",
  },
  {
    title: "Brand Identity Design",
    desc: "Logos, brand colors, and style guides for consistent branding.",
    icon: "🎨",
  },
  {
    title: "Content Planning",
    desc: "Weekly/monthly strategies & templates for your brand voice.",
    icon: "🗓️",
  },
];

// Digital Marketing Services
const marketingServices = [
  {
    title: "Social Media Management",
    desc: "Setup, posting, engagement & analytics.",
    icon: "📱",
  },
  {
    title: "Paid Ad Campaigns",
    desc: "Targeted ads on Meta, Google & YouTube with measurable ROI.",
    icon: "📊",
  },
  {
    title: "Email Marketing",
    desc: "Newsletters, automation & lead capture pages.",
    icon: "✉️",
  },
  {
    title: "Marketing Strategy",
    desc: "Launch plans, campaign strategy & performance reports.",
    icon: "📈",
  },
  {
    title: "Lead Generation",
    desc: "Landing pages, funnels & conversion optimization.",
    icon: "🚀",
  },
];

export default function Creative() {
  return (
    <div className="font-plus-jakarta-sans text-gray-800">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-500 text-white py-35 px-6 text-center overflow-hidden lg:py-40">
        <div className="max-w-3xl mx-auto fade-up relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            CA Creative & Digital Marketing
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Combining visual creativity with strategic digital marketing to help
            brands grow and deliver real results.
          </p>
          <a
            href="#services"
            className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Discover Services
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80"
          alt="Marketing"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </section>
      {/* About */}
      <div className="bg-gray-50 min-h-screen py-30">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-3xl md:text-4xl uppercase tracking-wider text-gray-500 mb-2 font-plus-jakarta-sans">
            About our digital agency
          </p>
          <h2 className="text-lg text-gray-800 leading-relaxed">
            Plantronics with its GN Netcom{" "}
            <span className="font-semibold">wireless headset</span> creates the
            next generation of wireless headset and other products such as
            wireless amplifiers, and
            <span className="font-semibold"> wireless headset</span> telephone.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              img: "https://via.placeholder.com/400x250",
              title: "Addiction Whit Gambling",
              desc: "It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office's files.",
            },
            {
              img: "https://via.placeholder.com/400x250",
              title: "Headset No Longer Wired",
              desc: "If you are in the market for a computer, there are a number of factors to consider. Will it be used for your home, your office or perhaps...",
            },
            {
              img: "https://via.placeholder.com/400x250",
              title: "Life Advice Looking at Window",
              desc: "Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy, I’m talking...",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md shadow-sm overflow-hidden flex flex-col"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-sm font-bold uppercase text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">
                  {card.desc}
                </p>
                <button className="flex items-center gap-1 text-green-600 border border-green-600 rounded-full px-4 py-1 text-sm hover:bg-green-600 hover:text-white transition">
                  Explore <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Split Section */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-green-800 text-white flex items-center px-8 py-16">
            <div className="max-w-lg">
              <p className="text-xs uppercase tracking-wider mb-2 text-gray-300">
                We create top class designs
              </p>
              <h2 className="text-2xl font-bold leading-snug mb-4">
                A Digital Studio Crafting Tech Business
              </h2>
              <p className="text-gray-300 text-sm mb-6">
                Computer users and programmers have become so accustomed to
                using Windows, even for the changing capabilities and the
                appearances of the graphical interface of the versions;
                therefore it has remained Microsoft's product. Although,
                Lycosit, Red Hat, Mandrake...
              </p>
              <button className="flex items-center gap-1 text-white border border-green-400 rounded-full px-4 py-1 text-sm hover:bg-green-400 hover:text-indigo-900 transition">
                Start Business <span>→</span>
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x500"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <section
        id="services"
        className="bg-gray-50 py-20 px-6 font-plus-jakarta-sans bg-gr"
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Creative content + marketing strategy for measurable growth.
          </p>
        </div>

        {/* Creative & Digital Content */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-green-700">
            A. Creative & Digital Content Services
          </h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {creativeServices.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Digital Marketing */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-green-700">
            B. Digital Marketing Services
          </h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {marketingServices.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* CTA */}
      <section
        id="contact"
        className="bg-gradient-to-r from-green-900 to-green-600 text-white py-16 text-center text-gray-700 font-plus-jakarta-sans"
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Build Something Amazing?
          </h2>
          <p className="mb-6 text-white">
            Let’s discuss how our team can create software that moves your
            business forward.
          </p>
          <a
            href="mailto:sales@caglobals.com"
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
