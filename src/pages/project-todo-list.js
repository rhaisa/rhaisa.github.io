import React from 'react'

import Layout from '../components/layout'
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
        <a href="https://todo-list-rhaisa-2020.netlify.app">
          <img className="project" src={thumb01} alt="" />
        </a>
        <p>
          {' '}
          A Todo list made from scratch, in the Web Developer Bootcamp as the
          first main project.
        </p>
        <p>
          <strong>Used Technologies:</strong> figma, React, styled components,
          using state hooks.
        </p>
      </section>
    </div>
  </Layout>
)

export default TodoList
