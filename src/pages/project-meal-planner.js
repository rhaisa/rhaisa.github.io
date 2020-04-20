import React from 'react'
import Layout from '../components/layout'
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
        <a href="/project-meal-planner">
          <img className="project" src={thumb03} alt="" />
        </a>
        <p>
          {' '}
          A fully responsive webapplication, made in the Web Developer Bootcamp
          as a final project. Still in progress.
        </p>
        <p>
          <strong>Used Technologies:</strong> figma, Next.js, data fetching,
          localStorage, styled components, setting up and connecting to
          PostgreSQL database, using state hooks.
        </p>
      </section>
    </div>
  </Layout>
)

export default MealPlanner
