import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 bg-gray-400 py-5">
      <div>
        <img
          src="https://www.houseofmarktech.com/assets/HOM%20logo-CUW_Wu4h.png"
          alt="Homepage Logo"
          className="bg-gray-400 w-28"
        />
      </div>

      <div className="">
        <ol className="flex space-x-10 font-semibold text-slate-300 text-lg ">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">About</li>
          <li className="hover:underline">Our Work</li>
          <li className="hover:underline">Solutions</li>
          <li className="hover:underline">Blogs</li>
          <li className="hover:underline">Case Study</li>
          <li className="hover:underline">Referral</li>
          <li className="hover:underline">Pricing</li>
          <li className="hover:underline">Login</li>
        </ol>
      </div>
      <div className="flex space-x-10 items-center">
        <div className="text-white font-bold p-4 bg-blue-600 hover:bg-gray-900 rounded-full  ">
          𝅘𝅥𝅮
        </div>
        <div>
          <h1 className="bg-gray-900 rounded-full p-3 text-lg text-white font-bold hover:bg-blue-600 ">
            Let's Talk
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
