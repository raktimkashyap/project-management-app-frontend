import React, { useState } from "react";
import SignInView from "./SignInView";
import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "../../../features/authSlice";

export default function SignIn() {
  const { authenticating } = useSelector((state) => state.authReducer);

  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!authenticating) {
      dispatch(userSignIn(user));
    }
  };

  return (
    <SignInView
      showPassword={showPassword}
      user={user}
      handleClickShowPassword={handleClickShowPassword}
      handleChange={handleChange}
      authenticating={authenticating}
      handleSignIn={handleSignIn}
    />
  );
}
