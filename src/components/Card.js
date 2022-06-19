import React from 'react'

function Card(props) {
  return (
    <div>
        <h1>
            {props.img}
            {props.key}
        </h1>

    </div>

  )
}

export default Card