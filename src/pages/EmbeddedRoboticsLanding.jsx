const features = [
  {
    title: "IoT Integration",
    desc: "Connect devices seamlessly to create smart, efficient systems.",
    icon: "🌐",
  },
  {
    title: "Robotics Design",
    desc: "Custom-built robots for industrial, educational, and research needs.",
    icon: "🤖",
  },
  {
    title: "Automation Solutions",
    desc: "Optimize workflows with intelligent automation and control systems.",
    icon: "⚙️",
  },
  {
    title: "AI & Machine Learning",
    desc: "Integrate AI models to make systems adaptive and intelligent.",
    icon: "🧠",
  },
  {
    title: "Embedded Hardware Prototyping",
    desc: "Rapid development of custom hardware tailored to your needs.",
    icon: "🔧",
  },
  {
    title: "Wireless Communication",
    desc: "Seamless connectivity using Bluetooth, Wi-Fi, LoRa, and more.",
    icon: "📡",
  },
];

export default function EmbeddedRoboticsLanding() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 font-plus-jakarta-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-600 to-green-600 text-white py-35 lg:py-40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center md:text-left font-plus-jakarta-sans">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-plus-jakarta-sans">
              Embedded Systems & Robotics Solutions
            </h1>
            <p className="mb-6 text-lg">
              Building the future with smart devices, automation, and
              intelligent robots.
            </p>
            <a
              href="#contact"
              className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Get Started
            </a>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1581090700227-4c4f50b6e54e?auto=format&fit=crop&w=800&q=80"
              alt="Robotics"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12 bg-gray-50 font-plus-jakarta-sans">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 font-plus-jakarta-sans">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Embedded Systems"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Innovating Through Technology
          </h2>
          <p className="mb-4">
            We specialize in embedded systems and robotics solutions that push
            the boundaries of automation and connectivity. Our team of engineers
            combines hardware and software expertise to deliver cutting-edge
            products.
          </p>
          <p>
            From concept to deployment, we ensure every project meets the
            highest standards of performance, reliability, and scalability.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 bg-gray-50 font-plus-jakarta-sans bg-green-700"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Get in Touch
          </h2>
          <form className="bg-white p-6 rounded-xl shadow-lg space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
