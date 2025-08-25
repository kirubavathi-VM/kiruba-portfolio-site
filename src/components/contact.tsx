import { contactService } from "@/services/contact.service";
import Link from "next/link";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { reset, handleSubmit, register } = useForm();

  const onSubmit = (data: any) => {
    contactService
      .sendMessage(data)
      .then(() => {
        toast.success("Message sent successfully!");
        reset();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <section id="contact" className="section">
      <Container>
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <span className="description-title">Contact</span>
          <h2>Contact</h2>
        </div>
      </Container>

      <Container>
        <Row className="gy-4">
          <Col
            lg={4}
            xs={12}
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <div className="contact-info-panel">
              <div className="info-card mb-4">
                <div className="icon-container">
                  <i className="bi bi-envelope-open"></i>
                </div>
                <div className="card-content">
                  <h4>Email Me</h4>
                  <Link href="mailto:kiruba17bev@gmail.com">
                    <p>kiruba17bev@gmail.com</p>
                  </Link>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-container">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="card-content">
                  <h4>Call Me</h4>
                  <Link
                    href="tel:+919080388221"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>+91 9080388221</p>
                  </Link>
                </div>
              </div>

              <div className="social-links-panel">
                <h5>Social Links</h5>
                <div className="social-icons">
                  <Link
                    href="https://www.linkedin.com/in/kirubavathi-vm-17bev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </Link>

                  <Link
                    href="#"
                    // target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={8}
            xs={12}
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <div className="form-container">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FloatingLabel
                  controlId="nameInput"
                  label="Full Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    {...register("name")}
                    placeholder="Full Name"
                    required
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="emailInput"
                  label="Email Address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    {...register("email")}
                    placeholder="Email Address"
                    required
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="subjectInput"
                  label="Subject"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    {...register("subject")}
                    placeholder="Subject"
                    required
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="messageInput"
                  label="Your Message"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    {...register("message")}
                    placeholder="Your Message"
                    rows={4}
                    required
                  />
                </FloatingLabel>

                <Button type="submit" className="contact-btn-submit w-100">
                  Send Message
                </Button>
              </Form>

              {/* Toast Container */}
              <ToastContainer position="top-right" theme="dark" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
