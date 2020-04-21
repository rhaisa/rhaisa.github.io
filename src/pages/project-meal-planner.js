import React from 'react'
import Layout from '../components/Layout'
import thumb03 from '../assets/images/thumbs/mealPlanner.png'

const MealPlanner = () => (
  <Layout>
    <div id="main">
      <section id="one">
        <header className="major"></header>
        <h2>MEAL PLANNER</h2>
        <ul className="actions"></ul>
      </section>

      <section id="two">
        <a href="/meal-planner">
          <img className="project" src={thumb03} alt="" />
        </a>
        <p>
          {' '}
          A fully responsive web application, made in the Web Developer Bootcamp
          as a final project. Still in progress.
        </p>
        <p>
          <strong>Used Technologies:</strong> Figma, Next.js, data fetching,
          localStorage, styled components, setting up and connecting to
          PostgreSQL database, using state hooks.
        </p>
      </section>
      <div className="inner">
        <ul className="icons">
          <li>
            <a
              href="https://github.com/rhaisa/simple-meal-planner-next-"
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
