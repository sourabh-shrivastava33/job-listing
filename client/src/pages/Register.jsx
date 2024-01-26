import React from "react";
import banner from "../assets/image/banner.png";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterLoginForm";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import FormRow from "../components/FormRow";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const newData = { ...data };
  delete newData.check;
  try {
    await customFetch.post("/auth/register", newData);
    toast.success("New user registered successfully");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};
const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form" method="post">
        <h3 className="form-title">Create an account</h3>
        <p className="form-text">Your personal job finder is here</p>
        <FormRow type="text" name="name" placeholder="Name" />
        <FormRow
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="username"
        />
        <FormRow type="Number" name="mobile" placeholder="Mobile" />
        <FormRow
          type="password"
          name="password"
          placeholder="password"
          autoComplete="current-password"
        />
        <div className="check">
          <input type="checkbox" name="check" className="form-check" />
          <label htmlFor="check" className="form-label check-label">
            By creating an account, I agree to our terms of use and privacy
            policy
          </label>
        </div>
        <button type="submit" className="btn form-btn" disabled={isSubmitting}>
          Create account
        </button>
        <p className="navigate">
          Already have an account? <Link to="/login">sign in</Link>
        </p>
      </Form>
      <div className="bcImage">
        <img src={banner} alt="banner" className="img img-main" />
        <p className="info">Your Personal job finder</p>
      </div>
    </Wrapper>
  );
};

export default Register;
