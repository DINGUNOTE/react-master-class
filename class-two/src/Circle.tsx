import styled from 'styled-components';

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 4px solid ${(props) => props.borderColor};
  border-radius: 50%;
`;

const Circle = ({
  bgColor,
  borderColor,
  text = 'Default Text',
}: CircleProps) => (
  <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
    {text}
  </Container>
);

export default Circle;
