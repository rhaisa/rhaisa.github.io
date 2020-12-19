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
import thumb06 from '../assets/images/thumbs/kanban.jpg'

const DEFAULT_IMAGES = [
  {
    id: '6',
    thumbnail: thumb06,
    caption: 'Certified Tester',
    path: '/certified-tester',
  },
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
              <h2>An Aspiring Software Tester Engineer</h2>
            </header>
            <p>
              {' '}
              I am a <a href="https://www.certible.com/verify/c45c01f2332c553e5806c57c13b53acf" target="_blank">ISTQB Certified Tester</a>, BsC in business and I have more than 10 years of experience in Quality Assurance. With solid knowledge in architecting and implementing quality control models and tools, focusing on the adoption of policies and techniques for continuous improvement. Most recently, I have been diving deep into web development and testing frameworks. Take a look at my portfolio below and get in touch!
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
