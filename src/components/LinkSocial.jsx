import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { PiArrowSquareUpRight } from "react-icons/pi";



const LinkSocial = () => {
   
    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} /> LinkedIn 
                </>
            ),
            href: 'https://www.linkedin.com/in/jayati-gupta-55baba203/',
            style: 'rounded-tr-md'

        },
        {
            id: 2,
            child: (
                <>
                     <FaGithub size={30} /> GitHub
                </>
            ),
            href: 'https://github.com/jayati10',


        },
        {
            id: 3,
            child: (
                <>
                     <HiOutlineMail size={30} /> E-Mail
                </>
            ),
            href: 'mailto:guptajayati738@gmail.com',


        },
       

    ];
     return (

        <div name="socials" 
             className=" w-full h-screen  from-gray-800 bg-gradient-to-b to-black text-whited ">
                <div className="max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white">
                    <div>
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Socials</p>
                 </div>
                 <div className="flex flex-col align-middle space-y-4 mt-8">
                 {links.map(({ id, child, href, style }) => (
                        <a
                            key={id}
                            href={href}
                            className={`ml-10  flex items-center justify-between w-full text-4xl text-white p-4 ${style}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex items-center">
                                {child}
                                <span className="ml-20 text-cyan-500  group-hover:cursor-pointer duration-300">
                                    <PiArrowSquareUpRight size={22} />
                                </span>
                            </div>
                        </a>
                    ))}
                    
                </div>

                    
                </div>
           
        </div>
    );
};

export default LinkSocial;


