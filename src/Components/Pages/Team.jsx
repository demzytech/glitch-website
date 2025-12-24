import React from 'react'
import { motion } from 'framer-motion'
import glit from '../../assets/glit.jpg'
import glitti from '../../assets/glitti.jpg'
import glity from '../../assets/glity.jpg'
import { div } from 'framer-motion/client'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Moyin John',
      role: 'CoFounder/Frontend designer',
      image: glit,
      bio: 'Leads design strategy and brand vision'
    },
    {
      id: 2,
      name: 'Ahmed',
      role: 'CoFounder/Lead Developer',
      image: glitti,
      bio: 'Full-stack expert with 3+ years experience'
    },
    {
      id: 3,
      name: 'Oluwademilade Amodu',
      role: 'Founder/Frontend Developer',
      image: glity,
      bio: 'User-centered design and development specialist'
    }
  ]

  return (
    <section id="team" className="teamSection">
      <div className="teamContainer">
        <motion.div
          className="teamHeader"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="teamSubtitle">Our Crew</h3>
          <h2 className="teamTitle">Meet The Team</h2>
          <p className="teamDescription">
            Talented individuals dedicated to creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="teamGrid">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              className="teamCard"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(124, 58, 237, 0.15)' }}
            >
              <div className="teamImageWrapper">
                <img src={member.image} alt={member.name} className="teamImage" />
                <div className="teamImageOverlay" />
              </div>
              <div className="teamCardContent">
                <h3 className="teamMemberName">{member.name}</h3>
                <p className="teamMemberRole">{member.role}</p>
                <p className="teamMemberBio">{member.bio}</p>
                <div className="teamSocials">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-x-twitter"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team