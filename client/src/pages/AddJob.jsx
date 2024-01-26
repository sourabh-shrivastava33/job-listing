import React from "react";
import banner2 from "../assets/image/banner2.png";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { JOB_TYPE, LOCATION_PREFERENCE } from "../utils/constant.js";
import FormRowTextArea from "../components/FormRowTextArea.jsx";
import { Form, redirect, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/CreateEditForm.js";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const file = formData.get("logoUrl");
  if (file && file.size >= 500000) {
    toast.error("File must be smaller than 0.5MB");
  }
  try {
    await customFetch.post("/jobs", formData);

    toast.success("New job created");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};
const AddJob = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="create-page">
        <Form className="form" method="POST" encType="multipart/form-data">
          <h4 className="form-title">Add Job Description</h4>
          <div className="form-center">
            <FormRow
              type="text"
              name="companyName"
              placeholder="Enter company name here"
              label="Company name"
            />
            <FormRow
              type="file"
              accept="image/*"
              name="logoUrl"
              placeholder="Enter the link"
              label="Add logo url"
            />
            <FormRow
              type="text"
              name="jobPosition"
              placeholder="Enter Job position"
              label="Job position"
            />
            <FormRow
              type="text"
              name="monthlySalary"
              placeholder="Enter amount in rupees"
              label="Monthly salary"
            />
            <FormRowSelect
              name="jobType"
              label="Job type"
              list={Object.values(JOB_TYPE)}
            />
            <FormRowSelect
              name="locationPreference"
              label="Remote/office"
              list={Object.values(LOCATION_PREFERENCE)}
            />
            <FormRow
              type="text"
              name="location"
              placeholder="Enter Location"
              label="Location"
            />
            <FormRowTextArea
              name="jobDescription"
              placeholder="Add job description here"
              label="Job  description"
            />
            <FormRowTextArea
              name="aboutCompany"
              placeholder="Type about your company"
              label="About company"
            />
            <FormRow
              type="text"
              name="skillsRequired"
              placeholder="Enter must have skills eg. html,css,js"
              label="Skills required"
            />
            <FormRow
              type="text"
              name="information"
              placeholder="Enter additional information"
              label="Information"
            />
            <FormRow
              type="text"
              name="jobDuration"
              placeholder="Enter duration of job"
              label="Job duration"
            />
            <FormRow
              type="text"
              name="companySize"
              placeholder="Enter size of your company"
              label="Company size"
            />
          </div>
          <div className="cta-btns">
            <button type="submit" className="btn submit-btn">
              Add job+
            </button>
            <button
              type="button"
              className="btn cancel-btn"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </Form>
        <div className="banner-cont">
          <img src={banner2} alt="banner" className="img main-img" />
          <p className="img-text">Recruiter add job detail here</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddJob;
