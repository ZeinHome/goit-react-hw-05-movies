import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchMovies } from '../../components/Services/Services';
import {
  MoviesContainer,
  SearchFormInput,
  SearchFormBtn,
} from './Movies.styled';
import { Galleryitem, GalleryLink } from '../Home/Home.styled';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

function Movies() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [arrayFilms, setArrayFilms] = useState([]);
  const [, setSearchParams] = useSearchParams();
  const searchQuery = new URLSearchParams(location.search).get('query');
  const handelImageChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handelSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Введите текст!');
      return;
    }
    navigate({ ...location, search: `query=${query}` });
    SearchMovies(query).then(res => setArrayFilms([...res]));
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!searchQuery) return;

    SearchMovies(searchQuery).then(setArrayFilms).catch(console.log);
  }, [searchQuery]);

  return (
    <div>
      <MoviesContainer type="button" onClick={handelSubmit}>
        <SearchFormInput
          type="text"
          autocomplete="off"
          value={query}
          onChange={handelImageChange}
        />
        <SearchFormBtn>Search</SearchFormBtn>
      </MoviesContainer>
      <ul>
        {arrayFilms.length === 0
          ? null
          : arrayFilms.map(item => {
              return (
                <Galleryitem key={item.id}>
                  <GalleryLink to={`${item.id}`} state={{ from: location }}>
                    {item.title}{' '}
                  </GalleryLink>
                </Galleryitem>
              );
            })}
      </ul>
    </div>
  );
}

export default Movies;
