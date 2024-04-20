import React from "react";
import { Link } from "react-router-dom";
import "./AddDetails.css";

function AddDetails() {
  return (
    <div className="add-details-background">
      <div className="link-container">
        <div className="link-item">
          <Link to="/information">
            <div className="link-button">
              <span>Information</span>
            </div>
          </Link>
        </div>
        <div className="link-item">
          <Link to="/departmentDetails">
            <div className="link-button">
              <span>Department Details</span>
            </div>
          </Link>
        </div>
        <div className="link-item">
          <Link to="/projectDetails">
            <div className="link-button">
              <span>Project Details</span>
            </div>
          </Link>
        </div>
        <div className="link-item">
          <Link to="/internshipDetails">
            <div className="link-button">
              <span>Internship Details</span>
            </div>
          </Link>
        </div>
        <div className="link-item">
          <Link to="/workExperience">
            <div className="link-button">
              <span>Work Experience Details</span>
            </div>
          </Link>
        </div>
        <div className="link-item">
          <Link to="/skills">
            <div className="link-button">
              <span>Skill</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddDetails;
