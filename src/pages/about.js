import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

class About extends React.Component {
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
            <header className="major"></header>
            <h2>ABOUT ME</h2>
            <ul className="actions"></ul>
          </section>

          <section id="two">
            <p>
              {' '}
              I have a busness dregree and more than 10 years expirecience with
              quality assurance. I needed a carrer that fix in my life style.
              After I got married I moved countrys a couple times, every time
              that I change countrys, I need to start from zero. Even though I
              had a lot of experience and it was very good at my job.
              {/* It was always really hard to beggining, as like all my experience doesn't count. */}
            </p>
            <p>
              Now I am a Web developer student with experience building websites
              and web applications. My focus in JavaScript, React, HTML and CSS.
              I also work with Next.js and GraphQL.
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
