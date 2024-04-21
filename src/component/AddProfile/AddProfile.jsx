import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function AddProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    URL: "",
    number: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("YOUR_API_ENDPOINT_HERE", formData);
      console.log("Data Submitted Successfully:", res.data);
      // Optionally, you can redirect the user to another page or show a success message
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle error, show error message to user, etc.
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Add Profile</h1>
      <Form className="registration-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicURL">
          <Form.Label>Website URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter URL"
            name="URL"
            value={formData.URL}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Company Overview</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Add Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Company Icon Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
          />
        </Form.Group>

        {formData.image && (
          <div className="mb-3">
            <img
              src={formData.image}
              alt="Company Icon"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        )}

        <Link to="/recruiterProfile">
          <Button className="submit-button" variant="primary" type="submit">
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default AddProfile;
