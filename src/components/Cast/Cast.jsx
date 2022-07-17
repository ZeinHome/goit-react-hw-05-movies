import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../Services/Services';
import { CastImage } from './Cast.styled';

function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieCredits(id).then(res => setCast([...res]));
  }, [id]);

  return (
    <>
      <ul>
        {cast === undefined
          ? null
          : cast.map(item => {
              return (
                <li key={item.id}>
                  <CastImage
                    src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                    alt={item.name}
                  />
                  <h3>{item.name}</h3>
                  <p>{item.character}</p>
                </li>
              );
            })}
      </ul>
    </>
  );
}

export default Cast;
