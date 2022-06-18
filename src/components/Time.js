import React from 'react'

function Time() {
    const [clockData, setClockData] = React.useState("")

    React.useEffect(function() {
        setInterval(() => {
            const date = new Date();
            setClockData(date.toLocaleTimeString())
        }, 1000);
    }, [])

  return (
    <div>
        <h1>
            Below is the time
        </h1>
        <span>
            {clockData}
        </span>

    </div>
    
  )
}

export default Time