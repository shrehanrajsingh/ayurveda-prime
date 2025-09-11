"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Arima } from "next/font/google";
import {
  Leaf,
  QrCode,
  ArrowRight,
  Info,
  Clock,
  MapPin,
  Database,
} from "lucide-react";
import Navbar from "../components/navbar";
import image4 from "../assets/i4.jpg";

const arimaFont = Arima({
  subsets: ["latin"],
});

export default function Details() {
  const router = useRouter();

  const handleScanClick = () => {
    router.push("/scan");
  };

  return (
    <div
      className="w-full min-h-screen bg-gradient-to-b from-green-950 to-emerald-800 flex flex-col items-center"
      style={{
        backgroundImage: `url(${image4.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      <div className="w-full max-w-5xl px-6 py-16 mt-12">
        <div className="flex justify-center items-center w-full gap-8 mb-12 relative">
          <div className="h-0.5 w-1/6 bg-gradient-to-r from-transparent to-green-400 opacity-70"></div>
          <h1
            className={`${arimaFont.className} text-5xl md:text-6xl font-bold text-transparent bg-clip-text relative text-center`}
            style={{
              backgroundImage:
                "linear-gradient(to right, #4ade80, #10b981, #047857)",
              textShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
            }}
          >
            Product Lifecycle
          </h1>
          <div className="h-0.5 w-1/6 bg-gradient-to-l from-transparent to-green-400 opacity-70"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-950/90 via-emerald-900/90 to-green-950/90 border border-green-800/50 p-8">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-emerald-900/80 border-2 border-emerald-500/50 flex items-center justify-center shadow-lg shadow-emerald-900/30">
                <QrCode className="h-10 w-10 text-emerald-400" />
              </div>
            </div>

            <h2
              className={`${arimaFont.className} text-3xl font-bold text-emerald-400 text-center mb-4`}
            >
              Scan QR Code
            </h2>

            <p className="text-gray-300 text-center mb-6">
              Use our scanner to instantly view the complete journey of any
              Ayurvedic product - from seed to shelf.
            </p>

            <div className="flex justify-center">
              <button
                onClick={handleScanClick}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white rounded-lg transition-all duration-300 shadow-lg shadow-emerald-900/30 transform hover:scale-105"
              >
                <span>Scan Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start p-6 rounded-xl bg-gradient-to-br from-green-950/90 via-emerald-900/90 to-green-950/90 border border-green-800/50 shadow-xl">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-emerald-900/80 border border-emerald-500/50 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-emerald-300 text-xl font-semibold mb-2">
                  Authentic Source Verification
                </h3>
                <p className="text-gray-300">
                  Verify the origin and cultivation practices of medicinal herbs
                  with complete transparency.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-xl bg-gradient-to-br from-green-950/90 via-emerald-900/90 to-green-950/90 border border-green-800/50 shadow-xl">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-emerald-900/80 border border-emerald-500/50 flex items-center justify-center">
                <Clock className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-emerald-300 text-xl font-semibold mb-2">
                  Complete Timeline
                </h3>
                <p className="text-gray-300">
                  Follow the product's journey from plantation to processing and
                  distribution with date-stamped milestones.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-xl bg-gradient-to-br from-green-950/90 via-emerald-900/90 to-green-950/90 border border-green-800/50 shadow-xl">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-emerald-900/80 border border-emerald-500/50 flex items-center justify-center">
                <Database className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-emerald-300 text-xl font-semibold mb-2">
                  Blockchain Verification
                </h3>
                <p className="text-gray-300">
                  Immutable blockchain records ensure the authenticity and
                  quality of every Ayurvedic product.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-br from-green-950/90 via-emerald-900/90 to-green-950/90 border border-green-800/50 rounded-2xl p-8 shadow-2xl">
          <h2
            className={`${arimaFont.className} text-2xl font-bold text-emerald-400 text-center mb-6`}
          >
            Why Product Lifecycle Matters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-950/50 border border-green-800/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-semibold mb-3 flex items-center">
                <div className="h-8 w-8 rounded-full bg-emerald-900/80 border border-emerald-500/50 flex items-center justify-center mr-3">
                  <span className="text-emerald-400 font-bold">1</span>
                </div>
                Authenticity
              </h3>
              <p className="text-gray-300 text-sm">
                Verify that your Ayurvedic products are authentic and sourced
                from certified organic farms and trusted suppliers.
              </p>
            </div>

            <div className="bg-green-950/50 border border-green-800/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-semibold mb-3 flex items-center">
                <div className="h-8 w-8 rounded-full bg-emerald-900/80 border border-emerald-500/50 flex items-center justify-center mr-3">
                  <span className="text-emerald-400 font-bold">2</span>
                </div>
                Sustainability
              </h3>
              <p className="text-gray-300 text-sm">
                Understand the environmental impact of each product and how
                sustainable practices are implemented throughout its lifecycle.
              </p>
            </div>

            <div className="bg-green-950/50 border border-green-800/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-semibold mb-3 flex items-center">
                <div className="h-8 w-8 rounded-full bg-emerald-900/80 border border-emerald-500/50 flex items-center justify-center mr-3">
                  <span className="text-emerald-400 font-bold">3</span>
                </div>
                Quality Assurance
              </h3>
              <p className="text-gray-300 text-sm">
                Review detailed quality testing results and certifications that
                ensure the efficacy and safety of your Ayurvedic products.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black/40 backdrop-blur-sm py-8 mt-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-emerald-300 mb-4">
            AyurCare's blockchain-powered traceability system ensures complete
            transparency in the Ayurvedic supply chain.
          </p>
          <button
            onClick={handleScanClick}
            className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-md transition-colors shadow-lg"
          >
            <QrCode className="h-4 w-4" />
            <span>Scan a Product QR Code</span>
          </button>
        </div>
      </div>
    </div>
  );
}
