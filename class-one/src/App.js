import styled from "styled-components";

const Container = styled.section`
  display: flex;
`

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.bgColor};
`

const App = () => {
  return (
    <>
      <Container>
        <Box bgColor='teal' />
        <Box bgColor='tomato' />
      </Container>
    </>
  );
}

export default App;
