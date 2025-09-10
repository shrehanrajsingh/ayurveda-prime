import { Arima } from "next/font/google";
import image3 from "../assets/i4.jpg";
import Link from "next/link";

const arimaFont = Arima({
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${image3.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex flex-col items-center text-center">
        <h2 className="text-emerald-600 text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">
          Discover the digital journey of
        </h2>
        <div className="relative">
          <h1
            className={`${arimaFont.className} text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-b from-green-600 to-emerald-800 text-transparent bg-clip-text relative z-10`}
          >
            Ayurveda
          </h1>
          <div className="absolute left-0 sm:-left-20 md:-left-32 lg:-left-40 w-1/6 sm:w-1/4 top-1/2 -translate-y-1/2 h-1 sm:h-2 rounded-full bg-green-800 z-0"></div>
          <div className="absolute right-0 sm:-right-20 md:-right-32 lg:-right-40 w-1/6 sm:w-1/4 top-1/2 -translate-y-1/2 h-1 sm:h-2 rounded-full bg-green-800 z-0"></div>
        </div>
        <p className="text-emerald-100 text-sm sm:text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
          Experience the future of traditional medicine through blockchain transparency and AI-powered insights
        </p>
      </div>

      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
        <Link
          href={"/signup"}
          className="px-6 md:px-8 py-3 md:py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-emerald-500/30 hover:-translate-y-1 border border-emerald-600 text-center"
        >
          Create Account
        </Link>
        <Link
          href={"/login"}
          className="px-6 md:px-8 py-3 md:py-4 bg-black/80 hover:bg-black text-emerald-400 hover:text-emerald-300 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-black/40 hover:-translate-y-1 border border-emerald-800 text-center"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
