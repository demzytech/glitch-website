import React from 'react'
import { Link } from 'react-router-dom';
import HowWeWork from './HowWeWork';
const Service = () => {
  return (
    <div className='servicecontainer'>
      <h5 className='servicetxt'>Our Latest service</h5>
      <h2 className='servicetxt1'>Service We Provide</h2>
      <div className='servicecards'>
        <div className='servicecard'>
          <div className='sense'>
            <i class="fa-solid fa-lightbulb" id='lightbulb'></i>
          </div>
          <h2 className='serviceeee'>Website creation</h2>
          <h6 className='serviceee'>Simple websites for students, small businesses, churches, brands</h6>
          <div>
            <h6 className='learnmore'>Learn More <span><i class="fa-solid fa-arrow-right"></i></span></h6>
          </div>
        </div>
        <div className='servicecard'>
          <div className='sense'>
            <i class="fa-solid fa-screwdriver-wrench" id='toolbox'></i>
          </div>
          <h2 className='serviceeee'>Website Optimization</h2>
          <h6 className='serviceee'>Fix layout issues (overlapping, responsiveness, speed)</h6>
          <div>
            <h6 className='learnmore'>Learn More <span><i class="fa-solid fa-arrow-right"></i></span></h6>
          </div>
        </div>
        <div className='servicecard'>
          <div className='sense'>
           <i class="fa-solid fa-brush" id='toolbox'></i>
          </div>
          <h2 className='serviceeee'>UI / Frontend Design</h2>
          <h6 className='serviceee'>Clean page layouts

HTML, CSS, basic JS designs</h6>
          <div>
            <h6 className='learnmore'>Learn More <span><i class="fa-solid fa-arrow-right"></i></span></h6>
          </div>
        </div>
        <div className='servicecard'>
          <div className='sense'>
            <i class="fa-solid fa-server" id='toolbox'></i>
          </div>
          <h2 className='serviceeee'>Backend Development</h2>
          <h6 className='serviceee'>Server-side logic & APIs, User authentication (login & signup) e.t.c</h6>
          <div>
            <h6 className='learnmore'>Learn More <span><i class="fa-solid fa-arrow-right"></i></span></h6>
          </div>
        </div>
      </div>
       <HowWeWork className="howwework"/>
    </div>
  
  )
}

export default Service