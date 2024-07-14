import React from 'react'
import { motion } from 'framer-motion';

const resume = () => {
    return (
        <div style={{ "background-color": "#000" }}>
            <section class="section services-section" id="services">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-title">
                                <motion.h2
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.4,
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}

                                >What I Do
                                </motion.h2>

                                <motion.p
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.4,
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                >I design and develop services for customers of all sizes, specializing in creating stylish, modern websites
                                </motion.p>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-sm-6 col-lg-4">
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.4,
                                    x: { type: "spring", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1,
                                }}
                            />
                            <div class="feature-box-1">
                                <div class="icon">
                                    <i class="fa fa-desktop"></i>
                                </div>
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.4,
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    class="feature-content">
                                    <h5>Unique design</h5>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                                </motion.div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="feature-box-1">
                                <div class="icon">
                                    <i class="fa fa-user"></i>
                                </div>
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.4,
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    class="feature-content">
                                    <h5>Different Layout</h5>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                                </motion.div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="feature-box-1">
                                <div class="icon">
                                    <i class="fa fa-comment"></i>
                                </div>
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.4,
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    class="feature-content">
                                    <h5>Make it Simple</h5>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                                </motion.div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="feature-box-1">
                                <div class="icon">
                                    <i class="fa fa-image"></i>
                                </div>
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.4,
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    class="feature-content">
                                    <h5>Responsiveness</h5>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                                </motion.div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="feature-box-1">
                                <div class="icon">
                                    <i class="fa fa-th"></i>
                                </div>
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.4,
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    class="feature-content">
                                    <h5>Testing for Perfection</h5>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                                </motion.div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4">
                            <div class="feature-box-1">
                                <div class="icon">
                                    <i class="fa fa-cog"></i>
                                </div>
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.4,
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    class="feature-content">
                                    <h5>Advanced Options</h5>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default resume
