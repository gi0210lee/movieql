// import { getMovies, getById, deleteMovie, addMovie } from "./movieDB";
import { getMovies, getMovie, getSuggestions } from "./movieDB";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
  // Mutation: {
  // addMovie: (_, { name, score }) => addMovie(name, score),
  // deleteMovie: (_, { id }) => deleteMovie(id),
  // },
};

export default resolvers;
