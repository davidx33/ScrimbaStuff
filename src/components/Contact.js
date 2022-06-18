import React from 'react'

function Contact(props) {
  return (
    <div>
        <h1>
            {props.name}
        </h1>
        <img src = {[props.img]}/>
    </div>
  )
}

export default Contact