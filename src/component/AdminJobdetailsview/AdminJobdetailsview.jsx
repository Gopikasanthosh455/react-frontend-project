import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AdminJobdetailsview() {
  return (
    <div> 
      <Row className="justify-content-center">
        <Col xs={20} md={5}>
          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <h1>Company Name</h1>
              
             
              <Card.Title>Job Title</Card.Title>
              <Card.Text>
              We are looking for candidates who have a strong background in software engineering, proficiency in relevant programming languages, and a track record of delivering scalable solutions
              </Card.Text>
              <Card.Title>industry</Card.Title>
              <Card.Text>
              The industry could be technology, finance, healthcare, education, manufacturing, retail, etc.
              </Card.Text>
              <Card.Title>Vacancy</Card.Title>
              <Card.Text>
              number of available positions 
              </Card.Text>
            
              <Card.Title>Due date</Card.Title>
              <Card.Text>
              deadline by which job seekers must submit their application for a specific job opportunity 
              </Card.Text>
              <Button className="Approve-button" variant="success" style={{ marginRight: '10px' }}>Approve</Button>
  <Button className="Reject-button" variant="danger">Reject</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AdminJobdetailsview;
