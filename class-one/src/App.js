import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useEffect } from 'react';

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 200vh;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const App = () => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-500, 500], [360, -360]);
  const gradient = useTransform(
    x,
    [-500, 500],
    [
      'linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))',
      'linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))',
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotate, scale }} drag="x" dragSnapToOrigin></Box>
    </Wrapper>
  );
};

export default App;
