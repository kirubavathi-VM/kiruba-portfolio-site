import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleMobileNavToggle = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const handleNavLinkClick = (id: string) => {
    setActiveLink(id);
    if (isMobileNavActive) setIsMobileNavActive(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <Navbar
        className={`d-flex align-items-center fixed-top header ${
          isMobileNavActive ? "mobile-nav-active" : ""
        }`}
      >
        <Container
          fluid
          className="header-container container-xl position-relative d-flex align-items-center justify-content-between"
        >
          <Link
            href="/"
            className="logo d-flex align-items-center me-auto me-xl-0"
            onClick={() => handleNavLinkClick("home")}
          >
            <h1 className="sitename">KIRUBA</h1>
          </Link>

          <Nav className="navmenu">
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={activeLink === item.id ? "active" : ""}
                    onClick={() => handleNavLinkClick(item.id)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <i
              className={`mobile-nav-toggle d-xl-none bi ${
                isMobileNavActive ? "bi-x" : "bi-list"
              }`}
              onClick={handleMobileNavToggle}
            ></i>
          </Nav>

          <div className="header-social-links">
            <Link
              href="#"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </Link>

            <Link
              href="https://www.linkedin.com/in/kirubavathi-vm-17bev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
