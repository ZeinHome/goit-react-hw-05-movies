import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviesById } from '../../components/Services/Services';
import {
  MoviesDetailsContainer,
  Back,
  MoviesDetailsWrapper,
  MoviesDetailsInfo,
  MoviesDetailsImages,
  MoviesDetailsText,
  MoviesDetailsTitle,
  ListInfo,
  InfoContainer,
  InfoTitle,
} from './MoviesDetails.styled';

function MoviesDetails() {
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getMoviesById(id).then(setMovie);
  }, [id]);

  const genresMovie = movie => {
    if (movie.genres === undefined) {
      return;
    }
    return movie.genres.map(a => a.name + ' ');
  };
  const BackLink = ({ to }) => {
    return (
      <Link to={to}>
        <Back type="button"> Go back</Back>
      </Link>
    );
  };

  const backLinkHref = location?.state?.from ?? '/';

  return (
    <>
      <MoviesDetailsContainer>
        <BackLink to={backLinkHref}>Back to products</BackLink>
        <MoviesDetailsWrapper>
          <MoviesDetailsImages
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
          />

          <MoviesDetailsInfo>
            <MoviesDetailsTitle>{movie.title}</MoviesDetailsTitle>
            <MoviesDetailsText>
              User Score: {movie.vote_average}%
            </MoviesDetailsText>
            <MoviesDetailsTitle>Overview</MoviesDetailsTitle>
            <MoviesDetailsText>{movie.overview}</MoviesDetailsText>
            <MoviesDetailsTitle>Genres</MoviesDetailsTitle>
            <MoviesDetailsText>{genresMovie(movie)}</MoviesDetailsText>
          </MoviesDetailsInfo>
        </MoviesDetailsWrapper>
      </MoviesDetailsContainer>
      <InfoContainer>
        <InfoTitle>Additional information</InfoTitle>
        <ListInfo>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ListInfo>
      </InfoContainer>
      <Outlet />
    </>
  );
}
export default MoviesDetails;
