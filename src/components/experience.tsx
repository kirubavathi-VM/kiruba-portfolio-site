import { Col, Container, Row } from "react-bootstrap";

const Experience = () => {
  const experiences = [
    {
      role: "Front-end Developer",
      company: "TITO",
      duration: "Feb 2023 - Present",
      description:
        "Developed the HydraSave web application for NITTO, a data normalization tool that enables users to input raw data, which is then processed and displayed in both graphical and tabular formats. Built dynamic user interfaces using React.js and Next.js, implemented user authentication, and collaborated with backend developers to enhance website functionality. Utilized Jira for project management and Git for version control.",
    },
    {
      role: "AI Chatbot Developer",
      company: "(Personal Project)",
      duration: "",
      description:
        "Developed an AI chatbot named KiruBot utilizing Ollama's LLM (Llama 3.1) integrated with Langchain, to create a dynamic conversational model. The chatbot features a user-friendly interface built with Streamlit, facilitating engaging conversations. It dynamically processes user inputs, delivering relevant and context-aware responses in real-time by removing special characters from the responses.",
    },
  ];

  return (
    <section id="experience" className="section">
      <Container>
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <span className="description-title">Experience</span>
          <h2>Experience</h2>
        </div>
      </Container>

      <Container>
        <Row className="gy-4">
          {experiences.map((exp, index) => (
            <Col
              key={index}
              lg={6}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              data-aos-duration="800"
            >
              <div className="experience-cards">
                <div className="experience-card">
                  <div className="card-header d-flex justify-content-between align-items-start">
                    <div className="role-info">
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                    </div>
                    {exp.duration && (
                      <span className="duration">{exp.duration}</span>
                    )}
                  </div>
                  <div className="card-body">
                    <p>{exp.description}</p>
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

export default Experience;
