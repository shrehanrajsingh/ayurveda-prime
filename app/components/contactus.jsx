import { Arima } from "next/font/google";

const arimaFont = Arima({
  subsets: ["latin"],
});

export default function ContactUs() {
  return (
    <div
      className="bg-emerald-950 py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      <div className="flex justify-center items-center w-full gap-4 sm:gap-6 md:gap-8 mb-16 md:mb-24 relative">
        <div className="h-0.5 w-1/6 bg-gradient-to-r from-transparent to-green-400 opacity-70"></div>
        <h1
          className={`${arimaFont.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text relative text-center`}
          style={{
            backgroundImage:
              "linear-gradient(to right, #4ade80, #10b981, #047857)",
            textShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
          }}
        >
          Contact Us
        </h1>
        <div className="h-0.5 w-1/6 bg-gradient-to-l from-transparent to-green-400 opacity-70"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-emerald-900/50 backdrop-blur-sm rounded-xl shadow-2xl shadow-emerald-900/20 p-6 md:p-8 lg:p-10 border border-emerald-800/30">
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-emerald-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-emerald-950/80 border border-emerald-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none transition-all text-white placeholder-emerald-600 text-sm md:text-base"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-emerald-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-emerald-950/80 border border-emerald-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none transition-all text-white placeholder-emerald-600 text-sm md:text-base"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-emerald-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded-lg bg-emerald-950/80 border border-emerald-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none transition-all text-white placeholder-emerald-600"
                placeholder="How can we help you?"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-emerald-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-emerald-950/80 border border-emerald-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none transition-all text-white placeholder-emerald-600 resize-none"
                placeholder="Please describe your inquiry in detail..."
                required
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-medium rounded-lg shadow-lg shadow-emerald-700/30 hover:shadow-emerald-600/40 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-emerald-900/30 border border-emerald-800/30 hover:bg-emerald-800/30 transition-all">
            <div className="w-12 h-12 mx-auto bg-emerald-700/50 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-emerald-300">Phone</h3>
            <p className="mt-2 text-emerald-400">+91 98765 43210</p>
          </div>

          <div className="p-6 rounded-xl bg-emerald-900/30 border border-emerald-800/30 hover:bg-emerald-800/30 transition-all">
            <div className="w-12 h-12 mx-auto bg-emerald-700/50 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-emerald-300">Email</h3>
            <p className="mt-2 text-emerald-400">info@ayurcare.com</p>
          </div>

          <div className="p-6 rounded-xl bg-emerald-900/30 border border-emerald-800/30 hover:bg-emerald-800/30 transition-all">
            <div className="w-12 h-12 mx-auto bg-emerald-700/50 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-emerald-300">Location</h3>
            <p className="mt-2 text-emerald-400">
              123 Ayurveda Lane,
              <br />
              Wellness District, Kerala
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
