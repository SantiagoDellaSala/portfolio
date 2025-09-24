import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "Plan Básico",
    shortDesc: "Landing page moderna con React y Bootstrap.",
    longDesc: "Link: https://basic-web-phi.vercel.app/",
    img: "/landing-page.png",
    link: "#"
  },
  {
    id: 2,
    title: "Proyecto 2",
    shortDesc: "Web institucional para empresa ficticia.",
    longDesc: "Proyecto de sitio web corporativo con varias secciones, formulario de contacto y optimización mobile.",
    img: "/web-institucional.png",
    link: "#"
  },
  {
    id: 3,
    title: "Proyecto 3",
    shortDesc: "Tienda online simple con carrito funcional.",
    longDesc: "Ejemplo de e-commerce con productos ficticios, carrito y botones de acción, todo implementado en React.",
    img: "web-carrito.png",
    link: "#"
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="portfolio-section py-5">
      <Container>
        <h2 className="text-center mb-5">Proyectos</h2>
        <Row className="g-4">
          {PROJECTS.map((p, i) => (
            <Col key={p.id} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card
                  className="h-100 bg-secondary text-white shadow-lg cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                >
                  <Card.Img variant="top" src={p.img} className="portfolio-img" />
                  <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>{p.shortDesc}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Modal */}
        <Modal
          show={selectedProject !== null}
          onHide={() => setSelectedProject(null)}
          centered
          size="lg"
        >
          {selectedProject && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedProject.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="img-fluid mb-3"
                />
                <p>{selectedProject.longDesc}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="primary"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proyecto
                </Button>
                <Button variant="secondary" onClick={() => setSelectedProject(null)}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
}
