import React from "react";
import { width } from "tailwindcss/defaultTheme";

const Contact = () => {
  const handleSubmit = () => {
    console.log("Form Submitted");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          
        }}
        className="bg-img"
      >
        <form
          className="w-full max-w-lg bg-white rounded-md text-center px-5 py-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Santosh"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Maturi"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
              ></textarea>
            </div>
          </div>
          <div className=" md:items-center text-center">
            <div className="items-center text-center" role="dialog"> 
              <button
                className="
                w-full block bg-purple-500 hover:bg-purple-400 focus:bg-purple-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
