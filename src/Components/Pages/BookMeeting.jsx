import React, { useState } from 'react'
import Navigation from '../Navigation'

const BookMeeting = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Meeting request submitted', form)
    alert('Thanks! We will be in touch soon to confirm your meeting.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="bookMeetingSection">
        <Navigation />
        <h1 className='bookmeetingtxt'>Contact us</h1>
      <div className="bookMeetingContainer">
        {/* Left Side - Contact Info */}
        <div className="bookMeetingInfo">
          <div className="infoCard">
            <div className="infoIcon">📞</div>
            <h3>Call Us 24/7</h3>
            <p>+2349027301750</p>
          </div>
          <div className="infoCard">
            <div className="infoIcon">✉️</div>
            <h3>Work with us</h3>
            <p>glitch-app-sooty.vercel.app</p>
          </div>
          <div className="infoCard">
            <div className="infoIcon">📍</div>
            <h3>Our location</h3>
            <p>10, Mcwene street, Yaba, Lagos, Nigeria</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bookMeetingForm">
          <h2 className="bookTitle">Book a Meeting</h2>
          <p className="bookSubtitle">Let's discuss how we can help transform your digital presence. Fill out the form below and we'll get back to you shortly.</p>
          <form onSubmit={handleSubmit} className="bookFormFields">
            <input 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              placeholder="Your Name" 
              required 
            />
            <input 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="Your Email" 
              required 
              type="email"
            />
            <textarea 
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              placeholder="Tell us about your project..." 
              rows="6" 
              required 
            />
            <button type="submit" className="bookMeetingBtn">Book a Meeting</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookMeeting
