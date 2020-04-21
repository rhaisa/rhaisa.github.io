import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

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
              I have a business dregree and more than 10 years of experience
              with quality assurance. Although I love the business field, I felt
              the need to find a compatible career with my life style. After I
              got married, I moved to different countries a couple times, and
              every time that I changed countries, I had to start my career from
              scratch.
            </p>

            <p>
              I would like to have "an universal job" that is independent from
              language, legal or social aspects of the country I'm living in. My
              enthusiasm and passion for learning are some of the reasons I have
              chosen to start learning to code.
              {/* Even though I had a lot of experience and it was very good at my job. */}
            </p>
            <p>
              After we settled in Vienna, I decided that was the time to pursue
              my new career. I started studying from home for a couple of months
              and then I signed up for a bootcamp to sharpen my skills faster.
            </p>
            <p>
              I specialize in JavaScript and React. I also have experience
              building websites and web applications with Gatsby, Next.js and
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
              <strong>Tools:</strong> Figma, Git, GitHub, Heroku, VS Code.
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
