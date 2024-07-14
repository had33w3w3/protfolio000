
import React from 'react'
import { motion } from 'framer-motion';


const Skills = () => {
  return (
    <div>
       <div class="container">
        <h1 class="text-center mb-4">
            Skills
        </h1>
        <div class="row">
            <div class="col-md-6 d-flex flex-column 
                justify-content-center">
                <h2 className="text-center mb-3">
                  
                </h2>
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
                class="card border-primary mb-3">
                    <div class="card-body">
        
                        <h5 className="card-title text-primary text-center">
                            HTML5,CSS3
                        </h5>
                        <p class="card-text">
                          
                        </p>
                    </div>
                </motion.div>
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
                class="card border-danger mb-3">
                    <div className="card-body">
                        <h5 class="card-title text-danger text-center">
                            Javascript,Jauery
                        </h5>
                        <p class="card-text">
                      
                        </p>
                    </div>
                </motion.div>
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
                class="card border-warning mb-3">
                    <div class="card-body">
                        <h5 className="card-title text-warning text-center">
                            Bootstrap5
                        </h5>
                        <p class="card-text">
                       
                        </p>
                    </div>
                </motion.div>
               
            </div>
            <div class="col-md-6 d-flex flex-column 
                justify-content-start">
                <h2 className="text-center mb-3">
                   
                </h2>
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
                class="card border-success mb-3">
                    <div class="card-body">
                        <h5 className="card-title text-success text-center">
                            Sass
                        </h5>
                        <p class="card-text">
                            
                        </p>
                    </div>
               </motion.div>
                <div class="card border-info mb-3">
                    <div class="card-body">
                        <h5 className="card-title text-info text-center">
                            Tailwind CSS
                        </h5>
                        <p class="card-text ">
                           
                        </p>
                    </div>
                </div>
                <div class="card border-secondary mb-3">
                    <div class="card-body">
                        <h5 className="card-title text-secondary text-center">
                            React js,Typescript,Material UI,Reset Api
                        </h5>
                        <p class="card-text">
                          
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills
