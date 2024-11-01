import { useOutletContext } from "react-router-dom";
import MovieTitleList from "components/MovieTitleList/MovieTitleList";

const HomePage = () => {
  const { movies } = useOutletContext();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my favorite movies website!</p>
      <h4>My favorites movies </h4>
      <MovieTitleList movies={movies} />
    </div>
  );
};

export default HomePage;