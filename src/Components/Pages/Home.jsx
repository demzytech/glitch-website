import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NavScrollExample from '../Navigation'
import About from './About'
import AvatarGroup from './Avatar'
import { motion } from 'framer-motion'
import Service from './Service'


const Home = () => {
  const location = useLocation()

  useEffect(() => {
    // scroll to About or Service when that route is visited
    if (location.pathname === '/bout') {
      setTimeout(() => {
        document.getElementById('bout')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    } else if(location.pathname === '/service') {
      setTimeout(() => {
        document.getElementById('service')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }, [location.pathname])


  return (
    <>
      <main className='homeMain'>
        <NavScrollExample/>
        <section id="home" className='homeSection'>
            
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
        <div className='edetails'>
            <motion.div
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className='demzy'>
                <div className='you'>
                <h2 className='enumber'>  2025</h2>
                <h4 className='etext'>Founded</h4>
                <button className='foundingbutton'>Learn More</button>
            </div>
                <div className='you'>
                <h2 className='enumber'> $1000</h2>
                <h4 className='etext'>valuation</h4>
                <button className='foundingbutton'>Learn More</button>
            </div>
            </motion.div>
            <div>
                <motion.div
                initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}>
                    <p className='wordy'>
                We’re the agency built to amplify your deals, accelerate your growth, and deliver unmatched results. Trust us to unlock your full potential and push your business into its next level.
            </p></motion.div> 
            <div className='teamedd'>
                <AvatarGroup/>
                <h5>Meet the crews</h5>
            </div>
            </div>

        </div>
        
        </section>
        <section id="about" className="aboutSection" style={{ scrollMarginTop: '90px' }}>
          <About />
        </section>
        <section id="service" className="serviceSection" style={{ scrollMarginTop: '90px' }}>
          <Service />
        </section>
      </main>
    </>
  )
}

export default Home