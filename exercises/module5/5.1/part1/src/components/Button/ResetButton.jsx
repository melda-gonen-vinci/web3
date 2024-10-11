import { Context } from "../../contexts/counterContext";
import { useContext } from "react";

const ResetButton = () => {
  const { resetAll } = useContext(Context);

  return (
    <button className="button" onClick={resetAll}>
      reset scores
    </button>
  );
}

export default ResetButton;