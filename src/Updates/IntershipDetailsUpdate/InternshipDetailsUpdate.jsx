import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import{Link} from 'react-router-dom';

function InternshipDetailsUpdate() {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("your_api_endpoint_here", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName,
          position,
          description,
          startDate,
          endDate,
        }),
      });
      if (response.ok) {
        console.log("Data Updated successfully");
        setCompanyName("");
        setPosition("");
        setDescription("");
        setStartDate("");
        setEndDate("");
      } else {
        console.error("Failed to Update data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Internship Details Update</h1>
      <Form className="registration-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicStartDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEndDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
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

export default InternshipDetailsUpdate;
