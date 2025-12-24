import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Client Discovery',
      description: 'Understand goals, users and constraints to define the right scope.'
    },
    {
      number: '02',
      title: 'Research & Design',
      description: 'Create clear UX and visual direction to guide development.'
    },
    {
      number: '03',
      title: 'Build & Launch',
      description: 'Develop, test and deliver with tooling and monitoring in place.'
    }
  ]

  const stats = [
    { value: 76, label: 'Trusted Clients' },
    { value: 89, label: 'Project Completed' },
    { value: 70, label: 'Work Rate' },
  ]

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))
  const [started, setStarted] = useState(stats.map(() => false))

  const animateTo = (index, target) => {
    if (started[index]) return
    setStarted((s) => {
      const copy = [...s]
      copy[index] = true
      return copy
    })

    const duration = 900
    const start = performance.now()

    const frame = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      const val = Math.floor(eased * target)
      setAnimatedValues((prev) => {
        const copy = [...prev]
        copy[index] = val
        return copy
      })
      if (t < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }

  return (
    <>
      <section id="how-we-work" className="howWeWorkSection">
        <div className="howWeWorkContainer">
          <div className="howWeWorkContent">
            <h3 className="hwwSubtitle">How we work</h3>
            <h2 className="hwwTitle">Easy 3 Steps To Work</h2>

            <div className="stepsGrid">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="stepCard"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="stepLeft">
                    <div className="stepIcon"> </div>
                    <div className="stepNumberSmall">{step.number}</div>
                  </div>
                  <div className="stepBody">
                    <h4 className="stepTitleSmall">{step.title}</h4>
                    <p className="stepDescriptionSmall">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="howWeWorkImage">
            <img
              src="https://thumbs.dreamstime.com/b/diverse-group-people-working-together-concept-85116773.jpg"
              alt="team"
              className="hwwImg"
            />
          </div>
        </div>
      </section>

      {/* Stats row under the HowWeWork section */}
      <section className="howWeWorkStats" aria-hidden={false}>
        <div className="statsContainer">
          {stats.map((s, i) => (
            <motion.div
              className="statItem"
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true, amount: 0.4 }}
              onViewportEnter={() => animateTo(i, s.value)}
            >
              <div
                className="donut"
                style={{
                  background: `conic-gradient(#7c3aed ${animatedValues[i]}%, rgba(0,0,0,0.06) ${animatedValues[i]}% 100%)`,
                }}
              >
                <div className="donutInner">
                  <div className="statNumber">{animatedValues[i]}%</div>
                </div>
              </div>
              <div className="statLabel">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
