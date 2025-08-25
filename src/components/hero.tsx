"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Web Developer",
          "Front-end Developer",
          "Full Stack Developer",
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id="hero" className="section hero">
      <Container className="hero-container">
        <Row className="align-items-center">
          <Col lg="6" className="hero-content">
            <h1
              className="title"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              KIRUBAVATHI
            </h1>

            <p
              className="lead"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              I'm a <span ref={typedRef}></span>
            </p>

            <div
              className="description"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <p>
                Full Stack Developer specializing in React, Next.js, and Python.
                I create responsive, high-performance applications with clean
                code.
              </p>
            </div>

            <div
              className="hero-buttons"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <Link
                href="/resume/Kirubavathi_VM_Resume.pdf"
                className="primary-btn"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <i className="bi bi-download"></i>
              </Link>
              <Link href="#contact" className="secondary-btn">
                Get In Touch
                <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
          </Col>

          {/* Hero Image */}
          <Col
            lg="6"
            className="hero-visual d-none d-lg-block"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            <div className="image-wrapper">
              <Image
                src="/images/hero.png"
                alt="Creative Design"
                className="main-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
