import { Context } from "../../contexts/counterContext";
import { useContext } from "react";

const GoodButton = () => {
  const { increaseGood } = useContext(Context);

  return (
    <button className="button" onClick={increaseGood}>
      increase good
    </button>
  );
}

export default GoodButton;