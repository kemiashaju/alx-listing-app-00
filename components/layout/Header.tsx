import React from "react";

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">StayFinder</h1>

        <input
          type="text"
          placeholder="Search destinations..."
          className="border px-4 py-2 rounded-lg w-1/2 hidden md:block"
        />

        <div className="flex gap-4 items-center">
          <button className="px-4 py-2">Sign In</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className="flex gap-6 px-6 py-3 text-sm overflow-x-auto border-t">
        {["Rooms", "Mansion", "Countryside", "Villa", "Apartments", "City View"].map(
          (item, i) => (
            <span key={i} className="cursor-pointer hover:text-blue-600">
              {item}
            </span>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;
