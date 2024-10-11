import { Context } from "../../contexts/counterContext";
import { useContext } from "react";

const BadButton = () => {
  const { increaseBad } = useContext(Context);

  return (
    <button className="button" onClick={increaseBad}>
      increase bad
    </button>
  );
}

export default BadButton;