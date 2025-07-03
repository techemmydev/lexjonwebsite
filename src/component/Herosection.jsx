import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo/calogo.png"; // Adjust the path as necessary
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
import heroimage from "../assets/logo/Heroimage.jpg"; // Adjust the path as necessary
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
    <div
      className={`font-plus-jakarta-sans bg-cover bg-center bg-no-repeat `}
      style={{ backgroundImage: `url(${heroimage})` }}
    >
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
                className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${
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
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 ${
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

      {/* Hero Section with dark overlay */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

        <div
          className="relative z-10 mx-auto max-w-2xl lg:py-25 py-10"
          data-aos="fade-left"
        >
          <div className="text-center text-white">
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
              className="sm:block text-xl sm:text-2xl lg:text-4xl font-bold leading-tight font-plus-jakarta-sans"
            />
            <p
              className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8"
              data-aos="fade-left"
            >
              Leading the way in software development, digital marketing, and
              digital education. We create innovative solutions that empower
              businesses and educational institutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="bg-[#faad29d6] text-white text-xs py-3 px-5 hover:bg-[#b37b1e] font-plus-jakarta-sans font-bold cursor-pointer">
                Get in touch
              </Button>
              <Link
                to="#"
                className="text-sm/6 font-semibold text-white border border-[#faad29d6] px-4 py-2 rounded-lg transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
