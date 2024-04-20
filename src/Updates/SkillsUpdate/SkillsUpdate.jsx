import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import{Link} from 'react-router-dom';

function SkillsUpdate() {
  const [skill, setSkill] = useState("");

  const handleChange = (e) => {
    setSkill(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { skill }; 

    try {
      const response = await fetch("YOUR_API_ENDPOINT_HERE", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Skill Updated Successfully");
      } else {
        console.error("Failed to update skill:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting skill:", error);
    }
  };

  return (
    <div className="box-container">
      <h1 className="heading">Skills Update</h1>
      <Form className="registration-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicSkills">
          <Form.Label>Skills</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter skills"
            value={skill}
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

export default SkillsUpdate;
