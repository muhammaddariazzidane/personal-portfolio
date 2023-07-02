import React from "react";

export default function Contact() {
  return (
    <div className="mx-auto max-w-xl px-4 lg:mb-12 mb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center font-semibold text-4xl my-5 lg:mb-12">Contact me</h1>

        <form action="" className="mb-0 mt-6 space-y-5  rounded-lg p-4 pt-12 shadow-lg shadow-slate-200 sm:p-6 ">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>

            <div className="">
              <input type="text" className="w-full rounded-md border-indigo-400 focus:outline-indigo-500 border lg:p-4 p-3 text-sm shadow-sm" placeholder="Enter your name" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Your email
            </label>

            <div className="">
              <input type="email" className="w-full rounded-md border-indigo-400 focus:outline-indigo-500 border lg:p-4 p-3 text-sm shadow-sm" placeholder="Enter your email" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Your email
            </label>

            <div className="">
              <textarea name="" id="" cols="30" rows="5" placeholder="your message" className="w-full rounded-md border-indigo-400 focus:outline-indigo-500 border lg:p-4 p-3 text-sm shadow-sm"></textarea>{" "}
            </div>
          </div>

          <button type="submit" className="block rounded-md mx-auto bg-indigo-600 lg:px-4 px-3 py-3 text-sm font-medium text-white">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
