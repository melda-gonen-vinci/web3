import { Context } from "../../contexts/counterContext";
import { useContext } from "react";

const OkButton = () => {
  const { increaseOk } = useContext(Context);

  return (
    <button className="button" onClick={increaseOk}>
      increase ok
    </button>
  );
}

export default OkButton;