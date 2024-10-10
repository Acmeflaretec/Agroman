import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../components/Footer';
import MiddleNav from '../components/MiddleNav';

const About = () => {
  return (
    <>
      <MiddleNav />
      <div className="bg-light py-5">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <Image
                src="IMG_6445.JPG"
                alt="About"
                fluid
                rounded
                className="shadow-lg"
              />
            </Col>
            <Col lg={6}>
              <div className="px-lg-4">
                <h2 className="fw-bold mb-4">About Us</h2>
                <h4><strong>Agro Man Store</strong></h4>
                <p>Welcome to <strong>Agro Man Store</strong> - your go-to online marketplace for high-quality, affordable products sourced directly from small-scale manufacturers. Our platform is designed to connect buyers with manufacturers, ensuring that you get the best deals on FMCG and other consumable goods without the middleman markup.
                </p>
                <h4>Our Mission</h4>
                <p>At Agro Man Store, we believe in empowering local manufacturers and helping them grow their businesses beyond their cities and communities. Our mission is to create a space where small-scale producers can thrive by offering their products to a broader market. We aim to give these manufacturers the exposure they need to expand and bring their unique, quality products to a wider audience.
                </p>
                <h4>What We Offer</h4>
                <p>Our platform offers a wide range of products directly from the source, cutting out intermediaries to ensure both buyers and manufacturers benefit. We primarily focus on:
                </p>
                <ul>
                  <li><strong> Fast-Moving Consumer Goods (FMCG):</strong> From daily essentials to household consumables, we bring products directly from the producer to your doorstep.
                  </li>
                  <li><strong> Diverse Range of Products:</strong>Agro Man Store provides an extensive selection of items across multiple categories, all verified by our team to ensure quality.
                  </li>
                </ul>
                
                
              </div>
              
            </Col>
            <h4>Supporting Small Manufacturers</h4>
                <p>We understand the challenges faced by small-scale manufacturers in reaching new markets. That’s why we have created Agro Man Store – a platform where they can easily list and sell their products across borders, no matter the size of their operations. By partnering with us, local manufacturers can now expand their reach and grow their business beyond their hometowns.
                </p>
                <h4>Trust and Quality Assurance</h4>
                <p>Our team carefully verifies every seller and product on Agro Man Store. We are committed to providing a safe and trusted environment for both buyers and sellers. Every product you find on our platform is vetted for quality, so you can shop with confidence.
                </p>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default About;
