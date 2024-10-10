import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import MiddleNav from '../components/MiddleNav';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your logic here, such as sending the form data to a backend server
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <MiddleNav />
      <div className="bg-light py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h2 className="fw-bold">Contact Us</h2>
                <p className="lead">We would love to hear from you!</p>
              </div>
              <Row>
                <Col md={6} className="mb-4">
                  <div className="contact-info">
                    <h3 className="fw-bold">Contact Details</h3>
                    {/* <p>123 Street Name</p> */}
                    <p>Room no 5,Saradha complex,Tholur,Thrissur,680552</p>
                    <p>Email: agromanfrancis@gmail.com</p>
                    <p>Phone: +91 9778777922</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="embed-responsive embed-responsive-16by9">
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229384.09230961194!2d76.38925131870016!3d9.924207270217979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1720519875154!5m2!1sen!2sin" style={{ width: '100%', height: '400px' }}></iframe> */}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.023219338888!2d76.12631737420611!3d10.577355789559599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ec81aa67eee7%3A0xb527d0bae25141!2sSaradha%20Complex%2C%2085F%2C%20Kaiparambu%20%E2%80%93%20Parappur%20Rd%2C%20Tholur%2C%20Parappur%2C%20Kerala%20680552!5e0!3m2!1sen!2sin!4v1728358345004!5m2!1sen!2sin" style={{ width: '100%', height: '400px' }}></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
