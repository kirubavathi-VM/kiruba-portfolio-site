import { contactService } from "@/services/contact.service";
import { ContactFormInputs } from "@/types/contact";
import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactInfos = [
  {
    icon: "bi bi-envelope-open",
    title: "Email Me",
    value: "kiruba17bev@gmail.com",
    href: "mailto:kiruba17bev@gmail.com",
  },
  {
    icon: "bi bi-telephone-fill",
    title: "Call Me",
    value: "+91 9080388221",
    href: "tel:+919080388221",
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/kirubavathi-vm-17bev/",
    icon: "bi bi-linkedin",
  },
  { href: "#", icon: "bi bi-github" },
];

const formFields = [
  { id: "nameInput", label: "Full Name", type: "text", field: "name" },
  { id: "emailInput", label: "Email Address", type: "email", field: "email" },
  { id: "subjectInput", label: "Subject", type: "text", field: "subject" },
];

const Contact = () => {
  const { reset, handleSubmit, register } = useForm<ContactFormInputs>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactFormInputs) => {
    setLoading(true);
    await contactService
      .sendMessage(data)
      .then(() => {
        toast.success("Message sent successfully!");
        reset();
      })
      .catch((_err) => {
        console.error(_err);
        toast.error("Something went wrong!");
      });
    setLoading(false);
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
          <span className="description-title">Get in Touch</span>
          <h2>Get in Touch</h2>
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
            <div className="contact-info-panel h-100">
              {contactInfos.map((info, idx) => (
                <div
                  key={idx}
                  className="info-card mb-4 d-flex align-items-center gap-3"
                >
                  <div className="icon-container d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className={info.icon}></i>
                  </div>
                  <div className="card-content">
                    <h4>{info.title}</h4>
                    <Link href={info.href}>
                      <p className="mb-0">{info.value}</p>
                    </Link>
                  </div>
                </div>
              ))}

              <div className="social-links-panel">
                <h5>Social Links</h5>
                <div className="social-icons d-flex gap-3">
                  {socialLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="d-flex align-items-center justify-content-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={link.icon}></i>
                    </Link>
                  ))}
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
                {formFields.map(({ id, label, type, field }) => (
                  <FloatingLabel
                    key={id}
                    controlId={id}
                    label={label}
                    className="mb-3"
                  >
                    <Form.Control
                      type={type}
                      {...register(field as keyof ContactFormInputs)}
                      placeholder={label}
                      required
                    />
                  </FloatingLabel>
                ))}

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

                <Button
                  type="submit"
                  disabled={loading}
                  className="contact-btn-submit w-100 border-0 d-flex align-items-center justify-content-center"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
