// sort movies by search string and switch status
export const sortMovies = (arr, searchString, switchStatus) => {
  return arr.filter(obj => {
    const hasMatchingTitle = (obj.nameEN && obj.nameEN.toLowerCase().includes(searchString.toLowerCase())) ||
                          (obj.nameRU && obj.nameRU.toLowerCase().includes(searchString.toLowerCase()));

    if (switchStatus) {
      return hasMatchingTitle && obj.duration && obj.duration < 30;
    } else {
      return hasMatchingTitle;
    }
  });
}

export const addIsLikedToMovies = (movies, savedMovies) => {
  return movies.map(movie => {
    const isLiked = savedMovies.some(savedMovie => savedMovie.movieId === movie.id);
    return { ...movie, isLiked };
  });
}

export const updateLikedStatus = (arr, movieId, isLiked) => {
  return arr.map((item) =>
    item.id === movieId ? { ...item, isLiked: isLiked } : item
  );
}

export const isMovieSaved = (movie, savedMovies) => {
  return savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
}

export const findById = (movieId, savedMovies) => {
  const foundMovie = savedMovies.find(savedMovie => savedMovie.movieId === movieId);
  return foundMovie ? foundMovie._id : null;
}

export const updateLikeStatus = (movies, savedMovies) => {
  const updatedMovies = movies.map(movie => {
    const isLiked = savedMovies.some(savedMovie => savedMovie.movieId === movie.id);
    return { ...movie, isLiked };
  });
  return updatedMovies;
}

export const parseErrorMessage = (htmlString) => {
  const errorStart = 'Error: ';
  const errorEnd = '<br>';

  const startIndex = htmlString.indexOf(errorStart);
  const endIndex = htmlString.indexOf(errorEnd, startIndex);

  if (startIndex !== -1 && endIndex !== -1) {
    return htmlString.substring(startIndex + errorStart.length, endIndex);
  }

  return null;
}

