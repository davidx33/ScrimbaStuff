import React from 'react'

function Form() {

    const [count, setCount] = React.useState(0)
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

  return (
    <div>
        <form>
            <input 
            placeholder='FirstName'
            type="text"></input>
            <input 
            placeholder='Last Name'
            type="text"></input>
            <button onClick={increment}>
                Click Me to Increment Count
            </button>
            <button onClick={decrement}>
                Click Me to Decrement Count
            </button>
            <button>
                Hey !
            </button>
            <input type="text" placeholder='Gotta catch up'></input>
        </form>
        <h1>
            {count}
        </h1>
        
    </div>
  )
}

export default Form