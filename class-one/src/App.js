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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  overflow: hidden;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  entry: (isPrev) => ({
    x: isPrev ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
  exit: (isPrev) => ({
    x: isPrev ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 },
  }),
};

const App = () => {
  const [isPrev, setIsPrev] = useState(false);

  const [visible, setVisible] = useState(1);
  const prevSlide = () => {
    setIsPrev(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  const nextSlide = () => {
    setIsPrev(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };

  return (
    <Wrapper>
      <AnimatePresence custom={isPrev} mode="wait">
        <Box
          key={visible}
          variants={boxVariants}
          custom={isPrev}
          initial="entry"
          animate="center"
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>

      <button type="button" onClick={prevSlide}>
        prev
      </button>
      <button type="button" onClick={nextSlide}>
        next
      </button>
    </Wrapper>
  );
};

export default App;
