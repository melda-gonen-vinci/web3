import PageTitle from "components/PageTitle/PageTitle";
import AddMovieForm from "components/AddMovieForm/AddMovieForm";
import { useOutletContext } from "react-router-dom";

const AddMoviePage = () => {
  const { onMovieAdded } = useOutletContext();
  return (
    <>
      <PageTitle title="Add a movie" />
      <AddMovieForm onMovieAdded={onMovieAdded} />
    </>
  );
  };
  
  export default AddMoviePage;