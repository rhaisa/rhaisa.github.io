import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/todoList.png'
import thumb02 from '../assets/images/thumbs/ecommerce1.jpg'
import thumb03 from '../assets/images/thumbs/mealPlanner.png'
import thumb04 from '../assets/images/thumbs/code.jpg'
import thumb05 from '../assets/images/thumbs/color-game.png'

const DEFAULT_IMAGES = [
  {
    id: '4',
    thumbnail: thumb04,
    caption: 'Coding Bootcamp',
    path: '/project-bootcamp',
  },
  {
    id: '1',
    thumbnail: thumb01,
    caption: 'Todo List Project',
    path: '/project-todo-list',
  },
  {
    id: '2',
    thumbnail: thumb02,
    caption: 'Ecommerce Project',
    path: '/project-ecommerce',
  },
  {
    id: '3',
    thumbnail: thumb03,
    caption: 'Meal Planner App',
    path: '/project-meal-planner',
  },
  {
    id: '5',
    thumbnail: thumb05,
    caption: 'Color Game Project',
    path: '/project-color-game',
  },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'My personal portfolio'
    const siteDescription =
      'I am a web development student and this is my website'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>An Aspiring Web Developer</h2>
            </header>
            <p>
              {' '}
              I am a web development student with experience in building dynamic
              websites and web applications. I focus on JavaScript, React, HTML
              and CSS, and also work with Next.js and GraphQL. Take a look at my
              work and get in touch!
            </p>
            <ul className="actions">
              <li>
                <Link to="/about" className="button">
                  More about me
                </Link>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>My Portfolio</h2>

            <Gallery images={DEFAULT_IMAGES} />

            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul> */}
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <div className="row">
              <div className="8u 12u$(small)"></div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Vienna, Austria
                  </li>

                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:rhaisaalves@gmail.com">
                      rhaisaalves@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
