
import React from "react";
import { Link } from 'react-router-dom'
import SignInForm from "../components/SignInForm"


const SignIn = (props) => {
  const {setRefreshCheckLogin}= props;

  return (
    <SignInForm setRefreshCheckLogin={setRefreshCheckLogin}/>
  );
};
export default SignIn;
