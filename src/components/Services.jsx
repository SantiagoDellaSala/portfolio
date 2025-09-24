import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "basico",
    title: "Básico",
    price: "USD 80",
    tag: "Landing simple",
    bullets: [
      "3 secciones (Presentación, Producto y Contacto)",
      "Responsive (móvil + desktop)",
      "Formulario de contacto conectado",
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

export default function Services({ onSelectPlan }) {
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
                    <Card.Title>{s.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{s.tag}</Card.Subtitle>
                    <Card.Text className="fw-bold mb-3">{s.price}</Card.Text>
                    <ul>
                      {s.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <Button
                        href="#contacto"
                        className="btn-primary-custom w-100"
                        aria-label={`Contratar ${s.title}`}
                        onClick={() => onSelectPlan(s.title)}
                      >
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
