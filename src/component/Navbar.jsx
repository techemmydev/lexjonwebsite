import { Link, useLocation } from "react-router";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo/calogo.png";
import Button from "./Button";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/aboutus" },
  {
    label: "Services",
    path: "/services",
    // children: [
    //   { label: "Full-Stack Development", path: "/fullstack" },
    //   { label: "Robotics & Automation", path: "/services/robotics" },
    //   { label: "Embedded Systems", path: "/services/embedded" },
    //   { label: "Software Engineering", path: "/services/software-engineering" },
    //   { label: "Digital Literacy", path: "/services/digital-literacy" },
    //   { label: "Hands-on Projects", path: "/services/projects" },
    // ],
  },
  // {
  //   label: "Products",
  //   // path: "/product",
  //   children: [
  //     { label: "Product A", path: "/product" },
  //     { label: "Product B", path: "/product/b" },
  //   ],
  // },
  // { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for mobile dropdowns
  const location = useLocation();

  // const isActive = (path) => location.pathname === path;
  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow font-inter">
      <nav
        className="flex items-center justify-between px-4 py-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.path}
                className={`flex items-center gap-1 text-base font-semibold ${
                  isActive(item.path)
                    ? "text-green-900 font-extrabold"
                    : "text-black hover:text-green-800"
                }`}
              >
                {item.label}
                {item.children && (
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown menu */}
              {item.children && (
                <div className="absolute left-0 top-full hidden w-48 rounded-lg bg-white shadow-lg group-hover:block">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button className="bg-green-800 text-white px-5 py-3 text-sm font-bold hover:bg-green-700 transition">
            <Link to="/contact" className="text-sm font-semibold text-white">
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-green-950 p-6 sm:ring-1 sm:ring-gray-900/10 overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img src={logo} alt="Logo" className="h-16 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon className="h-8 w-8 text-white" />
            </button>
          </div>

          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <div key={item.label}>
                <div
                  className={`flex justify-between items-center rounded-lg px-3 py-4 text-xl font-semibold cursor-pointer ${
                    isActive(item.path)
                      ? "text-white bg-green-900 font-extrabold"
                      : "text-white hover:text-green-700"
                  }`}
                  onClick={() =>
                    item.children
                      ? setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      : setMobileMenuOpen(false)
                  }
                >
                  <Link
                    to={item.path}
                    onClick={() => !item.children && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-lg text-white hover:text-green-400"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-2xl font-semibold text-white hover:text-green-700"
            >
              Get in touch
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
