import React, { useState } from "react";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../Utils/validations";
import { signInApi, setTokenApi } from "../api/auth";
import { API_HOST, TOKEN } from "../Utils/constant";
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import { useRef } from "react";

const SignInForm = (props) => {
  const { setRefreshCheckLogin } = props;
  const [formData, setFormData] = useState(initialFormValue());
  const [signInLoading, setSignInLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("success");

    let validationCount = 0;
    values(formData).some((value) => {
      value && validationCount++;
      return null;
    });

    //validate the input size entered by matching args
    if (size(formData) !== validationCount) {
      toast.warning("Enter all details in the mentioned fields ");
    } else {
      if (!isEmailValid(formData.email)) {
        toast.warning("Invalid Email Entered");
      } else {
        setSignInLoading(true);
        signInApi(formData)
          .then((response) => {
            if (response.message) {
              console.log(response.message);
              //console.log(formData);
              //console.log("setTokenApi and setRefreshCheckLogin");
            } else {
              // setTokenApi(response.Token);
              localStorage.setItem(TOKEN, response.Token);
              setRefreshCheckLogin(true);
              console.log("setRefreshCheckLogin to TRUE");
            }
          })
          .catch(() => {
            toast.error("Server error, please try again later");
          })
          .finally(() => {
            setSignInLoading(false);
          });
        console.log("Login Successful");
      }
    }
    console.log(validationCount);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

          <form class="mt-6" onSubmit={onSubmit} onChange={onChange}>
            <div>
              <label class="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="emailID"
                placeholder="Enter Email Address"
                defaultValue={formData.email}
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete
                required
              ></input>
            </div>

            <div class="mt-4">
              <label class="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id=""
                defaultValue={formData.password}
                placeholder="Enter Password"
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
              role="submitForm"
              type="submit"
              class="w-full block bg-purple-500 hover:bg-purple-400 focus:bg-purple-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              {!signInLoading ? "Login to Gator News" : "check"}
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
  );
};

function initialFormValue() {
  return {
    email: "",
    password: "",
  };
}

export default SignInForm;
