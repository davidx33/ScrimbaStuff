import React from 'react'

function Joke({ setup, punchline }) {
  return (
    <div>
        {setup && <h1>{setup}</h1>}
        {punchline && <h2>{punchline}</h2>}
    </div>
  )
}

export default Joke