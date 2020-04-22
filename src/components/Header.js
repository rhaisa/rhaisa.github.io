import React from 'react'
import { Link } from 'gatsby'
import Footer from './Footer'
import avatar from '../assets/images/rhaisa.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <Link to="/" className="image avatar">
            <img src={avatar} alt="" />
          </Link>
          <h1>
            <strong>Hi! I'am Rhaisa,</strong> <br />
            Welcome to my website
            <br />
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
