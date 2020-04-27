import React from 'react'
import Layout from '../components/Layout'
import thumb02 from '../assets/images/thumbs/ecommerce.jpg'

const Ecommerce = () => (
  <Layout>
    <div id="main">
      <section id="one">
        <header className="major"></header>
        <h2>ECOMMERCE PROJECT</h2>
        <ul className="actions"></ul>
      </section>

      <section id="two">
        <a
          href="https://findmebeauty.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="project" src={thumb02} alt="" />
        </a>
        <p>
          {' '}
          A fully responsive webpage, built during the Web Development Bootcamp.
        </p>
        <p>
          <strong>Used Technologies:</strong> Figma, Next.js, data fetching,
          cookies, styled components, setting up and connecting to PostgreSQL
          database, Heroku, Express.js and React hooks.
        </p>
      </section>
      <div className="inner">
        <ul className="icons">
          <li>
            <a
              href="https://github.com/rhaisa/ecommerce-store-next-js"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-github git-url"
            >
              <span> Project source code </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default Ecommerce
