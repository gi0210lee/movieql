import fetch from "node-fetch";
import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

// const getMovies = (limit, rating) => {
//   function AddDelimeter(url) {
//     const ch = url.slice(-1);
//     if (ch === "?") {
//       url += "";
//     } else if (ch !== "&") {
//       url += "&";
//     }
//     return url;
//   }

//   let REQUEST_URL = API_URL;
//   if (limit > 0) {
//     REQUEST_URL = AddDelimeter(REQUEST_URL);
//     REQUEST_URL += `limit=${limit}`;
//   }
//   if (rating > 0) {
//     REQUEST_URL = AddDelimeter(REQUEST_URL);
//     REQUEST_URL += `minimum_rating=${rating}`;
//   }
//   return fetch(`${REQUEST_URL}`)
//     .then((res) => res.json())
//     .then((json) => json.data.movies);
// };

const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      mininum_rating: rating,
    },
  });

  return movies;
};

const getMovie = async (id) => {
  console.log(MOVIE_DETAILS_URL);
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, { params: { movie_id: id } });

  return movie;
};

const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, { params: { movie_id: id } });

  return movies;
};

export { getMovies, getMovie, getSuggestions };
