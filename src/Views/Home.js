import React, { useState, useEffect } from 'react';
import './Home.css';
import Tweet from './../images/Daily Quote/twitter.png';

function Home() {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("Loading...");
  const apiUrl = "https://quotes-api-self.vercel.app/quote";

  const getQuote = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQuote(data.content || "Quote not available.");
      setAuthor(data.author || "Anonymous");
    } catch (error) {
      console.error("Error fetching the quote:", error.message);
      setQuote("Unable to fetch quote.");
      setAuthor("Unknown");
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="bg-gray-100 h-screen w-full flex items-center justify-center">
      <div className="w-96 p-8 rounded-lg shadow-xl bg-white relative">
        <h2 className="text-center text-3xl font-semibold text-blue-600 border-b-2 border-blue-500 pb-2 mb-4">
          Quote of the Day
        </h2>
        <blockquote className="text-center text-lg italic text-gray-700 mb-4">
          {quote === "Loading..." ? <span className="loader"></span> : `"${quote}"`}
        </blockquote>
        <span className="block text-right text-gray-500 text-sm">
          - {author}
        </span>
        <div className="mt-6 flex justify-evenly">
          <button
            onClick={getQuote}
            className="px-5 py-2 bg-blue-500 text-white font-medium rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200"
          >
            New Quote
          </button>
          <button
            className="flex items-center px-5 py-2 bg-blue-500 text-white font-medium rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200"
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?text="${quote}" - ${author}`,
                "_blank"
              )
            }
          >
            <img className="h-5 w-5 mr-2" alt="Twitter icon" src={Tweet} />
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
