import React from 'react'

import Layout from '../components/Layout'
import thumb01 from '../assets/images/thumbs/todoList.png'

const TodoList = () => (
  <Layout>
    <div id="main">
      <section id="one">
        <header className="major"></header>
        <h2>TODO LIST</h2>
        <ul className="actions"></ul>
      </section>

      <section id="two">
        <a
          href="https://todo-list-rhaisa-2020.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="project" src={thumb01} alt="" />
        </a>
        <p>
          {' '}
          A Todo list made from scratch in the Web Development Bootcamp as the
          first main project.
        </p>
        <p>
          <strong>Used Technologies:</strong> Figma, React, styled components,
          React hooks.
        </p>
      </section>
      <div className="inner">
        <ul className="icons">
          <li>
            <a
              href="https://github.com/rhaisa/todo-list"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-github git-url"
            >
              <span> Project source code </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default TodoList
