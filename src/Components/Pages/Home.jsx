
import NavScrollExample from '../Navigation'
import AvatarGroup from './Avatar'
import { motion } from 'framer-motion'
import About from './About'
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
        <section>
            <About/>
        </section>
        </main> 
        <footer>
            
        </footer>
    </>
  )
}

export default Home