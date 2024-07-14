import React from 'react'
import TypeWriter from 'typewriter-effect'
import {motion} from 'framer-motion'




const Home = () => {


    const HandleleNavigateContactMe = () => {


    }
    return (

        <section id='Home' className='Home' style={{ backgroundColor: "#121212", height: "600px" }}>
            <div className='Container'>
                <TypeWriter options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: ["my name is hadeer <br/> Frontend Developer"]

                }} />

                <motion.button 
                initial={{x :-200}}
             animate={{x :0}}
             delay={{duration :1}}
                className='hire' onClick={HandleleNavigateContactMe}>Download CV</motion.button>
                
              











            </div>

        </section>

    )
}

export default Home
