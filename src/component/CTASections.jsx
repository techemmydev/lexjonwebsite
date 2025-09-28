import React from "react";
import Button from "./Button";
import roboticshuma from "../assets/img/humanrobot.avif";

export default function CTASections() {
  return (
    <section className="bg-none lg:bg-green-900">
      <div className="mx-auto max-w-7xl py-20 sm:px-6 sm:py-22 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-none sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 lg:shadow-2xl">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
          </svg>

          {/* Text Section */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-22 lg:text-left font-plus-jakarta-sans">
            <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
              Let AI Boost Your Workflow
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Harness the power of intelligent automation. Our AI-driven
              solutions are designed to streamline processes, reduce operational
              costs, and empower your teams to focus on what truly
              matters—innovation and growth.
            </p>
            <p className="mt-4 text-base text-gray-500">
              Whether you’re scaling your business or optimizing daily
              operations, our experts ensure seamless AI integration tailored to
              your needs.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start">
              <Button className="bg-green-950 text-white text-sm py-4 px-6 hover:bg-green-900 font-plus-jakarta-sans font-bold cursor-pointer w-full sm:w-auto">
                Get in Touch
              </Button>
              <Button className="bg-white border border-green-900 text-green-900 text-sm py-4 px-6 hover:bg-green-50 font-plus-jakarta-sans font-medium cursor-pointer w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-16 w-full max-w-md lg:mt-8 lg:max-w-lg hidden lg:flex lg:flex-auto">
            <img
              alt="Human collaborating with AI robot illustration"
              src={roboticshuma}
              className="w-90 h-auto rounded-md bg-white/5 ring-1 ring-white/10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
