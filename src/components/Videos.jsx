import React, { Component } from "react";
import _, { get } from "lodash";

import ListGroup from "./common/listGroup";
import { deleteMovie, getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import Pagination from "./common/Pagination";
import pagination from "./utils/pagination";
import listGroup from "./common/listGroup";

export class Videos extends Component {
  state = {
    movies: [],
    genres: [],
    pagesSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  getGenre(movie) {
    const genre = getGenres().find((g) => g._id === movie.genre._id);
    return genre.name;
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    // deleteMovie(id);
    // this.setState({ movies: getMovies() });
  };
  //   handleDelete = (id) => {
  //     // deleteMovie(id);
  //     // this.setState({ movies: getMovies() });
  //   };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pagesSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = pagination(sorted, currentPage, pagesSize);
    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pagesSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;

    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            selectedItem={this.state.selectedGenre}
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          {this.state.movies.length === 0 ? (
            <p>there are no movies in database </p>
          ) : (
            <>
              <p>showing {totalCount} movies in the database</p>
              <MoviesTable
                onDelete={this.handleDelete}
                onLike={this.handleLike}
                movies={movies}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />

              <Pagination
                itemsCount={totalCount}
                pagesSize={pagesSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Videos;
