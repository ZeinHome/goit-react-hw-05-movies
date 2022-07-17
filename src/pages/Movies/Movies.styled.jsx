import styled from 'styled-components';

export const MoviesContainer = styled.form`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-left: 20px;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 300px;
  font: inherit;
  font-size: 20px;
  padding: 4px 10px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  height: 35px;
  border: 0.1px solid black;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2px 8px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;
