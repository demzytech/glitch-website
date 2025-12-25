import React, { useState } from 'react'
import HowWeWork from './HowWeWork'

const servicesData = [
  {
    id: 'website-creation',
    icon: 'fa-lightbulb',
    iconId: 'lightbulb',
    title: 'Website creation',
    short: 'Simple websites for students, small businesses, churches, brands',
    details: `We build clean, modern websites focused on usability and conversion. Includes responsive layouts, content entry points, CMS integration where needed, basic SEO setup, and a friendly handover.`,
    bullets: ['Responsive layouts', 'SEO-friendly structure', 'Fast performance', 'Content handover & training']
  },
  {
    id: 'optimization',
    icon: 'fa-screwdriver-wrench',
    iconId: 'toolbox',
    title: 'Website Optimization',
    short: 'Fix layout issues (overlapping, responsiveness, speed)',
    details: `We diagnose and fix layout, accessibility and performance issues. From reducing bundle sizes and lazy-loading assets to fixing mobile layout regressions, we make sites faster and more reliable.`,
    bullets: ['Performance profiling', 'Layout fixes', 'Image optimization', 'Accessibility improvements']
  },
  {
    id: 'ui-design',
    icon: 'fa-brush',
    iconId: 'toolbox',
    title: 'UI / Frontend Design',
    short: 'Clean page layouts — HTML, CSS, basic JS designs',
    details: `Design-first frontend services. We create pixel-perfect UI, design systems, and implement components that are robust and reusable across your product.`,
    bullets: ['Design systems', 'Component libraries', 'Prototyping', 'High-fidelity UI']
  },
  {
    id: 'backend',
    icon: 'fa-server',
    iconId: 'toolbox',
    title: 'Backend Development',
    short: 'Server-side logic & APIs, User authentication (login & signup) e.t.c',
    details: `API design, database modelling, authentication, and integrations. We build secure and maintainable backends to power your apps.`,
    bullets: ['API design', 'Auth & security', 'Database modelling', 'Third-party integrations']
  }
]

const Service = () => {
  const [selected, setSelected] = useState(null)

  return (
    <div className='servicecontainer'>
      <h5 className='servicetxt'>Our Latest service</h5>
      <h2 className='servicetxt1'>Service We Provide</h2>

      <div className='servicecards'>
        {servicesData.map(svc => (
          <div key={svc.id} className={`servicecard ${selected === svc.id ? 'active' : ''}`}>
            <div className='sense'>
              <i className={`fa-solid ${svc.icon}`} id={svc.iconId} />
            </div>
            <h2 className='serviceeee'>{svc.title}</h2>
            <h6 className='serviceee'>{svc.short}</h6>
            <div>
              <button className='learnmore' onClick={() => setSelected(svc.id)} aria-expanded={selected===svc.id}>
                Learn More <span><i className="fa-solid fa-arrow-right" /></span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <HowWeWork className="howwework"/>

      {selected && (
        <div className='service-modal' role='dialog' aria-modal='true' onClick={() => setSelected(null)}>
          <div className='service-modal-content' onClick={e => e.stopPropagation()}>
            <button className='modal-close' onClick={() => setSelected(null)} aria-label='Close'></button>
            <div className='modal-left'>
              <h3 className='modal-title'>{servicesData.find(s=>s.id===selected).title}</h3>
              <p className='modal-desc'>{servicesData.find(s=>s.id===selected).details}</p>
              <ul className='modal-bullets'>
                {servicesData.find(s=>s.id===selected).bullets.map((b,idx)=> (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
            <div className='modal-right'>
              <h4>Ready to start?</h4>
              <p>Book a meeting with us to discuss the scope and receive a tailored proposal.</p>
              <a className='btn-primary' href='/book-meeting'>Book a meeting</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Service