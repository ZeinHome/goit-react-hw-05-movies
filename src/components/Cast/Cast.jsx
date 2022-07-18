import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../Services/Services';
import { CastImage } from './Cast.styled';

function Cast() {
  const [cast, setCast] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getMovieCredits(id).then(setCast);
  }, [id]);

  const imageSeacrh = profile_path => {
    if (profile_path === null) {
      return 'https://image.tmdb.org/t/p/original/qLJm1n615JinCuizZSxbZiVtEr8.jpg';
    }

    return `https://image.tmdb.org/t/p/original${profile_path}`;
  };

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                <CastImage src={imageSeacrh(profile_path)} alt={name} />
                <h3>{name}</h3>
                <p>{character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Cast;
