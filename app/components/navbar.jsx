import Image from "next/image";
import logoPNG from "../assets/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full px-24 py-4 text-white flex justify-center items-center z-50">
      <div className="max-w-3xl w-3xl bg-emerald-0 border border-emerald-600 px-8 py-2 rounded-sm flex items-center backdrop-blur-sm">
        <Image src={logoPNG} width={48} height={48} alt="logo" />
        <div className="ml-auto text-emerald-300/80 flex w-1/2">
          {["About", "Contact", "Services", "Testimonials"].map((i, key) => (
            <Link href={"#"} className="hover:text-emerald-300 mx-auto" key={i}>
              {i}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
