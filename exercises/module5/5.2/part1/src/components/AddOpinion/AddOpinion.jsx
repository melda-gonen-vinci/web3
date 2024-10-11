import { Context } from "../../contexts/opinionContext";
import { useContext } from "react";
import { useState } from "react";

const AddOpinion = () => {
    const [opinion, setOpinion] = useState("");
    const { createOpinion } = useContext(Context);

    const handleOnChange = (e) => setOpinion(e.target.value);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        createOpinion(opinion);
        setOpinion("");
    };
    
    return (
        <form onSubmit={handleOnSubmit}>
            <input
                placeholder="enter your opinion here please ; )"
                value={opinion}
                onChange={handleOnChange}
                required
              />
            <button type="submit">add opinion</button>
        </form>
    );
}

export default AddOpinion;