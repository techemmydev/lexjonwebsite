import React from "react";
import Button from "./Button";
export default function CTASections() {
  return (
    <div className="bg-none lg:bg-green-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
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
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left font-plus-jakarta-sans">
            <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
              Let AI Boost Your Workflow.
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Harness the power of intelligent automation. Our AI solutions help
              you optimize processes, boost productivity, and innovate faster.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start ">
              <Button className="bg-green-950 text-white text-xs py-5 px-5 hover:bg-green-900 font-plus-jakarta-sans font-bold cursor-pointer w-full">
                Get in touch
              </Button>
            </div>
          </div>
          <div className="relative mt-16 w-full max-w-md lg:mt-8 lg:max-w-lg hidden lg:flex lg:flex-auto">
            <img
              alt="Robot illustration"
              src="https://images.unsplash.com/photo-1625314868143-20e93ce3ff33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvYm90fGVufDB8fDB8fHww"
              className="w-90 h-auto rounded-md bg-white/5 ring-1 ring-white/10 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
