import React from 'react'

const About = () => {
  return (
    <div name="about"
          className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                   About 
                </p>
            </div>
            <p className=" text-4xl mt-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam quis totam rerum. Aliquid earum in veritatis similique pariatur animi tempora suscipit neque ut repudiandae! Labore veritatis consequuntur, quo ipsam iure, tenetur unde perferendis rerum asperiores eligendi fugit enim voluptates. Enim vero impedit consequuntur itaque. Sit blanditiis libero repellat laborum.

            </p>
            <br />

            <p className="text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt exercitationem possimus nostrum numquam eos maiores laudantium earum iste, ea eveniet itaque et nisi saepe, quasi nihil, vero repellendus. Pariatur eligendi non hic esse illum! Minus placeat, laudantium tempora alias qui id quas voluptate similique ipsa harum consequuntur debitis ab?
            </p>
        </div>
    </div>
  )
};

export default About;