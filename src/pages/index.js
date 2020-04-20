import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/todoList.png'
import thumb02 from '../assets/images/thumbs/ecommerce.png'
import thumb03 from '../assets/images/thumbs/mealPlanner.png'
import thumb04 from '../assets/images/thumbs/04.jpg'

// import full01 from '../assets/images/fulls/01.jpg'
// import full02 from '../assets/images/thumbs/ecommerce.png'
// import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
// import full05 from '../assets/images/fulls/05.jpg'
// import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    thumbnail: thumb01,
    caption: 'Todo List',
  },
  {
    id: '2',
    thumbnail: thumb02,
    caption: 'Ecommerce',
  },
  {
    id: '3',
    thumbnail: thumb03,
    caption: 'Meal Planer',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter - Strata'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Hi! I'am Rhaisa, a Junior Web Developer</h2>
            </header>
            <p>ESCREVER SOBRE MIM AQUI</p>
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

            <Gallery
              images={DEFAULT_IMAGES.map(({ id, thumbnail, caption }) => ({
                thumbnail,
                caption,
              }))}
            />

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
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Erdberger Länd 26 Top6.
                    <br />
                    Vienna, 1050
                    <br />
                  </li>

                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">rhaisaalves@gmail.com</a>
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
