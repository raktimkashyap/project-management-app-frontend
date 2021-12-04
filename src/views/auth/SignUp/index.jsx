import React, { useState } from "react";
import { userSignUp } from "../../../features/authSlice";
import SignUpView from "./SignUpView";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function SignUp() {
  const { authenticating } = useSelector((state) => state.authReducer);

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    fullName: "",
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

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!authenticating) {
      dispatch(userSignUp(user));
    }
  };

  return (
    <SignUpView
      user={user}
      handleSignUp={handleSignUp}
      handleChange={handleChange}
      handleClickShowPassword={handleClickShowPassword}
      showPassword={showPassword}
      authenticating={authenticating}
    />
  );
}
