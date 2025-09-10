import React from 'react'
import NavScrollExample from '../Navigation'

const Home = () => {
  return (
    <>
       <main className='homeMain'>
        <NavScrollExample/>
        <section className='homeSection'>
            
            <div className='homegear'>
            <div>
                <i class="fa-solid fa-gear" id='gear'></i>
            </div>
            <div className='homemotivation'>
                <h3 className='txt'>Think.</h3>
                <h3 className='txt'>Create.</h3>
                <h3 className='txt'>Innovate.</h3>
                <h3 className='txt'>Repeat.</h3>
            </div>
        </div>
        <div>
            <h1 className='homeheading'>Website That Speaks Your Vibe</h1>
        </div>
        <div>
            <h5 className='homepara'>A digital agency that crafts stunning websites, captivating designs, and effective marketing strategies to elevate your brand's online presence.</h5>
        </div>
        <div>
            <button className='homebtn'>explore oppurtunities</button>
        </div>
        
        </section>
        </main> 
        <footer>
            
        </footer>
    </>
  )
}

export default Home