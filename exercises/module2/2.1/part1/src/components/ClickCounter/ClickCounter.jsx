import { useState } from 'react'

const ClickCounter = ({title, on10clicks = "You are a master in the art of clicking !", message = "Please click on me now !"}) => {
    const [count, setCount] = useState(0)
    const [onButton, setButton] = useState(false)

    return (
        <div>
            {onButton ? <p>{message}</p> : null}
            <button onClick={() => setCount(count + 1)}
            onMouseEnter={() => setButton(true)}
            onMouseLeave={() => setButton(false)}
            >
                count is {count}
                {count >= 10 ? <p>{on10clicks}</p>  : title}
            
            </button>
            
        </div>
    )

}
export default ClickCounter