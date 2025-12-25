import React, { useEffect } from 'react'
import AvatarGroup from './Avatar'
import glity from '../../assets/glity.jpg'
import glitti from '../../assets/glitti.jpg'
import { motion } from 'framer-motion'

const About = () => {
  useEffect(() => {
    const targets = document.querySelectorAll('.js-animate-on-scroll')
    if (!targets.length) return

    if (!('IntersectionObserver' in window)) {
      targets.forEach(t => t.classList.add('in-view'))
      return
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.32 }
    )

    targets.forEach(t => io.observe(t))
    return () => io.disconnect()
  }, [])

  return (
    <div className='aboutMain'>
      <div className='aboutimgcontainer'>
        <img src={glity} alt="" className='aboutimg' />
        <img src={glitti} alt="" className='carryingimg' />

        <motion.div
          initial={{ x: 70, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="carryingcard js-animate-on-scroll"
        >
          <h2 className='anumber'>2+</h2>
          <p className='atext'>Years of experience</p>
        </motion.div>
      </div>

      <div className='aboutuscon'>
        <div className='icin'>
          <motion.i
            className="fa-regular fa-address-card js-animate-on-scroll"
            id='abouticon'
            initial={{ scale: 1, opacity: 0 }}
            whileInView={{ scale: [1, 2.5, 1], opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          />
          <h5 className='aboutustxt'>ABOUT US </h5>
        </div>

        <h1 className='bigg'>Powered by Insight, Focused on Your Future</h1>

        <div className='abe'>
          <p className='checktxt'>Our work blends innovation with precision, creating seamless digital experiences that move your business forward. Every project is built with intention, designed for performance, and optimized for growth.</p>
          <div id='checklist'>
            <div className='checky'>
              <motion.i
                className="fa-solid fa-check check-icon"
                id='checkicon'
                initial={{ scale: 1, opacity: 0 }}
                whileInView={{ scale: [1, 1.4, 1], opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.04 }}
                viewport={{ once: false, amount: 0.6 }}
              />
              <p className='checktxt' id='checktx'>Purpose. Impact. Results.</p>
            </div>

            <div className='checky'>
              <motion.i
                className="fa-solid fa-check check-icon"
                id='checkicon'
                initial={{ scale: 1, opacity: 0 }}
                whileInView={{ scale: [1, 1.4, 1], opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.08 }}
                viewport={{ once: false, amount: 0.6 }}
              />
              <p className='checktxt' id='checktx'>Our Growth Strategy</p>
            </div>

            <div className='checky'>
              <motion.i
                className="fa-solid fa-check check-icon"
                id='checkicon'
                initial={{ scale: 1, opacity: 0 }}
                whileInView={{ scale: [1, 1.4, 1], opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.16 }}
                viewport={{ once: false, amount: 0.6 }}
              />
              <p className='checktxt' id='checktx'>Performance Insights</p>
            </div>
          </div>
        </div>
        <div className='call'>
          <i class="fa-solid fa-phone" id='aboutcall'></i>
          <div className='callword'>
            <p className='calltxt'>Have any questions? Call us now</p>
            <h2 className='callnumber'>+2349027301750</h2>
          </div>
          <div className='vline'>
          </div>
          <h6 className='nametxt'>GL1TCH.NG</h6>

        </div>
      </div>
    </div>
  )
}

export default About
