import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  eventHander() {
    console.log('Clicked 2')
  }

  render() {
    let { title, body } = this.props

    return (
      <div className='card'>
        <header className='card-header'>
          <h2>{title}</h2>
        </header>
        <section className='card-body'>
          <p>{body}</p>
          <button onClick={() => this.eventHander()}>Click</button>
        </section>
        <footer>
          <p>Card Footer</p>
        </footer>
      </div>
    )
  }
}

export default Card
