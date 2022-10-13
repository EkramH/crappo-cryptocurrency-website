import React from "react";

const NewsLetterForm = () => {
  return (
    <div>
      <form className="flex-1 flex flex-col items-center w-full gap-y-6 lg:flex-row lg:gap-x-10">
        <input
          type="email"
          placeholder="Enter your email"
          className="input text-base text-white placeholder:text-white placeholder:text-base"
        />
        <button className="btn bg-white text-darkblue px-8 hover:bg-white/70">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterForm;
