import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Auth.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/EMS.png";
import chatify from "../../Assets/Projects/Ecommerce.png";
import suicide from "../../Assets/Projects/landing.png";
import bitsOfCode from "../../Assets/Projects/Task.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ecommerce Store"
              description="This MERN Stack Ecommerce Store is a complete online shopping platform built with MongoDB, Express.js, React.js, and Node.js. It features a responsive React frontend for users to browse products, view details, manage their cart, and place secure orders. The backend handles APIs for product management, user authentication, and order processing, with MongoDB storing all user, product, and order data. JWT-based authentication ensures secure, role-based access for both users and admins. Admins can add/edit products, manage orders, and monitor inventory through a dedicated dashboard. The project reflects real-world structure, ideal for learning or deployment."
              ghLink="https://github.com/wasifali2004/Full-Stack-Ecommerce-MERN"
              demoLink="https://forever-ecom.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Task Management"
              description="This MERN Stack Task Management App is a full-stack productivity tool built with MongoDB, Express.js, React.js, and Node.js. It allows users to create, update, delete, and track tasks in a simple and intuitive interface. The React frontend provides a user-friendly dashboard to organize tasks by status (e.g., pending, in-progress, completed). The backend handles secure API routes for task CRUD operations and user authentication using JWT. MongoDB stores user-specific tasks and related data. "
              ghLink="https://github.com/wasifali2004/Task-Management"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="EMS"
              description="An Employee Management System (EMS) built using React and Local Storage is a simple yet effective single-page application for managing employee records without requiring a backend or database. It allows users to add, edit, view, and delete employee details like name, email, designation, and department. All data is stored in the browser's localStorage, ensuring persistence across sessions without needing a server. The React UI provides a dynamic and responsive interface with forms for data entry and tables or cards to display employee information. It's ideal for learning purposes or small-scale use where a lightweight, client-side solution is sufficient."
              ghLink="https://github.com/wasifali2004/EMS"
              demoLink="https://ems-gules.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ecommerce Landing Page"
              description="An Amazon Landing Page is a front-end clone inspired by Amazon’s homepage, typically built using HTML, CSS, and JavaScript (or React for dynamic behavior). It features a clean, responsive layout showcasing key sections like a navigation bar, search bar, banner carousel, product cards, and footer links. Products are displayed with images, prices, and ratings to mimic the real Amazon experience. "
              ghLink="https://github.com/wasifali2004/React-Projects/tree/main/Ecommerce"
              demoLink="https://ecommerce-ochre-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MERN Auth"
              description="MERN Auth is a full-stack authentication system built with MongoDB, Express.js, React.js, and Node.js. It allows users to sign up, log in, and log out securely using JWT (JSON Web Tokens) for authentication and bcrypt for password hashing. "
              ghLink="https://github.com/wasifali2004/Mern-Auth"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Image Enhancer"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/wasifali2004/Image-Enhancer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
