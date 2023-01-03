import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount(filterData) {
    this.fetchData(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix`);
  }

  updateSearch = (searchText, type = "all") => {
    if (searchText) {
      this.fetchData(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}${
          type !== "all" ? `&type=${type}` : ""
        }`
      );
    } else {
      this.fetchData(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix${
          type !== "all" ? `&type=${type}` : ""
        }`
      );
    }
  };

  fetchData = (apiAddress) => {
    fetch(apiAddress)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.Search,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>Ошибка: {error.message}</p>;
    } else if (!isLoaded) {
      return <Preloader />;
    } else {
      return (
        <main className="container content">
          <Search updateSearch={this.updateSearch} />
          <Movies items={items} />
        </main>
      );
    }
  }
}

export { Main };
