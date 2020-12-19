import React from 'react'
import Layout from '../components/Layout'
import thumb05 from '../assets/images/thumbs/color-game.png'

const ColorGame = () => (
  <Layout>
    <div id="main">
      <section id="one">
        <header className="major"></header>
        <h2>COLOR GAME PROJECT</h2>
        <ul className="actions"></ul>
      </section>

      <section id="two">
      <a
          href="https://color-game-rhaisa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img className="project" src={thumb05} alt="" />
        </a>
        <p>
          {' '}
          A fully responsive web application. This project was entirely built with Vanilla JavaScript, CSS and HTML to solidify my foundation knowledge in JavaScript. This App is also automatically deployed with Netlify.
        </p>
        <p>
          <strong>Used Technologies:</strong> Figma, Github, JavaScript, CSS, HTML and Netlify.
        </p>
      </section>
      <div className="inner">
        <ul className="icons">
          <li>
            <a
              href="https://github.com/rhaisa/color-game"
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

export default ColorGame