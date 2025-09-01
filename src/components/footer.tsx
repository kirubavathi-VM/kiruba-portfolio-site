import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="text-center copyright">
        <p className="mb-0">
          Copyright © {new Date().getFullYear()}{" "}
          <strong className="px-1 sitename">Kirubavathi.</strong> All Rights
          Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
