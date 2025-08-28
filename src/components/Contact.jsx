import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "5491123456789"; // reemplazar con tu WhatsApp real
    const text = `Hola, soy ${formData.name}. ${formData.message} (Email: ${formData.email})`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="contact-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Contacto</h2>
          <p className="text-center text-muted mb-5">
            ¿Querés trabajar conmigo? Enviame un mensaje por el formulario o directamente por WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tu nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Tu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Escribí tu mensaje..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" className="btn-primary-custom w-100">
              Enviar
            </Button>
          </Form>
        </motion.div>
      </Container>
    </section>
  );
}
