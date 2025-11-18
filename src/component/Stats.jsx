import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Rocket, Globe, Building2 } from "lucide-react"; // Lucide icons

const stats = [
  { id: 1, name: "Projects Deployed", value: 450, icon: Rocket },
  { id: 2, name: "Global Reach", value: 2000, icon: Globe },
  { id: 3, name: "Client Organizations", value: 220, icon: Building2 },
];

export default function Stats() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-10 sm:py-28 lg:py-10 font-inter">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-up">
        {/* Heading */}
        {/* <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl font-plus-jakarta-sans">
            Our Impact in the Digital World
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            We help businesses scale through reliable solutions, trusted by
            thousands of users and industry leaders worldwide.
          </p>
        </div> */}

        {/* Stats Grid */}
        <dl className="grid grid-cols-1 gap-x-10 gap-y-10 text-center sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const { ref, inView } = useInView({ triggerOnce: true });
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                ref={ref}
                className="flex flex-col items-center gap-y-4 p-8  transition duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-black">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Stat Number */}
                <dd className="order-first text-3xl font-semibold tracking-tight text-black sm:text-5xl">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix="+"
                      className="font-inter"
                    />
                  ) : (
                    "0"
                  )}
                </dd>

                {/* Label */}
                <dt className="text-base font-medium text-gray-600">
                  {stat.name}
                </dt>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
