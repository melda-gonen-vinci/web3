import { useState } from 'react'

const ClickCounter = ({title, on10clicks = "You are a master in the art of clicking !"}) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                count is {count}
                {count >= 10 ? <p>{on10clicks}</p>  : title}
            </button>
        </div>
    )

}
export default ClickCounter