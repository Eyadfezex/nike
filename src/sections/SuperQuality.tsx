import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex items-center justify-between w-full gap-14 max-lg:flex-col max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="mt-10 text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">
            We Provide You
            <span className=" text-coral-red"> Super </span>
            <span className=" text-coral-red">Quality</span> Shoes
          </span>
          <br />
          <span className="inline-block mt-3 text-coral-red">Nike</span> Shoes
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex justify-center flex-1 item-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
