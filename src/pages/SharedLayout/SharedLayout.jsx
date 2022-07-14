import { Outlet } from 'react-router-dom';
import { Box } from 'styleConfig/Box';
import { Container, Header, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Box boxShadow="header">
        <Container>
          <Header>
            <nav>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/movies">Movies</StyledLink>
            </nav>
          </Header>
        </Container>
      </Box>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};
