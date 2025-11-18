import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";

export default function Home() {
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Pet Friendly",
    "Mountain View",
    "Beachfront",
    "Free Parking",
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="w-full h-[60vh] bg-cover bg-center flex items-center px-6"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div>
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="text-lg text-white mt-2 drop-shadow-md">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>
