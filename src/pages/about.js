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
              I have a business dregree and more than 10 years experience with
              quality assurance. Although I love the business field I needed a
              carrer that fix in my life style. After I got married I moved to
              different countrys a couple times, and every time that I change
              countrys, I need to start my carrer from scratch.
            </p>

            <p>
              I would like to have "A universal job" that is independent from
              language, legal or social aspects of the country I'm in. My
              enthusiasm and passion for learning is one of the reason I choose
              start learning code.
              {/* Even though I had a lot of experience and it was very good at my job. */}
            </p>
            <p>
              After we have settled in Vienna I decided that was the time to
              pursue my new carrer. I started studying from home for couple of
              months and them I took party of a bootcamp. So could sharpen my
              skills faster.
            </p>
            <p>
              I specialize in JavaScript and React. I also have experience
              building websites and web applicationswith Gatsby, Next.js and
              building REST APIs with Node and Express.
            </p>
            <div>
              <h3>SKILLS</h3>
            </div>
            <p>
              <strong>Front end:</strong> HTML, CSS, Bootstrap, Accessibility,
              SEO.{' '}
            </p>
            <p>
              <strong>Back end:</strong> Gatsby, Node.js, Javascript, React,
              Next.js, Express.
            </p>
            <p>
              <strong>Tools:</strong> Figma, Git, GitHub, heroku, VS Code.
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
