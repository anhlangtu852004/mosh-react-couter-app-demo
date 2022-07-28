import React, { Component } from "react";
import { deleteMovie, getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";
import pagination from "./utils/pagination";

export class Videos extends Component {
  state = {
    movies: getMovies(),
    pagesSize: 4,
    currentPage: 1,
  };
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

  render() {
    const { length: count } = this.state.movies;
    const { pagesSize, currentPage, movies: allMovies } = this.state;
    const movies = pagination(allMovies, currentPage, pagesSize);
    console.log(movies);
    return (
      <>
        {this.state.movies.length === 0 ? (
          <p>there are no movies in database </p>
        ) : (
          <>
            <p>showing {this.state.movies.length} movies in the database</p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{this.getGenre(movie)}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onClick={() => this.handleLike(movie)}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        // onClick={() => this.handleDelete(movie._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={count}
              pagesSize={pagesSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </>
        )}
      </>
    );
  }
}

export default Videos;
