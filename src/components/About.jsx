import React from 'react'

const About = () => {
  return (
    <div name="about"
          className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4  border-gray-500">
                   About 
                </p>
            </div>
            <p className=" text-2xl mt-20">
              I am a Full Stack Developer with a strong passion for creating dynamic and engaging web applications. My expertise spans various cutting-edge technologies, including ReactJS, React Native, MongoDB, NodeJS, ExpressJS, and Tailwind. 
            </p>
            <br />
            <p className=" text-2xl" >I thrive on building user-friendly interfaces and robust backend systems, ensuring seamless and efficient user experiences. My journey in web development has equipped me with the skills to handle complex projects, from initial concept to final deployment.</p>
            <br />
            <p className="text-2xl">
            Currently, I focus on developing innovative web applications that leverage the power of the MERN stack and Tailwind. I enjoy the challenge of transforming ideas into functional, visually appealing solutions. My goal is to deliver high-quality digital products that exceed client expectations and push the boundaries of modern web development.
             </p>
           
            
        </div>
    </div>
  )
};

export default About;