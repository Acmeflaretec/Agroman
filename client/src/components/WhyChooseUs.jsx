import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: 'handshake',
      title: 'Direct Sourcing:',
      description: 'Buy directly from verified manufacturers and enjoy competitive prices.',
    },
    {
      icon: 'leaf',
      title: ' Wide Selection:',
      description: 'We offer a variety of high-quality, affordable products across multiple categories.',
    },
    {
      icon: 'award',
      title: 'Support for Small Businesses:',
      description: 'Your purchases directly help small manufacturers grow their business.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="why-choose-us">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.div 
          className="row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} className="col-lg-4 col-md-6" variants={itemVariants}>
              <div className="reason-card">
                <div className="icon-wrapper">
                  <i className={`fas fa-${reason.icon}`}></i>
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;