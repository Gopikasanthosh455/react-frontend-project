import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import{Link} from 'react-router-dom';

function DepartmentDetailsUpdate() {
  const [formData, setFormData] = useState({
    sem: "",
    year: "",
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
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Data Updated Successfully:", data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Department Details Update</h1>
      <Form className="registration-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicSem">
          <Form.Label>Semester</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter semester"
            name="sem"
            value={formData.sem}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicYear">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter year"
            name="year"
            value={formData.year}
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

export default DepartmentDetailsUpdate;
