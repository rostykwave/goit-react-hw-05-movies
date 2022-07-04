import { StyledLink } from './Navigation.styled';

export const Navigation = () => (
  <nav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/movies">Movies</StyledLink>
    <StyledLink to="/movies/:movieId">MovieDetails</StyledLink>
  </nav>
);
