import { useState } from 'react'

const ClickCounter = ({title, on10clicks = "You are a master in the art of clicking !", message = "Please click on me now !"}) => {
    const storedCount = JSON.parse(localStorage.getItem("count"))
    const [count, setCount] = useState(storedCount)
    const [onButton, setButton] = useState(false)
    

    return (
        <div>
            {onButton ? <p>{message}</p> : null}
            <button onClick={() => {
            const newCount = count + 1
            setCount(newCount)
            localStorage.setItem("count", newCount)
            }
            }
            
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