import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const App = () => {
  return (
    <Container>
      <Title>protected</Title>
    </Container>
  );
};

export default App;
