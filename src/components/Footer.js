import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import Logo2 from "../assets/img/Logo2.gif";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={Logo2} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
           <a href="https://www.linkedin.com/in/gaurav-rathore-889bb6304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} alt="" /></a>
                          <a href="https://www.facebook.com/share/18fq8LcQov/"><img src={navIcon2} alt="" /></a>
                          <a href="https://www.instagram.com/gaurav_rathore_77?utm_source=qr&igsh=MWhieGh6dDBoOWdjcg=="><img src={navIcon3} alt="" /></a>
            </div>
            <p>This website showcases showcases Gaurav's work and skills</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
