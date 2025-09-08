import { Arima } from "next/font/google";
import image3 from "../assets/i4.jpg";

const arimaFont = Arima({
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${image3.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative flex flex-col items-center">
        <h2 className="text-emerald-600 text-3xl font-bold mb-1">
          Trace the journey of
        </h2>
        <div className="relative">
          <h1
            className={`${arimaFont.className} text-9xl font-bold bg-linear-to-b from-green-600 to-emerald-800 text-transparent bg-clip-text relative z-10`}
          >
            Ayurveda
          </h1>
          <div className="absolute -left-40 w-1/4 top-1/2 -translate-y-1/2 h-2 rounded-full bg-green-800 z-0"></div>
          <div className="absolute -right-40 w-1/4 top-1/2 -translate-y-1/2 h-2 rounded-full bg-green-800 z-0"></div>
        </div>
      </div>

      <div className="mt-10 flex gap-6">
        <button className="px-6 cursor-pointer py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-emerald-500/30 hover:-translate-y-1 border border-emerald-600">
          Create Account
        </button>
        <button className="px-6 cursor-pointer py-3 bg-black/80 hover:bg-black text-emerald-400 hover:text-emerald-300 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-black/40 hover:-translate-y-1 border border-emerald-800">
          Login
        </button>
      </div>
    </div>
  );
}
