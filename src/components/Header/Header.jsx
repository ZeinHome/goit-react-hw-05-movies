import {
  HeaderContainer,
  HeaderList,
  HeaderListItem,
  HeaderLink,
} from './Header.styled';

function Header() {
  return (
    <HeaderContainer>
      <HeaderList>
        <HeaderListItem>
          <HeaderLink to="/">Home</HeaderLink>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderLink to="movies">Movies</HeaderLink>
        </HeaderListItem>
      </HeaderList>
    </HeaderContainer>
  );
}

export default Header;
