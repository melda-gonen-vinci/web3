import { Context } from "../../contexts/opinionContext";
import { useContext } from "react";

const Opinion = ({opinion}) => {
    const { increaseOpinionScore } = useContext(Context);
    
    return (
        <ul>
            <li>{opinion.text} : {opinion.score}</li>
            <button className="button" onClick={() => increaseOpinionScore(opinion.id)}>vote</button>
            <br />
        </ul>
    );
}

export default Opinion;