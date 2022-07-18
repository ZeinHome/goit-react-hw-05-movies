import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchMovies } from '../../components/Services/Services';
import {
  MoviesContainer,
  SearchFormInput,
  SearchFormBtn,
} from './Movies.styled';
import { Galleryitem, GalleryLink } from '../Home/Home.styled';
import { useSearchParams } from 'react-router-dom';

function Movies() {
  const [query, setQuery] = useState('');
  const [arrayFilms, setArrayFilms] = useState([]);
  const [setSearchParams] = useSearchParams();

  const handelImageChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handelSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Введите текст!');
      return;
    }

    SearchMovies(query).then(res => setArrayFilms([...res]));
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  // const updateQueryString = query => {};

  return (
    <div>
      <MoviesContainer onClick={handelSubmit}>
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
                  <GalleryLink to={`${item.id}`}>{item.title} </GalleryLink>
                </Galleryitem>
              );
            })}
      </ul>
    </div>
  );
}

export default Movies;
