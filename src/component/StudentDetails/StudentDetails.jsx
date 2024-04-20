import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./StudentDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
export default function profile() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="12" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="3"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "80px" }}
                    fluid
                  />
                  <MDBTypography tag="h5">Name</MDBTypography>
                  <MDBCardText> Btech-Department</MDBCardText>
                </MDBCol>
                <MDBCol md="9">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <Link to='/Informationupdate'>
                   <FontAwesomeIcon icon={faEdit} />
                    </Link> 
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          info@example.com
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">
                          123 456 789
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Department Details</MDBTypography>
                   <Link to='/Departmentupdate'>
                   <FontAwesomeIcon icon={faEdit} />
                    </Link> 

                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Sem</MDBTypography>
                        <MDBCardText className="text-muted">6</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Year</MDBTypography>
                        <MDBCardText className="text-muted">3rd</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBTypography tag="h6">Project Details</MDBTypography>
                    <Link to='/Projectupdate'>
                   <FontAwesomeIcon icon={faEdit} />
                    </Link> 
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Project Title</MDBTypography>
                        <MDBCardText className="text-muted">
                          Your Project Title
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Description</MDBTypography>
                        <MDBCardText className="text-muted">
                          Briefly explain the project
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Start Date</MDBTypography>
                        <MDBCardText className="text-muted">
                          Start Date 
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">End Date</MDBTypography>
                        <MDBCardText className="text-muted">
                         End Date
                        </MDBCardText>
                      </MDBCol>


                    </MDBRow>
                    <MDBTypography tag="h6">Internship Details</MDBTypography>
                    <Link to='/Internshipupdate'>
                   <FontAwesomeIcon icon={faEdit} />
                    </Link> 
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Company</MDBTypography>
                        <MDBCardText className="text-muted">
                          Company Name
                        </MDBCardText>
                      </MDBCol>

                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Description</MDBTypography>
                        <MDBCardText className="text-muted">
                          Briefly explain the internship
                        </MDBCardText>
                        </MDBCol>

                        <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Position</MDBTypography>
                        <MDBCardText className="text-muted">
                          position
                        </MDBCardText>
                        </MDBCol>

                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Start Date</MDBTypography>
                        <MDBCardText className="text-muted">
                          Start Date 
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">End Date</MDBTypography>
                        <MDBCardText className="text-muted">
                          End Date
                        </MDBCardText>
                      </MDBCol>
                      </MDBRow>
                    <MDBTypography tag="h6">Work Experience</MDBTypography>
                    <Link to='/Experienceupdate'>
                   <FontAwesomeIcon icon={faEdit} />
                    </Link> 
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                    <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Company</MDBTypography>
                        <MDBCardText className="text-muted">
                          Company Name
                        </MDBCardText>
                      </MDBCol>

                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Description</MDBTypography>
                        <MDBCardText className="text-muted">
                          Briefly explain
                        </MDBCardText>
                        </MDBCol>

                        <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Position</MDBTypography>
                        <MDBCardText className="text-muted">
                          position
                        </MDBCardText>
                        </MDBCol>

                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Start date</MDBTypography>
                        <MDBCardText className="text-muted">
                          Start Date 
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">End Date</MDBTypography>
                        <MDBCardText className="text-muted">
                         End Date
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Skills</MDBTypography>
                    <Link to='/Skillsupdate'>
                   <FontAwesomeIcon icon={faEdit} />
                    </Link> 
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Skills</MDBTypography>
                        <MDBCardText className="text-muted">
                          Enter skills
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
