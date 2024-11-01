import PageTitle from "components/PageTitle/PageTitle";
import AddMovieForm from "components/AddMovieForm/AddMovieForm";
import { useOutletContext } from "react-router-dom";

const AddMoviePage = () => {
    const pageTitle = "Add Movie";
    const {onMovieAdded} = useOutletContext();

    console.log(onMovieAdded);
    return (
      <div>
        <PageTitle title={pageTitle} />
        
        <AddMovieForm onMovieAdded={onMovieAdded}/>
      </div>
    );
  };
  
  export default AddMoviePage;