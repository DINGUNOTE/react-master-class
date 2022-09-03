import styled from 'styled-components';
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from 'framer-motion';
import { useEffect, useState } from 'react';

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10vw;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 50vw;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const Arr = [1, 2, 3, 4];
  const [id, setId] = useState(null);
  console.log(id);

  return (
    <Wrapper>
      <Grid>
        {Arr.map((n) => (
          <Box key={n} layoutId={n} onClick={() => setId(n)} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            onClick={() => setId(null)}
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default App;
