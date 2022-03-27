import React, { PureComponent } from 'react'
import './Card.css'
import { Card, Button } from 'react-bootstrap'

class CardItem extends PureComponent {
  state = {}

  constructor(props) {
    super(props)
    console.log('[Card.js] run constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[Card.js] run getDerivedStateFromProps')
    return null
  }

  // shouldComponentUpdate(props, state) {
  //   if (props.title !== this.props.title || props.body !== this.props.body) {
  //     return true
  //   }

  //   return false
  // }

  componentDidMount() {
    console.log('[Card.js] run componentDidMount')
  }

  eventHander() {
    console.log('Clicked 2')
  }

  render() {
    console.log('[Card.js] run render')
    let { title, body } = this.props
    return (
      <Card>
        <Card.Header as='h2'>{title}</Card.Header>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
          <Button onClick={() => this.eventHander()}>Click</Button>
        </Card.Body>
        <Card.Footer>
          <p>Card Footer</p>
        </Card.Footer>
      </Card>
    )
  }
}

export default CardItem
