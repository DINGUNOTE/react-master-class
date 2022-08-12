# 💡 React JS 마스터클래스 강의 학습 내용

## 📌 styled-components

- React에서 컴포넌트에 style을 부여하는 방법 중 인라인 스타일로 컴포넌트 구현부에서 스타일을 추가하는 방식이 있고, CSS Module을 이용하는 방법이 있지만 첫 번째는 코드의 가독성이 떨어지고, 그로 인해서 컴포넌트의 역할을 파악하기 어렵게 된다. 두 번째는 css module을 위해 추가로 파일을 생성해야 하는 번거로움이 있다. 이런 문제를 해결하고, 컴포넌트 내부에서 쉽게 스타일을 부여하기 위해서 `styled-components`를 사용한다.
- 컴포넌트에서 `prop`으로 데이터를 받아서 prop에 따라 다른 속성을 지정할 수 있다.
- `Extending Styles` : 다른 컴포넌트의 스타일을 상속하는 새 컴포넌트를 쉽게 만들려면 styled() 생성자에 상속받을 컴포넌트를 추가하면 된다.

  ```jsx
  import styled from 'styeld-components';

  const Button = styled.button`
    padding: 0.5rem 1rem;
    border: 1px solid #000;
  `;

  const CustomButton = styled(Button)`
    color: #fff;
    background-color: #000;
  `;
  ```

- `as`: 상황에 따라 다른 HTML 태그를 사용하고 싶을 때 `as`를 사용할 수 있다.

  ```jsx
  const Button = styled.button`
    padding: 0.5rem 1rem;
    border: 1px solid #000;
  `

  const App = () => {
  return (
    <>
      <Button>Log in</Button>
      <Button as='a'>Link</Button> // button 태그가 아닌 a 태그로 교체된다.
    </>
  )
  ```

- `Attaching additional props`: `attrs()`를 사용해서 HTML 요소로 원하는 속성을 전달할 수 있다.

  ```jsx
  import styled from 'styeld-components';

  const Input = styled.input.attrs({ required: true, minLength: 10, maxLength: 20 })`` // 기본적으로 Input 컴포넌트에 위 속성들이 추가된다.

  const App = () => {
  return (
    <>
      <Input />
      <Input />
      <Input />
    </>
  )
  ```

- `keyframes`: styled-components에서 keyframes를 import해서 css를 사용하듯이 애니메이션을 구현할 수 있다.

  ```jsx
  import styled, { keyframes } from 'styeld-components';

  const rotateAni = keyframes`
    from {
      transform: rotate(0deg);
    } to {
      transform: rotate(360deg);
    }
  `;

  const Box = styled.div`
    width: 200px;
    height: 200px;
    background-color: tomato;
    animation: ${rotateAni} 1s linear infinite;
  `;

  const App = () => {
    return <Box />;
  };
  ```

- `Pseudo Selectors`: SASS의 `중첩` 문법, `&` 다 사용 가능하다.

  ```jsx
  import styled from 'styeld-components';

  const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 36px;
      &:hover {
        transform: scale(1.5);
        transition: 0.3s ease;
      }
      &:active {
        opacity: 0;
      }
    }
  `;

  // 특정 태그에 의존적이지 않게 사용하고 싶다면 아래처럼 별도의 스타일 컴포넌트를 생성해서 사용 가능하다.
  const Emoji = styled.p`
    font-size: 36px;
  `;

  const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${Emoji} {
      &:hover {
        transform: scale(1.5);
        transition: 0.3s ease;
      }
      &:active {
        opacity: 0;
      }
    }
  `;

  const App = () => {
    return (
      <Box>
        <span>😀</span>
        <Emoji>😂</Emoji>
      </Box>
    );
  };
  ```

- `Theming`: `ThemeProvider`를 이용해서 App에 Theme를 전달하고 전달 된 Theme는 `theme prop`으로 App 컴포넌트 전역에서 사용할 수 있다. Theme를 정의해두고 다크 모드, 라이트 모드 등으로 사용할 수 있다.

  ```jsx
  // index.js
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';
  import { ThemeProvider } from 'styled-components';

  const darkTheme = {
    textColor: 'whitesmoke',
    backgroundColor: '#111',
  };

  const lightTheme = {
    textColor: '#111',
    backgroundColor: 'whitesmoke',
  };

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );

  // App.js
  import styled from 'styled-components';

  const Wrapper = styled.div`
    background: ${(props) => props.theme.backgroundColor};
  `;

  const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;

  const App = () => {
    return (
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    );
  };

  export default App;
  ```

> ### Reference
>
> [https://nomadcoders.co/react-masterclass/](https://nomadcoders.co/react-masterclass/)
