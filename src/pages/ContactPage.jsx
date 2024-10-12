import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" }); // Clear errors on change
  };

  // Validate the form inputs
  const validateForm = () => {
    const newErrors = {};
    if (formData.fullName.length < 3) {
      newErrors.fullName = "Name must be at least 3 characters long.";
    }
    if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long.";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (formData.body.length < 3) {
      newErrors.body = "Body must be at least 3 characters long.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      console.log(formData); // Log form data if validation passes
      setSuccess(true); // Show success message
      // Reset form data
      setFormData({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
    } else {
      setSuccess(false); // Hide success message if validation fails
    }
  };

  return (
    <div className="contact-page container mt-5">
      <h2>Contact Us</h2>
      {success && <Alert variant="success">Your message has been sent!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} isInvalid={!!errors.fullName} required />
          <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" name="subject" value={formData.subject} onChange={handleChange} isInvalid={!!errors.subject} required />
          <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} required />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBody">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="body" value={formData.body} onChange={handleChange} isInvalid={!!errors.body} required />
          <Form.Control.Feedback type="invalid">{errors.body}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactPage;
