import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.updateSearch(this.state.search);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.updateSearch(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
              onKeyDown={this.handleKey}
            />
            <button
              className="btn search-btn"
              onClick={() => {
                this.props.updateSearch(this.state.search, this.state.type);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="row">
          <label className="col s12 m4 l4">
            <input
              name="filter"
              type="radio"
              data-type="all"
              checked={this.state.type === "all"}
              onChange={this.handleFilter}
            />
            <span>All</span>
          </label>
          <label className="col s12 m4 l4">
            <input
              name="filter"
              data-type="movie"
              type="radio"
              checked={this.state.type === "movie"}
              onChange={this.handleFilter}
            />
            <span>Movies</span>
          </label>
          <label className="col s12 m4 l4">
            <input
              name="filter"
              type="radio"
              data-type="series"
              checked={this.state.type === "series"}
              onChange={this.handleFilter}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
