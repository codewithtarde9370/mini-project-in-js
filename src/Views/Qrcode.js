import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Qrcode() {
  const [inputText, setInputText] = useState(""); // State for input text or URL
  const [qrCodeUrl, setQrCodeUrl] = useState(""); // State for the QR Code URL

  // Function to generate the QR Code
  const generateQrCode = () => {
    if (inputText.trim()) {
      // Construct the QR Code URL using the API
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
        inputText
      )}`;
      setQrCodeUrl(apiUrl);
      toast.success("QR Code generated successfully!");
    } else {
      toast.error("Please enter valid text or a URL!");
    }
  };

  return (
    <div
      name="Qrcode"
      className="bg-gradient-to-r from-violet-950 to-rose-950 min-h-screen flex flex-col items-center justify-center"
    >
      {/* HotToast Notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Title */}
      <p className="text-white text-4xl mb-6 font-bold">
        Generate a QR Code from Text or URL
      </p>

      {/* Input and QR Code Section */}
      <div className="w-full max-w-md p-8 rounded-lg shadow-xl bg-white">
        <p className="text-gray-700 font-semibold mb-3">
          Enter Text or URL to Generate
        </p>

        {/* Input Field */}
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-900 focus:border-rose-900 transition duration-200"
          type="text"
          placeholder="Enter your text or URL here"
          required
        />

        {/* Generate Button */}
        <button
          onClick={generateQrCode}
          className="w-full py-2 mb-4 bg-rose-900 text-white font-medium rounded-lg shadow-lg hover:bg-violet-950 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75 transition duration-200"
        >
          Generate QR Code
        </button>

        {/* Display QR Code */}
        {qrCodeUrl && (
          <div className="flex justify-center mt-4">
            <img
              src={qrCodeUrl}
              alt="Generated QR Code"
              className="border border-gray-300 shadow-lg rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Qrcode;
