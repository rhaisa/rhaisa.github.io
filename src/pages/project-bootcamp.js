import React from 'react'
import Layout from '../components/Layout'
import thumb04 from '../assets/images/thumbs/bootcamp.jpg'
import thumb05 from '../assets/images/thumbs/techSkills.png'

const Bootcamp = () => (
  <Layout>
    <div id="main">
      <section id="one">
        <header className="major"></header>
        <h2>CODING BOOTCAMP</h2>
        <ul className="actions"></ul>
      </section>

      <section id="two">
        <a href="https://upleveled.io/web-development-bootcamp">
          <img className="project" src={thumb04} alt="" />
        </a>
        <p>
          {' '}
          Coding bootcamp is an innovative new form of short-term, intensive,
          and often immersive education designed to provide aspiring tech
          professionals the technical skills they need to start careers in
          software engineering and other tech fields.
        </p>
        <div>
          <strong>Technologies:</strong>
          <img className="project" src={thumb05} alt="" />
        </div>
      </section>
    </div>
  </Layout>
)

export default Bootcamp
