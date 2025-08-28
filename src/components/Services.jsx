import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "basico",
    title: "Básico",
    price: "USD 80",
    tag: "Landing simple",
    bullets: [
      "1 sección (Presentación + Contacto)",
      "Responsive (móvil + desktop)",
      "Deploy en Netlify/Vercel"
    ]
  },
  {
    id: "intermedio",
    title: "Intermedio",
    price: "USD 150",
    tag: "Web institucional",
    bullets: [
      "Hasta 3 secciones (Inicio / Servicios / Contacto)",
      "Formulario de contacto conectado",
      "Optimización básica mobile"
    ]
  },
  {
    id: "premium",
    title: "Premium",
    price: "USD 250",
    tag: "Sitio completo",
    bullets: [
      "Hasta 5 secciones",
      "Animaciones y micro-interacciones",
      "SEO básico + optimización velocidad"
    ]
  }
];

export default function Services() {
  return (
    <section id="servicios" className="services-section section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-2">Servicios</h2>
          <p className="text-center mb-5">
            Paquetes pensados para emprendedores y pymes. Precios claros y entregas rápidas.
          </p>
        </motion.div>

        <Row className="g-4">
          {SERVICES.map((s, i) => (
            <Col key={s.id} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.99 }}
              >
                <Card className="service-card h-100">
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <Card.Title className="mb-0">{s.title}</Card.Title>
                        <Card.Subtitle className="small">{s.tag}</Card.Subtitle>
                      </div>
                      <div className="price">{s.price}</div>
                    </div>

                    <ul className="mt-3 mb-4">
                      {s.bullets.map((b, idx) => (
                        <li key={idx} className="small">{b}</li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <Button href="#contacto" className="btn-primary-custom w-100" aria-label={`Contratar ${s.title}`}>
                        Contratar
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
