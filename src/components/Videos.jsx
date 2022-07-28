import React, { Component } from "react";
import { deleteMovie, getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

export class Videos extends Component {
  state = {
    movies: getMovies(),
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
  render() {
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
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{this.getGenre(movie)}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
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
          </>
        )}
      </>
    );
  }
}

export default Videos;
