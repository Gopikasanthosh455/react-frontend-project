import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import{Link} from 'react-router-dom';

function WorkExperienceUpdate() {
  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("YOUR_API_ENDPOINT_HERE", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      console.log("Data Updated Successfully");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Work Experience Details Update</h1>
      <Form className="registration-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicStartDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter start date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEndDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter end date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </Form.Group>

        <Link to='/studentDashboard'>
        <Button className="submit-button" variant="primary" type="submit">
         Update
        </Button></Link>
      </Form>
    </div>
  );
}

export default WorkExperienceUpdate;
