import Movie from "./Movie";

export default function Movies(props) {
  const { items = [] } = props;
  return (
    <div className="movies">
      {items.length ? (
        items.map((item) => <Movie key={item.imdbID} {...item} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

// Title={item.Title} Year={item.Year} imdbID={item.imdbID} Type={item.Type} Poster={item.Poster} === {...item}
