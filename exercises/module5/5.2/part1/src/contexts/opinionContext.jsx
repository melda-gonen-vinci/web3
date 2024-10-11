import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = ({children}) => {
    const [sortedOpinions, setSortedOpinions] = useState([])

    const increaseOpinionScore = (opinion) => {
        
            const updatedOpinions = [...sortedOpinions]
            const opinionIndex = updatedOpinions.findIndex(op => op.id === opinion)
            updatedOpinions[opinionIndex].score++
            setSortedOpinions(updatedOpinions)
        
    
    }

    const sortOpinions = (opinions) => {
        setSortedOpinions(opinions.sort((a, b) => b.score - a.score))
    }

    const createOpinion = (opinion) => {    
        const newOpinion = {
            id: sortedOpinions.length + 1,
            text: opinion,
            score: 0
        }
        setSortedOpinions([...sortedOpinions, newOpinion])
    }
    
    const exposedValue = {
        sortedOpinions,
        sortOpinions,
        increaseOpinionScore,
        createOpinion
    }
    
    return <Context.Provider value={exposedValue}>{ children }</Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}    
