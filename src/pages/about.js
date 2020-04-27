import React from 'react'
import Helmet from 'react-helmet'
import '../assets/scss/pages/projects.scss'

import Layout from '../components/Layout'

class About extends React.Component {
  render() {
    const siteTitle = 'My personal portfolio'
    const siteDescription = 'About Me'

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
            <p>I am from Brazil, but I live in Vienna since the end of 2016.</p>
            <p>
              I have a business degree and more than 10 years of experience with
              quality assurance. Although I love that business field, I felt the
              need to find a career that's compatible with my lifestyle. After I
              got married, I moved to different countries a couple of times, and
              every time that I changed countries, I had to start my career from
              scratch.
            </p>

            <p>
              I would like to have a "universal job" that is independent from
              language and legal or social aspects of the country I'm living in.
              My enthusiasm and passion for learning are some of the reasons I
              have chosen to start learning to code.
              {/* Even though I had a lot of experience and it was very good at my job. */}
            </p>
            <p>
              After we settled in Vienna, I decided that was the time to pursue
              my new career. I started studying from home for a couple of months
              and then I signed up for a bootcamp to sharpen my skills faster.
            </p>
            <p>
              I specialize in JavaScript and React and also have experience
              building websites and web applications with Gatsby, Next.js as
              well as building REST APIs with Node.js and Express.
            </p>
            <div>
              <h3>SKILLS</h3>
            </div>
            <p>
              <strong>Front end:</strong> HTML, CSS, Bootstrap, Accessibility,
              GraphQL, SEO.
            </p>
            <p>
              <strong>Back end:</strong> Gatsby, Node.js, JavaScript, React,
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
