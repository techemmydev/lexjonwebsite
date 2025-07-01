import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo/calogo.png"; // Adjust the path as necessary
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
const navigation = [
  { name: "Home", href: "#" },
  { name: "About us", href: "#" },
  { name: "Service", href: "#" },
  { name: "Product", href: "#" },
  { name: "Carer", href: "#" },
  { name: "Contact", href: "#" },
];
const backgroundImages = [
  "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
];
export default function Herosection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="sticky top-0 z-50 bg-white shadow">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-20 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-10" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[17px] font-semibold text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Get in touch <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop
        className="w-full h-[100%]"
      >
        {backgroundImages.map((url, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center h-screen"
              style={{ backgroundImage: `url(${url})` }}
            >
              <div className="absolute inset-0 bg-black/60 z-0" />{" "}
              {/* 👈 overlay */}
              {/* Your content goes here — copy from your original div */}
              <div className="mx-auto max-w-2xl py-20">
                <div className="text-center">
                  <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                    Transforming Digital Solutions for a Smarter Future
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Leading the way in software development, digital marketing,
                    and digital education. We create innovative solutions thatd
                    empower businesses and educational institutions.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button className="bg-[#faad29d6] text-white text-xs py-3 px-5 hover:bg-[#faad29d6] font-plus-jakarta-sans font-bold">
                      Get in touch
                    </Button>
                    <a
                      href="#"
                      className="text-sm/6 font-semibold text-gray-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis atque
        laborum eos in. Velit, rerum! Illo quam ducimus rerum ad. Consequatur
        sint provident eaque harum qui dolore velit, voluptatibus nulla.
      </p>
    </div>
  );
}
