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
            I am originally from Brazil, but I've settled in Barcelona, Spain, after experiencing life in three different countries. Living in distinct places brought me unique life experiences such as improving my problem solving skills, broadening my worldview, language skills, cultural awareness and adaptability. During this time, I realised that a successful career in the modern days is directly related to technology.  
            </p>

            <p>
            The tech industry was the most exciting field I could find which checks all the boxes. My enthusiasm and passion for learning are some of the reasons I have chosen to start learning to code. I started studying from home for a couple of months and then I signed up for a coding Bootcamp to sharpen my skills faster.
            </p>
            <p>
            During my training at the Bootcamp I experienced Tester activities, and it was love at first sight. It was the complete match between my quality assurance expertise and the career path that I was aiming for. Following the Bootcamp I started to study more about testing frameworks, and recently became a   ISTQB certified Tester.
            </p>
            <p>
            Right after the Bootcamp I was lucky enough to be part of an amazing team, I worked as a software tester engineer for a medical company. [BD](https://www.bd.com/en-us/) is one of the largest global medical technology companies in the world and is advancing the world of health by improving medical discovery, diagnostics and the delivery of care. It has more than 70,000 employees.
            </p>
            <p>
            There are still many things to learn, but as I love learning new things everyday, I am sure this is the right path for me.
            </p>
           
            <h3>SKILLS</h3>
            <p>
              Strong written and verbal communication skills, analytical and logical mindset, interpersonal skills, eagerness to learn and attention to detail.<br/>
              <strong>Tools:</strong> Figma, Tosca, Azure DevOps, Confluence, Jira, SQL server, Agile methodologies.<br/>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
