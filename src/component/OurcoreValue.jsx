import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShieldCheckIcon,
  HandThumbUpIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

const coreValues = [
  {
    name: "Integrity",
    description:
      "Our reputation as a company that our clients can trust is our most valuable asset, and we continually earn that trust by fulfilling all our promises.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Service",
    description:
      "Our clients are our bosses not only because they pay us, but because we hold ourselves to a higher standard in how we treat clients and operate generally.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Dedication",
    description:
      "We go the extra mile to exceed expectations for both our employer and our clients, constantly improving ourselves, our products, and our services.",
    icon: HeartIcon,
  },
  {
    name: "Excellence",
    description:
      "We believe that whatever is worth doing is worth doing exceedingly well.",
    icon: StarIcon,
  },
];

export default function CoreValues() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-green-900 py-20 sm:py-32" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center font-plus-jakarta-sans">
          <p className="mt-2 text-4xl lg:text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Our Core Values
          </p>
          <p className="mt-6 text-lg text-green-100">
            These values are the foundation of who we are and how we serve our
            clients every day.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl font-plus-jakarta-sans">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {coreValues.map((value) => (
              <div key={value.name} className="relative pl-16">
                <dt className="text-lg font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-500 shadow-md">
                    <value.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-2 text-base text-green-100">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
