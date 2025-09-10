import { Arima } from "next/font/google";
import Navbar from "../components/navbar";

import image4 from "../assets/i4.jpg";
import Link from "next/link";

const arimaFont = Arima({
  subsets: ["latin"],
});

export default function Login() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${image4.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <div className="max-w-3xl w-3xl h-128">
        <div className="flex justify-center items-center w-full gap-8 mb-8 relative">
          <div className="h-0.5 w-1/6 bg-gradient-to-r from-transparent to-green-400 opacity-70"></div>
          <h1
            className={`${arimaFont.className} text-5xl md:text-6xl font-bold text-transparent bg-clip-text relative`}
            style={{
              backgroundImage:
                "linear-gradient(to right, #4ade80, #10b981, #047857)",
              textShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
            }}
          >
            Login
          </h1>
          <div className="h-0.5 w-1/6 bg-gradient-to-l from-transparent to-green-400 opacity-70"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg w-full">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-emerald-100 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/20 border border-emerald-300/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-emerald-200/50 text-white"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-emerald-100 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-white/20 border border-emerald-300/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-emerald-200/50 text-white"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-emerald-100"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-emerald-300 hover:text-emerald-200"
              >
                Forgot password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-emerald-300/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-emerald-200">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-emerald-300/30 rounded-lg shadow-sm bg-white/10 hover:bg-white/20 text-sm font-medium text-emerald-100 transition-all duration-200">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-emerald-300/30 rounded-lg shadow-sm bg-white/10 hover:bg-white/20 text-sm font-medium text-emerald-100 transition-all duration-200">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z" />
                </svg>
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-emerald-300/30 rounded-lg shadow-sm bg-white/10 hover:bg-white/20 text-sm font-medium text-emerald-100 transition-all duration-200">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.46,6c-0.77,0.35-1.6,0.58-2.46,0.69c0.88-0.53,1.56-1.37,1.88-2.38c-0.83,0.5-1.75,0.85-2.72,1.05C18.37,4.5,17.26,4,16,4c-2.35,0-4.27,1.92-4.27,4.29c0,0.34,0.04,0.67,0.11,0.98C8.28,9.09,5.11,7.38,3,4.79C2.63,5.42,2.42,6.16,2.42,6.94c0,1.49,0.75,2.81,1.91,3.56C3.6,10.5,2.96,10.3,2.38,10c0,0.02,0,0.03,0,0.05c0,2.08,1.48,3.82,3.44,4.21c-0.36,0.1-0.74,0.15-1.13,0.15c-0.27,0-0.54-0.03-0.8-0.08c0.54,1.69,2.11,2.95,4,2.98c-1.46,1.16-3.31,1.84-5.33,1.84c-0.35,0-0.69-0.02-1.02-0.06C3.44,20.29,5.7,21,8.12,21C16,21,20.33,14.46,20.33,8.79c0-0.19,0-0.37-0.01-0.56C21.22,7.78,21.9,6.96,22.46,6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-emerald-200">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-emerald-400 hover:text-emerald-300"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
