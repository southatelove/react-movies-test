import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter" && event.key.length > 1) {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    const { search } = this.state;
    return (
      <div className="row">
        <div className="input-field  ">
          <input
            placeholder="search"
            className="validate"
            type="search"
            value={search}
            onKeyDown={this.handleKey}
            onChange={(event) => this.setState({ search: event.target.value })}
          />

          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
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
                onChange={this.handleFilter}
                checked={this.state.type === "all"}
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
                onChange={this.handleFilter}
                checked={this.state.type === "movie"}
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
                onChange={this.handleFilter}
                checked={this.state.type === "series"}
              />
              <span>serials only</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}
export { Search };
