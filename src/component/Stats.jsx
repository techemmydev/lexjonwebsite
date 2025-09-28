import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, name: "Projects Deployed", value: 350 },
  { id: 2, name: "Active Users", value: 12500 },
  { id: 3, name: "Client Organizations", value: 220 },
];

export default function Stats() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-20 sm:py-32 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-16 uppercase tracking-wide font-plus-jakarta-sans lg:text-2xl">
          Our Impact in the Digital World
        </h1>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => {
            const { ref, inView } = useInView({ triggerOnce: true });

            return (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
                ref={ref}
              >
                <dt className="text-base font-medium text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix="+"
                      className="font-plus-jakarta-sans"
                    />
                  ) : (
                    "0"
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
