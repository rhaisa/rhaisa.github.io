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
            <p>
            I am originally from Brazil, but I have now settled in Vienna since the end of 2016, after experiencing life in three different countries, I have decided that was the time to pursue a new career. During this new challenge, I have found that a successful career in the modern days is directly related to technology.  
            </p>

            <p>
            The tech industry was the most exciting field I could find which checks all the boxes. My enthusiasm and passion for learning are some of the reasons I have chosen to start learning to code. I started studying from home for a couple of months and then I signed up for a coding Bootcamp to sharpen my skills faster.
            </p>
            <p>
            During my training at the Bootcamp I experienced Tester activities, and it was love at first sight. It was the complete match between my quality assurance expertise and the career path that I was aiming for. Following the Bootcamp I started to study more about testing frameworks, and recently became a   ISTQB certified Tester.
            </p>
            <p>
            There are still many things to learn, but as I love learning new things everyday, I am sure this is the right path for me.
            </p>
           
            <h3>SKILLS</h3>
            <p>
              <strong>Front end:</strong> HTML, CSS, Bootstrap, Accessibility, SEO,  React, Gatsby, Next.js.<br/>
              <strong>Back end:</strong>  Node.js, JavaScript, PostgreSQL and SQL fundamentals.<br/>
              <strong>Tools:</strong> Figma, Git, GitHub, Heroku and VS Code.
            </p>
            <h3>CURRENTLY LEARNING</h3>
            <p>
              <strong>Testing Tools:</strong> Tosca and Selenium<br/>
              <strong>Project Management Tools:</strong> Confluence and Jira<br/>
              <strong>Testings Frameworks:</strong> Robot Framework and Cypress<br/>
              <strong>Agile:</strong> Scrum, Continuous Integration (CI) and Continuous Deployment (CD)<br/>
            </p>
              
          
           
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
