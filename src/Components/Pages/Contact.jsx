import React, { useState } from 'react'
import glit from '../../assets/glit.jpg'

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Quote request submitted', form)
    // placeholder: integrate API or mailer as needed
    alert('Thanks — your request was submitted (demo)')
  }

  return (
    <section className="quoteSection">
      <div className="quoteContainer">
        <div className="quoteForm">
          <h2 className="quoteTitle">Make An Appointment</h2>
          <p className="quoteSubtitle">Tell us about your project and we'll get back with an estimate.</p>
          <form onSubmit={handleSubmit} className="quoteFields">
            <div className="formRow">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Number" required />
            </div>
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="full" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Type Your Message" rows="6" className="full" />
            <div className="formRow single">
              <button type="submit" className="quoteBtn">Submit Message</button>
            </div>
          </form>
        </div>
        <div className="quoteImage">
          <img src={glit} alt="people discussing" />
        </div>
      </div>
    </section>
  )
}

export default Contact
