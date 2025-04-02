import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import pro1 from "../assets/img/pro1.jpg";
import cap2 from "../assets/img/cap2.jpg";
import cap3 from "../assets/img/cap3.jpg";
import cap4 from "../assets/img/cap4.jpg";
import cap5 from "../assets/img/cap5.jpg";
import cap6 from "../assets/img/cap6.jpg";
import cap8 from "../assets/img/cap8.jpg";
import cap7 from "../assets/img/cap7.jpg";
import cap9 from "../assets/img/cap9.jpg";
import cap10 from "../assets/img/cap10.jpg";
import cap11 from "../assets/img/cap11.jpg";
import cap12 from "../assets/img/cap12.jpg";
import cap13 from "../assets/img/cap13.jpg";
import cap14 from "../assets/img/cap14.jpg";
import cap1 from "../assets/img/cap1.jpg";
// import cap1 from "../assets/img/cap1.jpg";
// import cap1 from "../assets/img/cap1.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap11,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap12,
    },
  ];
  const projects1 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap7,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap8,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap9,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap13,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap5,
    },
  ];
  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap10,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cap14,
    },
  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have built multiple high-quality projects using the MEN (MongoDB, Express.js, Node.js) stack and React.js. Some of them are live, showcasing real-world usability and efficiency.

My work focuses on performance-driven development, intuitive UI/UX, and optimized backend architecture. I specialize in role-based authentication, microservices, and scalable web applications.

Stay tuned for more updates on my latest projects!

</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}