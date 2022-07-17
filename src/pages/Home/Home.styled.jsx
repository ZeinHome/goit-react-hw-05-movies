import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Gallery = styled.ul``;

export const Galleryitem = styled.li`
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const GalleryLink = styled(NavLink)`
  color: blue;
`;
