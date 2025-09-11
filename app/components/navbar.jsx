"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logoPNG from "../assets/AyurCare Logo.png";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Services", href: "#" },
    { name: "Impact", href: "#impact" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Scan", href: "/scan" },
    { name: "Product Lifestyle", href: "/details" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full px-4 sm:px-8 py-3 text-white flex justify-center items-center z-50 transition-all duration-300 ${
          scrolled
            ? "bg-green-950/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl w-full flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="flex items-center">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
              <Image
                src={logoPNG}
                fill
                className="object-contain"
                alt="AyurCare Logo"
              />
            </div>
            <span className="ml-2 text-lg font-medium text-emerald-300 hidden sm:block">
              AyurCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-emerald-300/90 hover:text-emerald-300 hover:bg-emerald-900/30 rounded-md transition-all duration-200 text-sm lg:text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-emerald-300 hover:bg-emerald-900/30 focus:outline-none menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Side Navbar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-green-950/95 backdrop-blur-lg shadow-2xl z-50 transform transition-transform duration-300 ease-in-out mobile-menu ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href={"/"}
              className="flex items-center"
              onClick={handleNavItemClick}
            >
              <div className="relative h-10 w-10">
                <Image
                  src={logoPNG}
                  fill
                  className="object-contain"
                  alt="AyurCare Logo"
                />
              </div>
              <span className="ml-2 text-lg font-medium text-emerald-300">
                AyurCare
              </span>
            </Link>
            <button
              className="p-2 rounded-md text-emerald-300 hover:bg-emerald-800/30"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center px-4 py-3 text-emerald-300/90 hover:text-emerald-300 hover:bg-emerald-800/30 rounded-md transition-all duration-200"
                onClick={handleNavItemClick}
              >
                <ChevronRight className="h-4 w-4 mr-2" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="pt-6 border-t border-emerald-800/50">
              <p className="text-emerald-300/70 text-sm">
                &copy; 2025 AyurCare
              </p>
              <p className="text-emerald-300/50 text-xs mt-1">
                Tracing Ayurvedic herbs with blockchain
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
