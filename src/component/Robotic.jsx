import { CheckCircle } from "lucide-react";
import img from "../assets/img/BigRoot.png";
import { ReactTyped } from "react-typed";
export default function Robotic() {
  return (
    <section className="relative w-full bg-white py-12 px-6 md:px-16 lg:px-24 overflow-hidden font-inter">
      <h1 className="text-center font-bold text-black lg:text-4xl lg:mb-10 text-3xl mb-5">
        Powering the Future of Digital Innovation
      </h1>
      <p className="text-center text-[#88918B] font-light mb-5">
        Our Platform combines AI, cloud computing and secure analytics to help
        you move faster, smarter, and safer in a digital first world.
      </p>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Robot Image */}
        <div className="flex justify-center">
          <img
            src={img}
            alt="Robotic AI"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Right Side - Content */}
        <div className="font-inter">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
            <ReactTyped
              strings={[
                " Unlock limitless opportunities",
                " Revolutionize your business operations",
                " Embrace the future of automation",
                " Innovate with cutting-edge AI technology",
              ]}
              typeSpeed={50}
              backSpeed={50}
              backDelay={2000}
              loop
              showCursor
              cursorChar="|"
            />
            <br />
            <span className="text-green-600">with intelligent robotic AI</span>
          </h2>
          {/* <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            Harness the potential of advanced automation to streamline
            operations, drive innovation, and achieve sustainable growth. Our
            AI-powered solutions adapt to your needs and help you stay ahead in
            a rapidly evolving digital world.
          </p> */}

          {/* Features */}
          <div className="mt-8 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-md">
                <CheckCircle className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Smart Solutions
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  From predictive analytics to intelligent automation, our
                  solutions are designed to solve complex challenges, boost
                  efficiency, and enable smarter decision-making.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-md">
                <CheckCircle className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Certified Expertise
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Our certified professionals bring deep technical expertise and
                  industry experience to deliver AI strategies that maximize
                  business impact while minimizing risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
