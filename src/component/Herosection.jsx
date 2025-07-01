import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo/calogo.png"; // Adjust the path as necessary
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/aboutus" },
  { label: "Services", path: "/service" },
  { label: "Products", path: "/product" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export default function Herosection() {
  const location = useLocation();

  function isActive(routes) {
    return location.pathname === routes;
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white font-plus-jakarta-sans">
      <header className="sticky top-0 z-50 bg-white shadow">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-18 w-auto" />
            </Link>
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
              <Link
                key={item.label}
                to={item.path}
                className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  ${
                  isActive(item.path)
                    ? "text-green-900 font-extrabold"
                    : "text-black hover:text-green-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="#" className="text-sm/6 font-semibold text-gray-900">
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
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
              <Link to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </Link>
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
                    <Link
                      key={item.label}
                      to={item.path}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-gray-50  ${
                        isActive(item.path)
                          ? "text-[red] font-extrabold"
                          : "text-black hover:text-sky-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl lg:py-25 py-10 " data-aos="fade-left">
          <div className="text-center ">
            <ReactTyped
              strings={[
                "Transforming Digital Solutions for a Smarter Future",
                "Empowering Businesses Through Innovation",
                "Driving Growth with Next-Gen Technologies",
                "Crafting Seamless Digital Experiences",
                "Building Software for the Intelligent Enterprise",
              ]}
              typeSpeed={50}
              backSpeed={50}
              backDelay={2000}
              loop
              showCursor
              cursorChar="|"
              className=" sm:block text-xl sm:text-2xl lg:text-4xl font-bold leading-tight font-plus-jakarta-sans"
            />

            {/* <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Transforming Digital Solutions for a Smarter Future
            </h1> */}
            <p
              className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
              data-aos="fade-left"
            >
              Leading the way in software development, digital marketing, and
              digital education. We create innovative solutions that empower
              businesses and educational institutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className=" bg-[#faad29d6] text-white text-xs py-3 px-5 hover:bg-[#b37b1e] font-plus-jakarta-sans font-bold cursor-pointer">
                Get in touch
              </Button>
              <Link
                to="#"
                className="text-sm/6 font-semibold text-gray-900 border border-[#faad29d6] px-4 py-2 rounded-lg  transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        ></div>
      </div>
    </div>
  );
}
