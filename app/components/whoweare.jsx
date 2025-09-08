import { Arima, Merriweather, Roboto } from "next/font/google";

import image9 from "../assets/i9.jpg";
import image10 from "../assets/i10.jpg";
import Image from "next/image";

const arimaFont = Arima({
  subsets: ["latin"],
});

const robotoFont = Roboto({
  subsets: ["latin"],
});

const merriweatherFont = Merriweather({
  subsets: ["latin"],
});

export default function WhoWeAre() {
  return (
    <section
      className="w-full min-h-screen py-24 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgb(5, 25, 10) 0%, rgb(12, 45, 22) 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-green-500 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-emerald-600 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-teal-500 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-center items-center w-full gap-8 mb-24 relative">
          <div className="h-0.5 w-1/6 bg-gradient-to-r from-transparent to-green-400 opacity-70"></div>
          <h1
            className={`${arimaFont.className} text-6xl md:text-7xl font-bold text-transparent bg-clip-text relative`}
            style={{
              backgroundImage:
                "linear-gradient(to right, #4ade80, #10b981, #047857)",
              textShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
            }}
          >
            Who We Are
          </h1>
          <div className="h-0.5 w-1/6 bg-gradient-to-l from-transparent to-green-400 opacity-70"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div
            className="transform transition-all duration-700 hover:scale-102"
            data-aos="fade-right"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
                <div className="border-t-[6px] border-white/80 rounded-lg shadow-2xl overflow-hidden">
                  <Image
                    src={image9}
                    alt="Geotagging an Ayurveda Field"
                    className="w-full h-auto transition-transform duration-700 hover:scale-110"
                    style={{ filter: "saturate(1.1)" }}
                  />
                </div>
                <div className="bg-gradient-to-r from-white to-gray-100 text-gray-800 p-4 rounded-b-lg shadow-lg">
                  <p
                    className={`${robotoFont.className} font-bold italic text-sm md:text-base tracking-wide`}
                  >
                    Geotagging an Ayurveda Field in Guwahati. September, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center ${merriweatherFont.className} pl-0 lg:pl-12`}
            data-aos="fade-left"
          >
            <p className="text-xl md:text-2xl text-green-50 leading-relaxed mb-8 backdrop-blur-sm bg-black/10 p-8 rounded-lg shadow-inner border border-green-900/30">
              <span className="text-5xl font-light text-green-400 drop-shadow-lg mr-3 float-left mt-1">
                W
              </span>
              e are a multinational brand producing who partner up with
              certified organic and Ayurvedic health products (like Tulsi
              infusions), and equip them with a blockchain and digitization
              platform, to promote transparency and sustainability in its supply
              chain.
            </p>

            <p className="text-xl md:text-2xl text-green-50 leading-relaxed backdrop-blur-sm bg-black/10 p-8 rounded-lg shadow-inner border border-green-900/30">
              <span className="text-5xl font-light text-green-400 drop-shadow-lg mr-3 float-left mt-1">
                W
              </span>
              e also utilize Artificial Intelligence in analyzing genomic,
              lifestyle, and environmental data to develop targeted treatment
              plans.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div
            className={`flex flex-col justify-center ${merriweatherFont.className} pr-0 lg:pr-12 order-2 lg:order-1`}
            data-aos="fade-right"
          >
            <p className="text-xl md:text-2xl text-green-50 leading-relaxed mb-8 backdrop-blur-sm bg-black/10 p-8 rounded-lg shadow-inner border border-green-900/30">
              <span className="text-5xl font-light text-green-400 drop-shadow-lg mr-3 float-left mt-1">
                B
              </span>
              lockchain-powered system promotes sustainable and ethical
              procurement by ensuring compliance with regulatory standards and
              preventing the exploitation of natural resources.
            </p>

            <p className="text-xl md:text-2xl text-green-50 leading-relaxed backdrop-blur-sm bg-black/10 p-8 rounded-lg shadow-inner border border-green-900/30">
              <span className="text-5xl font-light text-green-400 drop-shadow-lg mr-3 float-left mt-1">
                B
              </span>
              y integrating AI and blockchain, the Ayurvedic industry can
              achieve greater transparency, quality assurance, and supply chain
              efficiency, ensuring that only genuine, high-quality Ayurvedic
              products reach consumers.
            </p>
          </div>

          <div
            className="transform transition-all duration-700 hover:scale-102 order-1 lg:order-2"
            data-aos="fade-left"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
                <div className="border-t-[6px] border-white/80 rounded-lg shadow-2xl overflow-hidden">
                  <Image
                    src={image10}
                    alt="Fields equipped with our services"
                    className="w-full h-auto transition-transform duration-700 hover:scale-110"
                    style={{ filter: "saturate(1.1)" }}
                  />
                </div>
                <div className="bg-gradient-to-r from-white to-gray-100 text-gray-800 p-4 rounded-b-lg shadow-lg">
                  <p
                    className={`${robotoFont.className} font-bold italic text-sm md:text-base tracking-wide`}
                  >
                    Fields equipped with our services. December, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="w-full flex justify-center">
          <div className="h-1 w-1/3 bg-gradient-to-r from-green-700 via-emerald-500 to-green-700 rounded-full opacity-70"></div>
        </div>
      </div>
    </section>
  );
}
