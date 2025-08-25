import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="section">
      <Container>
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <span className="description-title">About</span>
          <h2>About</h2>
        </div>
      </Container>

      <Container>
        <Row className="gy-4">
          {/* about me */}
          <Col
            lg={7}
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <div className="about-content">
              <div className="about-info">
                <p>
                  I’m Kirubavathi, a passionate <strong>Frontend</strong> and{" "}
                  <strong>Full-Stack Web Developer</strong> specializing in
                  creating dynamic, responsive, and user-friendly interfaces
                  using <strong>React.js, Next.js and Typescript</strong>.
                </p>
                <p>
                  I build scalable, efficient, and cross-browser-compatible web
                  solutions that perform optimally across all devices. With
                  experience in backend development using{" "}
                  <strong>Python and Django</strong>, I collaborate effectively
                  with backend teams to enhance functionality and user-centric
                  products. Experienced with{" "}
                  <strong>Git, GitHub, and Jira</strong>, ensuring smooth
                  collaboration and efficient project management.
                </p>
              </div>
            </div>
          </Col>

          <Col
            lg={5}
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <div className="education-card d-flex align-items-start">
              <div className="icon-box">
                <i className="bi bi-mortarboard icon"></i>
              </div>
              <div className="ms-3">
                <h4>Education</h4>
                <h6 className="fw-bold">
                  B.E. in Computer Science and Engineering
                </h6>
                <p className="text-white">2014 - 2018</p>
                <p>
                  Green Tech College of Engineering for Women, Salem <br />
                </p>
                <p className="fw-bold text-white">CGPA: 8.24/10</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
