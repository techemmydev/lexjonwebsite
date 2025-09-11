import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";
import Software from "../assets/img/sofware.avif";
import digital from "../assets/img/digital.avif";
import robotics from "../assets/img/robotics.avif";

// Service data with routes
const services = [
  {
    title: "Software Development",
    description:
      "Empowering students with the fundamentals of information technology, digital literacy, and essential computer skills for today's digital world.",
    img: Software, // ✅ fixed
    link: "/SoftwareDevelopment",
  },
  {
    title: "Creative & Digital Marketing",
    description:
      "Hands-on learning in web, mobile, and desktop application development using modern frameworks and tools in real time.",
    img: digital, // ✅ fixed
    link: "/creative",
  },
  {
    title: "Embedded Systems & Robotics",
    description:
      "Fostering innovation through robotics, sensors, and automation programming—designed to inspire young engineers.",
    img: robotics, // ✅ fixed
    link: "/robotics",
  },
];

const EventServices = () => {
  const navigate = useNavigate();
  const [loadedImages, setLoadedImages] = useState(
    Array(services.length).fill(false)
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <section className="py-12 px-6 text-center font-plus-jakarta-sans">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold mb-4 font-plus-jakarta-sans"
          data-aos="fade-down"
        >
          DISCOVER OUR DIGITAL SERVICES
        </h2>
        <p className="text-gray-600 mb-8" data-aos="fade-up">
          We offer hands-on, future-ready education in IT, software development,
          and robotics for all learners.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg rounded-lg"
              data-aos="fade-up"
            >
              <img
                src={service.img} // ✅ fixed
                alt={service.title}
                className={`rounded-lg w-full h-40 object-cover mb-4 transition-opacity duration-700 ${
                  loadedImages[index] ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
              />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-[15px]">
                {service.description}
              </p>
              <Button
                onClick={() => navigate(service.link)}
                className="bg-[#faad29d6] text-white px-5 py-3 text-sm font-bold hover:bg-[#b37b1e] mt-4 capitalize"
              >
                learn more
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventServices;
