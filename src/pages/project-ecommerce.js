import React from 'react'
import Layout from '../components/layout'
import thumb02 from '../assets/images/thumbs/ecommerce.png'

const Ecommerce = () => (
  <Layout>
    <div id="main">
      <section id="one">
        <header className="major"></header>
        <h2>ECOMMERCE STORE</h2>
        <ul className="actions"></ul>
      </section>

      <section id="two">
        <a href="https://ecommerce-upleveled.herokuapp.com/">
          <img className="project" src={thumb02} alt="" />
        </a>
        <p> A fully responsive webpage, made in the Web Developer Bootcamp.,</p>
        <p>
          <strong>Used Technologies:</strong> figma, Next.js, data fetching,
          using cookies, styled components, setting up and connecting to
          PostgreSQL database, using state hooks.
        </p>
      </section>
    </div>
  </Layout>
)

export default Ecommerce
