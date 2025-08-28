import { motion } from "framer-motion";
import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section id="inicio" className="hero-section text-center text-light d-flex align-items-center">
      <Container>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="display-4 fw-bold"
        >
          Hola, soy Santiago 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="lead"
        >
          Desarrollador Web Full Stack especializado en React
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Button variant="primary" size="lg" href="#contacto">
            Contáctame
          </Button>
        </motion.div>
        <div className="scroll-indicator">⬇</div>
      </Container>
    </section>
  );
}

export default Hero;
