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
          A e-commerce built during the Web Development Bootcamp from figma to the database. The main idea is a page where you can find a beauty treatment without to going to a beauty salon. In the page you will find freelancer professionals who best meet your needs and will assiste you at your home. You have access to the professional media page to have reference of his work. The appointment and the payment are made directly in the web site. A stretch goal to this page is adding reviews from clients.  
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
