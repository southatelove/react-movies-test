import { Movie } from "./Movie";
function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((item) => <Movie key={item.imdbID} {...item}></Movie>)
      ) : (
        <h4>Ничего не найдено</h4>
      )}
    </div>
  );
}
export { Movies };
