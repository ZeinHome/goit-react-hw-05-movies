import { Gallery, Galleryitem, GalleryLink } from './Home.styled';
import { fetchTrendigMovies } from '../../components/Services/Services';
import { useEffect, useState } from 'react';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const TrendingMovie = fetchTrendigMovies();

    TrendingMovie.then(res => {
      return setMovies([...res]);
    });
  }, []);

  return (
    <Gallery>
      {movies.map(({ title, id }) => (
        <Galleryitem key={id}>
          <GalleryLink to={`movies/${id}`}>{title}</GalleryLink>
        </Galleryitem>
      ))}
    </Gallery>
  );
}
export default Home;
