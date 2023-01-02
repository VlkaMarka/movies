export default function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div key={id} className="card">
      <div className="card-image">
        {poster === "N/A" ? (
          <img
            src={`https://via.placeholder.com/300x450?text=${title}`}
            alt="img"
          />
        ) : (
          <img src={poster} alt="img" />
        )}

        <span className="card-title">{title}</span>
      </div>
      <div className="card-content">
        <p>Year: {year}</p>
        <p>Type: {type}</p>
      </div>
    </div>
  );
}
