import React, { useState } from "react";

const Search = (props) => {
  const { searchMovies } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter" && event.key.length > 1) {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field  ">
        <input
          placeholder="search"
          className="validate"
          type="search"
          value={search}
          onKeyDown={handleKey}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button
          className="btn search-btn"
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
      </div>
      <div className="buttonfilter">
        <p>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === "all"}
            />
            <span>all</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === "movie"}
            />
            <span>movies only</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === "series"}
            />
            <span>serials only</span>
          </label>
        </p>
      </div>
    </div>
  );
};
export { Search };
