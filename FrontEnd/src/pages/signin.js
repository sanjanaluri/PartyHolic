import React, { useState } from "react";
import SignInForm from "../components/SignInForm"

const SignIn = (props) => {
  const {setRefreshCheckLogin}= props;

  return (
    <SignInForm setRefreshCheckLogin={setRefreshCheckLogin}/>
  );
};
export default SignIn;
