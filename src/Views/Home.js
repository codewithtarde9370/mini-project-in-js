import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function RandomQuote() {
  const [quote, setQuote] = useState(""); // State for the quote
  const [author, setAuthor] = useState(""); // State for the author
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner

  // Function to fetch a random quote
  const fetchRandomQuote = async () => {
    setIsLoading(true); // Show loader
    try {
      const response = await fetch("https://quotes-api-self.vercel.app/quote");
      if (!response.ok) throw new Error("Failed to fetch the quote.");
      const data = await response.json();
      setQuote(data.quote || "No quote available.");
      setAuthor(data.author || "Unknown");
      toast.success("Quote fetched successfully!");
    } catch (error) {
      toast.error("Failed to fetch a quote. Please try again.");
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
    <div
    name='home'  
    className="bg-gradient-to-r from-teal-700 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center"
    >
      {/* HotToast Notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Title */}
      <p className="text-white text-4xl mb-6 font-bold">
        Random Quote Generator
      </p>

      {/* Quote Box */}
      <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-lg">
        {/* Loading Indicator */}
        {isLoading ? (
          <div className="text-teal-700 font-medium text-lg">
            Fetching a new quote...
          </div>
        ) : (
          <>
            {/* Quote */}
            <p className="text-gray-800 text-2xl font-semibold mb-4">
              "{quote}"
            </p>
            {/* Author */}
            <p className="text-gray-600 text-lg font-medium">
              - {author}
            </p>
          </>
        )}

        {/* Fetch New Quote Button */}
        <button
          onClick={fetchRandomQuote}
          className="mt-6 py-2 px-6 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-200"
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
}

export default RandomQuote;
