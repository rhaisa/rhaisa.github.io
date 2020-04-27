import React from 'react'
import Layout from '../components/Layout'
import thumb06 from '../assets/images/thumbs/bootcamp.jpg'
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
        <a
          href="https://upleveled.io/web-development-bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="project" src={thumb06} alt="" />
        </a>
        <p>
          {' '}
          Coding Bootcamps are an innovative new form of short-term, intensive,
          and immersive education designed to provide aspiring tech
          professionals with the technical skills they need to start a career in
          software engineering and related other tech fields.
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
