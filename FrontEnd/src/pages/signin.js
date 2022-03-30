import React, { useState } from "react";
import SignInForm from "../components/SignInForm"

const SignIn = () => {
  const {setRefreshCheckLogin}= true; //props;

  return (
    <SignInForm setRefreshCheckLogin={setRefreshCheckLogin}/>
  );
};
export default SignIn;
