import React from 'react';

const SignUp = () => {
  return (
    <section class="flex flex-col md:flex-row h-full items-center">
      <div
        class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
      >
        <div class="w-full h-full">
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-4">
            Register Today
          </h1>

          <form class="mt-6">
          <div className="flex flex-wrap -mx-3 mb-6">
          <div class="mt-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block text-gray-700">First Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter First Name"
                minlength="6"
                class="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500
                  focus:bg-white focus:outline-none"
                required
              ></input>
            </div>

            <div class="mt-2 w-full md:w-1/2 px-3">
              <label class="block text-gray-700">Last Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Last Name"
                minlength="6"
                class="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500
                  focus:bg-white focus:outline-none"
                required
              ></input>
            </div>
            </div>
            <div class="mt-2">
              <label class="block text-gray-700">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                class="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              ></input>
            </div>

            <div class="mt-2">
              <label class="block text-gray-700">Password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                minlength="6"
                class="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500
                  focus:bg-white focus:outline-none"
                required
              ></input>
            </div>

            <div class="mt-2">
              <label class="block text-gray-700">Gender</label>
              <div class="relative">
              <select class="block appearance-none w-full bg-gray-200 border focus:border-purple-500 focus:bg-white focus:outline-none text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Male</option>
                <option>Female</option>
                
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 py-1 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            <div class="mt-2">
              <label class="block text-gray-700">Address </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Full Address"
                minlength="6"
                class="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500
                  focus:bg-white focus:outline-none"
                required
              ></input>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
            <div class="mt-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block text-gray-700">City </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter City"
                minlength="6"
                class="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500
                  focus:bg-white focus:outline-none"
                required
              ></input>
            </div>

            <div class="mt-2 w-full md:w-1/2 px-3">
              <label class="block text-gray-700">State </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter State"
                minlength="6"
                class="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500
                  focus:bg-white focus:outline-none"
                required
              ></input>
            </div>

            <div class="mt-2 w-full md:w-1/3 px-3">
              <label class="block text-gray-700">Country</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Country"
                minlength="6"
                class="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500
                  focus:bg-white focus:outline-none"
                required
              ></input>
            </div>
            </div>

            </div> 

            

            <button
              type="submit"
              class="w-full block bg-purple-500 hover:bg-purple-400 focus:bg-purple-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              Sign Up
            </button>
          </form>
          <hr class="my-6 border-gray-300 w-full"></hr>
          <p class="mt-5">
            Already an existing user?{" "}
            <a
              href="#"
              class="text-purple-500 hover:text-purple-700 font-semibold"
            >
              Login here
            </a>
          </p>

          <p class="text-sm text-gray-500 mt-6">
            &copy; 2022 - All Rights Reserved.
          </p>
        </div>
      </div>
      
      <div class="bg-purple-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80"
              alt=""
              class="w-full h-full object-contain "
            ></img>
          </div>
          
    </section>
  );
};

export default SignUp;
