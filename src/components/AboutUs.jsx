import React from "react";

const AboutUs = () => {
  return (
    <div id="About" className=" flex mq925:flex-col   justify-center p-4 ">
      <div className="flex-1">
        <img
          className="h-[100%] w-[100%] object-contain"
          alt=""
          src="/group-189@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center mq450:items-center items-center">
        <h1 className="gap-x-3 font-text-heading mq450:text-21xl mq925:text-21xl text-61xl">
          <span className="text-color-primary-color-2">About</span>
          <span className="text-gradient ml-2">Us</span>
        </h1>
        <div className="self-stretch relative text-5xl text-center font-text-body-2 text-color-text-color z-[1] ">
          Book of Apes is a dynamic crypto project that merges the worlds of
          blockchain technology and creative expression. Our team is passionate
          about fostering a vibrant community of creators and collectors, driven
          by the principles of decentralization and ownership. With a commitment
          to innovation and inclusivity, we strive to revolutionize the way
          digital art and collectibles are created, shared, and valued.
        </div>
        <button className="cursor-pointer [border:none]  p-4  mx-4 bg-color-primary-color-2 rounded-xl flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full hover:bg-deepskyblue-100 mq450:pl-5 mq450:pr-5 mq450:box-border text-13xl leading-[150%]  font-text-body-2 text-color-background-color text-center font-medium mt-16">
          Buy On Pinksale
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
