import React from "react";
import logo1 from "../images/logo-1.png";
import logo2 from "../images/logo-2_boy-image.png";
import logo3 from "../images/logo-3.png";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start mt-12 mx-4 md:mx-20 lg:mx-40 mb-16 gap-10">
      {/* Left Container */}
      <div className="flex flex-col gap-5 md:w-1/2">
        <img
          src={logo1}
          alt="image_one"
          className="h-auto w-full max-w-[478px] self-end"
        />

        <div className="relative w-full bg-slate-500 flex justify-center items-center rounded-xl overflow-hidden min-h-[250px] md:min-h-[316px]">
          <img
            src={logo2}
            alt="image_2"
            className="absolute h-[400px] md:h-[538px] w-[250px] md:w-[323px] bottom-0 left-0 top-1 object-contain"
          />
          <p className="font-semibold text-4xl md:text-6xl text-white text-end ml-[150px] md:ml-[314px] leading-tight">
            We are Future
          </p>
        </div>

        <img
          src={logo3}
          alt="image_3"
          className="h-auto w-full max-w-[478px]"
        />
      </div>

      {/* Right Container */}
      <div className="flex flex-col gap-6 p-5 md:pt-28 md:w-1/2">
        <p className="text-blue-700 font-medium text-lg leading-7">About us</p>
        <p className="font-bold tracking-tight max-w-[359px] text-3xl md:text-4xl leading-tight">
          We Shape Future By Building Stunning Products
        </p>

        <div>
          <p className="max-w-[500px] font-medium md:font-bold text-[18px] md:text-[22px] leading-8 text-[#657790]">
            We are a group of digital strategists, technologists, and masterminds. Together, we aspire to co-imagine
            the future by adding our unparalleled ability pulled from a different catalogue of businesses. Our
            experience, skills in modern frameworks and tools, dedicated teams, and resources working alongside many
            clients across the globe prepare us to carry elegance and insight to each project we attempt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
