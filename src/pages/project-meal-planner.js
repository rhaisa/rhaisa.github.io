import React from 'react'
import Layout from '../components/Layout'
import thumb03 from '../assets/images/thumbs/mealPlanner.png'

const MealPlanner = () => (
  <Layout>
    <div id="main">
      <section id="one">
        <header className="major"></header>
        <h2>MEAL PLANNER APP</h2>
        <ul className="actions"></ul>
      </section>

      <section id="two">
        <img className="project" src={thumb03} alt="" />

        <p>
          {' '}
          A fully responsive web application, built during the Web Development
          Bootcamp as a final project. Still in progress.
        </p>
        <p>
          <strong>Used Technologies:</strong> Figma, Next.js, data fetching,
          localStorage, styled components, PostgreSQL database and React hooks.
        </p>
      </section>
      <div className="inner">
        <ul className="icons">
          <li>
            <a
              href="https://github.com/rhaisa/simple-meal-planner-next-"
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

export default MealPlanner
