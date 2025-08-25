import { Button, Card, Col, Container, Row } from "react-bootstrap";

const projectsData = [
  {
    img: "/images/projects/hydrasave.png",
    title: "HydraSave",
    desc: "Data normalization tool built using React and Next.js for efficient and accurate data processing.",
    link: "https://hydrasave.com/",
  },
  {
    img: "/images/projects/kirubot.png",
    title: "AI Chatbot (KiruBot)",
    desc: "Interactive AI chatbot developed using Llama 3.1 and LangChain to handle real-time user queries.",
    link: "https://github.com/kirubavathi-VM/ChatBot_AI/blob/main/chatBot.py",
  },
  {
    img: "/images/projects/portfolio.png",
    title: "Portfolio Website",
    desc: "Responsive personal portfolio website created with React and Bootstrap to showcase projects and skills.",
    link: "https://my-portfolio-kirubavathi-vms-projects.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <Container>
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <span className="description-title">Projects</span>
          <h2>Projects</h2>
          <p>
            Here are some of the projects I've worked on that showcase my skills
            in frontend and backend development. Each project reflects my
            dedication to creating user-friendly and efficient applications.
          </p>
        </div>
      </Container>

      <Container>
        <Row className="g-4">
          {projectsData.map((project, index) => (
            <Col
              key={index}
              lg={4}
              md={6}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100} 
              data-aos-duration="800"
            >
              <div className="project-card">
                <div className="project-card-inner">
                  <Card.Img
                    className="rounded-4 mb-4"
                    src={project.img}
                    alt={project.title}
                  />
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-button">
                    <Button
                      className="primary-button"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <i className="bi bi-link-45deg"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
