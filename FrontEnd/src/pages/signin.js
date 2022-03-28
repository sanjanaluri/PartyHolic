import React from "react";

const SignIn = () => {
  return (
    <section class="flex flex-col md:flex-row h-full items-center">
      <div
        class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
      >
        <div class="w-full h-100">
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
            Log in to your account
          </h1>

          <form class="mt-6">
            <div>
              <label class="block text-gray-700">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              ></input>
            </div>

            <div class="mt-4">
              <label class="block text-gray-700">Password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                minlength="6"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500
                  focus:bg-white focus:outline-none"
                required
              ></input>
            </div>

            <div class="text-right mt-2">
              <a class="text-sm font-semibold text-gray-700 hover:text-purple-700 focus:text-purple-700">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              class="w-full block bg-purple-500 hover:bg-purple-400 focus:bg-purple-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>
          <hr class="my-6 border-gray-300 w-full"></hr>
          <p class="mt-8">
            Need an account?{" "}
            <a
              href="#"
              class="text-purple-500 hover:text-purple-700 font-semibold"
            >
              Create an account
            </a>
          </p>

          <p class="text-sm text-gray-500 mt-12">
            &copy; 2022 - All Rights Reserved.
          </p>
        </div>
      </div>
      <div class="bg-purple-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80"
              alt=""
              class="w-full h-full object-cover"
            ></img>
          </div>
    </section>
  );
};

export default SignIn;
