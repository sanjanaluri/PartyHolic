
import React from "react";
import { Link } from 'react-router-dom'
import SignInForm from "../components/SignInForm"


const SignIn = (props) => {
  const {setRefreshCheckLogin}= props;


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
              <Link to="/sign-up"> Create an account </Link>
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

  return (
    <SignInForm setRefreshCheckLogin={setRefreshCheckLogin}/>
  );
};
export default SignIn;
