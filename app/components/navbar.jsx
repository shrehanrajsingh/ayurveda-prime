import Image from "next/image";
import logoPNG from "../assets/AyurCare logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full px-4 sm:px-8 md:px-16 lg:px-24 py-4 text-white flex justify-center items-center z-50">
      <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl w-full bg-emerald-900/20 border border-emerald-600/50 px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg flex items-center backdrop-blur-sm shadow-lg">
        <Link href={"/"} className="flex-shrink-0">
          <Image src={logoPNG} width={40} height={40} className="sm:w-12 sm:h-12" alt="logo" />
        </Link>
        <div className="ml-auto text-emerald-300/80 flex space-x-2 sm:space-x-4 md:space-x-6">
          {["About", "Contact", "Services", "Impact"].map((item, key) => (
            <Link 
              href={"#"} 
              className="hover:text-emerald-300 transition-colors duration-200 text-xs sm:text-sm md:text-base font-medium" 
              key={item}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
