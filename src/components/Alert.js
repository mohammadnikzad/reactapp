import React, { PureComponent, useState } from 'react'
import './Card.css'
import { Button, Alert } from 'react-bootstrap'

// class AlertComponent extends PureComponent {
//   // shouldComponentUpdate(props, state) {
//   //   if (props.show !== this.props.state) return true

//   //   return false
//   // }

//   render() {
//     console.log('[AlertComponent.js] run render')

//     let { show, setShow } = this.props

//     return (
//       <>
//  <Alert.Heading>How's it going?!</Alert.Heading>
//  <p>
//    Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
//    eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
//    amet fermentum.
//  </p>
//  <hr />
//  <div className='d-flex justify-content-end'>
//    <Button onClick={() => setShow(false)} variant='outline-success'>
//      Close me y'all!
//    </Button>
//  </div>

//       </>
//     )
//   }
// }

function AlertComponent(props) {
  // let { show, setShow } = props
  const [show, setShow] = useState(false)

  return (
    <>
      <Alert show={show} variant='success'>
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className='d-flex justify-content-end'>
          <Button onClick={() => setShow(false)} variant='outline-success'>
            Close me y'all!
          </Button>
        </div>
      </Alert>
    </>
  )
}

export default AlertComponent
