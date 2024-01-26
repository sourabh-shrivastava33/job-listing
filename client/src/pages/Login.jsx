import React from "react";
import banner from "../assets/image/banner.png";
import { Form, Link, redirect, unstable_HistoryRouter } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterLoginForm";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import FormRow from "../components/FormRow";
export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    await customFetch.post("/auth/login", data);
    toast.success("User logged in successfully");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  return (
    <Wrapper>
      <Form className="form" method="post">
        <h3 className="form-title">Already have an account?</h3>
        <p className="form-text">Your personal job finder is here</p>
        <FormRow
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="username"
        />
        <FormRow
          type="password"
          name="password"
          placeholder="password"
          autoComplete="current-password"
        />
        <button type="submit" className="btn form-btn">
          Sign in
        </button>
        <p className="navigate">
          Don’t have an account? <Link to="/register">sign up</Link>
        </p>
      </Form>
      <div className="bcImage">
        <img src={banner} alt="banner" className="img img-main" />
        <p className="info">Your Personal job finder</p>
      </div>
    </Wrapper>
  );
};

export default Login;
