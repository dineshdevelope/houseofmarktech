import React from "react";
import sampleVideo from "../assets/video/sample.mp4";

const Main = () => {
  return (
    <div>
      <div className="px-20">
        <div className="text-8xl font-semibold space-y-5 pt-10">
          <h1>Marketing Ignites,</h1>
          <h1>Technology Transforms,</h1>
          <h1>Sales Soar!</h1>
        </div>
        <div className="flex justify-evenly py-20">
          <video
            controls
            autoPlay={false}
            muted=""
            loop=""
            src={sampleVideo}
            width="500 height-400"
            className="cursor-pointer rounded-xl object-cover "
          ></video>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              We ignite your ideas with creative marketing, bring <br /> them to
              life with cutting-edge technology, and propel <br /> your success
              with exceptional sales. Ready to <br /> transform your vision into
              reality? Let’s achieve <br /> greatness together!
            </h1>
            <div className="text-white  py-10 px-2">
              <a className="bg-blue-700 rounded-full p-3 font-semibold text-lg hover:bg-gray-800 font-mono">
                About Us
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-5">
            <h1 className="text-center text-5xl font-semibold">
              Struggling with Challenges in the <br /> Business Industry?
            </h1>
            <h1 className="text-center text-3xl font-semibold">
              <span className="text-blue-700 ">House of Marktech</span> Delivers
              the Best Solutions to Overcome Every Obstacle.
            </h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
