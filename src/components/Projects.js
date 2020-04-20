import React from 'react'
import Helmet from 'react-helmet'
import Layout from '/Layout'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/ecommerce.png'
import thumb03 from '../assets/images/thumbs/03.jpg'
import ProjectMealPlanner from '../pages/project-meal-planner'

const defaultprojects = [
  {
    id: '1',
    thumbnail: thumb01,
    caption: 'Todo List',
    description:
      'A Todo list, made from scratch in the Web Developer Bootcamp as the first main project.',
    usedTechnologies: 'figma, React, styled components, using state hooks.',
    link: 'https://todo-list-rhaisa-2020.netlify.app',
  },
  {
    id: '2',
    thumbnail: thumb02,
    caption: 'ECOMMERCE STORE',
    description:
      'A fully responsive webpage, made in the Web Developer Bootcamp.',
    usedTechnologies:
      'figma, Next.js, data fetching, using cookies, styled components, setting up and connecting to PostgreSQL database, using state hooks.',
    link: 'https://ecommerce-upleveled.herokuapp.com/',
  },
  {
    id: '3',
    thumbnail: thumb03,
    caption: 'Meal Planer',
    description:
      'A fully responsive webapplication, made in the Web Developer Bootcamp as a final project.',
    usedTechnologies:
      'figma, Next.js, data fetching, using cookies, styled components, setting up and connecting to PostgreSQL database, using state hooks.',
    link: 'simple-meal-planner-2020.netlify.app',
  },
]
class Projects extends React.Component {
  render() {
    const siteTitle = 'rhaisa.com'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <section id="two">
          <a href="#">
            <img
              className="project"
              src={ProjectMealPlanner.thumbnail}
              alt=""
            />
          </a>
          images=
          {DEFAULT_IMAGES.map(
            ({ id, source, thumbnail, caption, description }) => ({
              source,
              thumbnail,
              caption,
              description,
            })
          )}
        </section>
      </Layout>
    )
  }
}

export default Projects

{
  /* <div id="main">
<section id="one">
  <header className="major"></header>
  <h2>ECOMMERCE STORE</h2>
  <ul className="actions"></ul>
</section>

<section id="two">
  <a href="#">
    <img className="project" src={thumb02} alt="" />
  </a>
  <p>
    {' '}
    A fully responsive webpage, made in the Web Developer Bootcamp as
    the first main project.
  </p>
  <p>
    <strong>Used Technologies:</strong> figma, Next.js, data fetching,
    using cookies, styled components, setting up and connecting to
    PostgreSQL database, using state hooks.
  </p>
</section>
</div> */
}
