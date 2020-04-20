import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/rhaisa.png'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Welcome</strong> <br />
            this is my online portfolio
            <br />
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
