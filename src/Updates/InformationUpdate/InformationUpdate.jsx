import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import{Link} from 'react-router-dom';

function InformationUpdate() {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    email: "",
    number: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("your_api_endpoint_here", {
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
      setSuccess(true);
      setError(null);
    } catch (error) {
      console.error("Error Updating data:", error.message);
      setError("Error updating data. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Information Update</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Data updated successfully!</Alert>}
      <Form className="registration-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number"
            name="number"
            value={formData.number}
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

export default InformationUpdate;
