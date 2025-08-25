import { Col, Container, Row } from "react-bootstrap";
import { HtmlIcon } from "@/icons/htmlIcon";
import { CssIcon } from "@/icons/cssIcon";
import { JavascriptIcon } from "@/icons/javascriptIcon";
import { ReactIcon } from "@/icons/reactIcon";
import { NextJsIcon } from "@/icons/nextJsIcon";
import { TypescriptIcon } from "@/icons/typescriptIcon";
import { BootstrapIcon } from "@/icons/bootstrapIcon";
import { SassIcon } from "@/icons/sassIcon";
import { PythonIcon } from "@/icons/pythonIcon";
import { SqlIcon } from "@/icons/sqlIcon";
import { GitHubIcon } from "@/icons/gitHubIcon";
import { GitIcon } from "@/icons/gitIcon";

const skillsData = [
  { icon: <HtmlIcon />, label: "HTML" },
  { icon: <CssIcon />, label: "CSS" },
  { icon: <JavascriptIcon />, label: "JavaScript" },
  { icon: <ReactIcon />, label: "React" },
  { icon: <NextJsIcon />, label: "Next.js" },
  { icon: <TypescriptIcon />, label: "TypeScript" },
  { icon: <BootstrapIcon />, label: "Bootstrap" },
  { icon: <SassIcon />, label: "SASS" },
  { icon: <PythonIcon />, label: "Python" },
  { icon: <SqlIcon />, label: "SQL" },
  { icon: <GitHubIcon />, label: "GitHub" },
  { icon: <GitIcon />, label: "Git" },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <Container>
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <span className="description-title">Skills</span>
          <h2>Skills</h2>
          <p>
            I have a strong foundation in front-end and back-end development
            through various technologies. This section showcases my proficiency
            levels in each.
          </p>
        </div>
      </Container>

      <Container
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="800"
      >
        <Row className="gy-4 gx-3">
          {skillsData.map((skill, index) => (
            <Col
              key={index}
              lg={2}
              md={3}
              sm={6}
              xs={6}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <div className="skills-item d-flex flex-column align-items-center justify-content-center">
                {skill.icon}
                <h3>{skill.label}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
