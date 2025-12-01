"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaRocket, FaMobileAlt } from 'react-icons/fa';

const services = [
    {
        icon: <FaCode />,
        title: "Web Development",
        description: "Building fast, scalable, and secure web applications using modern technologies like React, Next.js, and Node.js."
    },
    {
        icon: <FaPaintBrush />,
        title: "UI/UX Design",
        description: "Creating intuitive and visually stunning user interfaces that provide exceptional user experiences."
    },
    {
        icon: <FaRocket />,
        title: "Performance Optimization",
        description: "Enhancing website speed, SEO, and overall performance to ensure your digital presence stands out."
    },
    {
        icon: <FaMobileAlt />,
        title: "Responsive Design",
        description: "Ensuring your website looks and functions perfectly across all devices, from desktops to mobile phones."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-center mb-16"
                >
                    My <span className="text-gradient">Services</span>
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-dark p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                        >
                            <div className="text-5xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
