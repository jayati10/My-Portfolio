import React from 'react';
import  devInsight  from '../assets/portfolio/devInsight.png';
import  todoList  from '../assets/portfolio/todoList.png';
import  realtimeTrack  from '../assets/portfolio/realtimeTracking.png';


const Portfolio = () => {

  const portfolios =[
    {
      id:1,
      src: todoList,
      links: [
        {
          name:'demo',
          url:  " https://youtu.be/Uj0wpItaN68"
        },
        {
          name: 'code',
          url: "https://github.com/jayati10/To-Do-App.git"
        },
      
      ]
    },
    {
      id:2,
      src: realtimeTrack,
      links: [
        {
          name:'demo',
          url:  "https://www.youtube.com/watch?v=YPe_Eu_tLGtA"
        },
        {
          name: 'code',
          url: "https://github.com/jayati10/Real_time_tracking.git "
        },
      ]
    
    },
    {
      id:3,
      src: devInsight,
      links: [
        {
          name:'demo',
          url:  "https://www.youtube.com/watch?v=z1STXazU6No"
        },
        {
          name: 'code',
          url: "https://github.com/jayati10/Dev_Insight.git"
        },
      ]
 
    },
  ]
  const handleClick = (index,linkType) => {
    const link = portfolios[index].links.find(link => link.name === linkType).url;
    window.open(link, '_blank');
  };
  return (
    <div name="portfolio"
          className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4  border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>

        </div>
       
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
        {
          portfolios.map(({id,src},index)=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
            <img 
              src={src} 
              alt=""
              className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>

              <button onClick={()=> handleClick(index,'demo')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo</button>
              <button onClick={()=> handleClick(index,'code')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Code</button>
            </div>
          </div>
            
          ))
        }
        <br /><br />
        <br />
        </div>
      </div>
    </div>
  
  )
}

export default Portfolio
