import { Context } from "../../contexts/opinionContext";
import { useContext } from "react";
import Opinion from "./Opinion";

const ListOpinions = () => {
  const { sortedOpinions } = useContext(Context);

  return sortedOpinions.map((opinion) => (
    <Opinion key={opinion.id} {...{ opinion }} />
  ));
}

export default ListOpinions;