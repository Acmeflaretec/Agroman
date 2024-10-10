import React from 'react';
import { motion } from 'framer-motion';
import './WhoAreWe.css'; // We'll create this file for custom styles
import { Link } from 'react-router-dom';

const WhoAreWe = () => {
  return (
    <section className="who-are-we">
      <div className="container">
        <div className="row align-items-center">
          <motion.div 
            className="col-lg-6 content-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Who Are We?</h2>
            <div className="green-line"></div>
            <p className="section-text">
            Welcome to <strong>Agro Man Store</strong> - your go-to online marketplace for high-quality, affordable products sourced directly from small-scale manufacturers. Our platform is designed to connect buyers with manufacturers, ensuring that you get the best deals on FMCG and other consumable goods without the middleman markup.
</p>
         
           <Link to={'/about'}>
                <motion.button 
                  className="btn btn-primary learn-more-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                </motion.button>
           </Link>
          </motion.div>
          <motion.div 
            className="col-lg-6 image-col"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              <img src="IMG_6445.JPG" alt="Eco-friendly products" className="img-fluid rounded" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhoAreWe;