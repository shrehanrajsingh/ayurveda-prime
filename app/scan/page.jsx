"use client";

import { useState, useRef } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/navigation";
import image4 from "../assets/i4.jpg";
import { Arima } from "next/font/google";

const arimaFont = Arima({
  subsets: ["latin"],
});

export default function Scan() {
  const [scanResult, setScanResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const router = useRouter();

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Reset states
    setScanResult(null);
    setErrorMessage("");
    setIsLoading(true);

    // Check if file is an image
    if (!file.type.match("image.*")) {
      setErrorMessage("Please upload an image file");
      setIsLoading(false);
      return;
    }

    // Preview the image
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
    };
    reader.readAsDataURL(file);

    // Simulate QR code processing
    setTimeout(() => {
      processQRCode(file);
    }, 1500);
  };

  // Function to process QR code
  const processQRCode = (file) => {
    // In a real app, you would use a QR code reader library like jsQR
    // For this demo, we'll simulate finding a product ID
    const mockProductId = "AYUR" + Math.floor(1000 + Math.random() * 9000);

    setIsLoading(false);
    setScanResult({
      productId: mockProductId,
      scannedAt: new Date().toLocaleString(),
      type: "Ashwagandha Root Extract",
    });
  };

  // Function to handle click on upload button
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Function to view product details
  const viewProductDetails = () => {
    if (scanResult && scanResult.productId) {
      router.push(`/details/${scanResult.productId}`);
    }
  };

  return (
    <div
      className="w-full h-screen overflow-y-scroll bg-gradient-to-b from-green-950 to-emerald-800 flex justify-center items-center"
      style={{
        backgroundImage: `url(${image4.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />

      <div className="w-3xl rounded-lg px-8 py-16 shadow-xl">
        <div className="flex justify-center items-center w-full gap-8 mb-8 relative">
          <div className="h-0.5 w-1/6 bg-gradient-to-r from-transparent to-green-400 opacity-70"></div>
          <h1
            className={`${arimaFont.className} text-6xl md:text-7xl font-bold text-transparent bg-clip-text relative`}
            style={{
              backgroundImage:
                "linear-gradient(to right, #4ade80, #10b981, #047857)",
              textShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
            }}
          >
            SCAN QR
          </h1>
          <div className="h-0.5 w-1/6 bg-gradient-to-l from-transparent to-green-400 opacity-70"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-emerald-600/20 border-2 border-emerald-500/50 rounded-lg mb-6 relative flex justify-center items-center">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-400"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-400"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-400"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-400"></div>

            {isLoading ? (
              <div className="text-emerald-200/70 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-400 mx-auto mb-4"></div>
                <p>Processing QR code...</p>
              </div>
            ) : previewImage ? (
              <img
                src={previewImage}
                alt="Uploaded QR"
                className="max-w-full max-h-full object-contain rounded"
              />
            ) : (
              <div className="text-emerald-200/70 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto mb-4 text-emerald-400/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
                <p>Camera viewfinder will appear here</p>
              </div>
            )}
          </div>

          <p className="text-emerald-200 mb-4 text-center">
            {errorMessage ? (
              <span className="text-red-300">{errorMessage}</span>
            ) : (
              "Position the QR code within the frame to scan"
            )}
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors shadow-lg">
              Start Scan
            </button>
            <button
              onClick={handleUploadClick}
              className="px-6 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-md transition-colors shadow-lg"
            >
              Upload QR
            </button>
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />
          </div>

          {scanResult && (
            <div className="mt-6 w-full max-w-md bg-emerald-900/50 p-4 rounded-lg border border-emerald-700">
              <h3 className="text-emerald-200 font-semibold mb-2">
                Scan Result:
              </h3>
              <div className="space-y-2 text-white">
                <p>
                  <span className="text-emerald-300">Product ID:</span>{" "}
                  {scanResult.productId}
                </p>
                <p>
                  <span className="text-emerald-300">Type:</span>{" "}
                  {scanResult.type}
                </p>
                <p>
                  <span className="text-emerald-300">Scanned At:</span>{" "}
                  {scanResult.scannedAt}
                </p>
              </div>
              <button
                onClick={viewProductDetails}
                className="mt-4 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors shadow-lg"
              >
                View Product Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
