# ๐ก React JS ๋ง์คํฐํด๋์ค ๊ฐ์ ํ์ต ๋ด์ฉ

## ๐ Project

- [TOP 100 Crypto Tracker](https://github.com/DINGUNOTE/top100-crypto-tracker)
- [ToDo](https://github.com/DINGUNOTE/practice-recoil-todo)
- [Kanban](https://github.com/DINGUNOTE/kanban)
- [Nomflix](https://github.com/DINGUNOTE/nomflix)

## ๐ styled-components

- React์์ ์ปดํฌ๋ํธ์ style์ ๋ถ์ฌํ๋ ๋ฐฉ๋ฒ ์ค ์ธ๋ผ์ธ ์คํ์ผ๋ก ์ปดํฌ๋ํธ ๊ตฌํ๋ถ์์ ์คํ์ผ์ ์ถ๊ฐํ๋ ๋ฐฉ์์ด ์๊ณ , CSS Module์ ์ด์ฉํ๋ ๋ฐฉ๋ฒ์ด ์์ง๋ง ์ฒซ ๋ฒ์งธ๋ ์ฝ๋์ ๊ฐ๋์ฑ์ด ๋จ์ด์ง๊ณ , ๊ทธ๋ก ์ธํด์ ์ปดํฌ๋ํธ์ ์ญํ ์ ํ์ํ๊ธฐ ์ด๋ ต๊ฒ ๋๋ค. ๋ ๋ฒ์งธ๋ css module์ ์ํด ์ถ๊ฐ๋ก ํ์ผ์ ์์ฑํด์ผ ํ๋ ๋ฒ๊ฑฐ๋ก์์ด ์๋ค. ์ด๋ฐ ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ๊ณ , ์ปดํฌ๋ํธ ๋ด๋ถ์์ ์ฝ๊ฒ ์คํ์ผ์ ๋ถ์ฌํ๊ธฐ ์ํด์ `styled-components`๋ฅผ ์ฃผ๋ก ์ฌ์ฉํ๋ค.
- ์ปดํฌ๋ํธ์์ `prop`์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ prop์ ๋ฐ๋ผ ๋ค๋ฅธ ์์ฑ์ ์ง์ ํ  ์ ์๋ค.
- `Extending Styles` : ๋ค๋ฅธ ์ปดํฌ๋ํธ์ ์คํ์ผ์ ์์ํ๋ ์ ์ปดํฌ๋ํธ๋ฅผ ์ฝ๊ฒ ๋ง๋ค๋ ค๋ฉด `styled()` ์์ฑ์์ ์์๋ฐ์ ์ปดํฌ๋ํธ๋ฅผ ์ถ๊ฐํ๋ฉด ๋๋ค.

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

- `as`: ์ํฉ์ ๋ฐ๋ผ ๋ค๋ฅธ HTML ํ๊ทธ๋ฅผ ์ฌ์ฉํ๊ณ  ์ถ์ ๋ `as`๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.

  ```jsx
  const Button = styled.button`
    padding: 0.5rem 1rem;
    border: 1px solid #000;
  `

  const App = () => {
  return (
    <>
      <Button>Log in</Button>
      <Button as='a'>Link</Button> // button ํ๊ทธ๊ฐ ์๋ a ํ๊ทธ๋ก ๊ต์ฒด๋๋ค.
    </>
  )
  ```

- `Attaching additional props`: `attrs()`๋ฅผ ์ฌ์ฉํด์ HTML ์์๋ก ์ํ๋ ์์ฑ์ ์ ๋ฌํ  ์ ์๋ค.

  ```jsx
  import styled from 'styeld-components';

  const Input = styled.input.attrs({ required: true, minLength: 10, maxLength: 20 })`` // ๊ธฐ๋ณธ์ ์ผ๋ก Input ์ปดํฌ๋ํธ์ ์ ์์ฑ๋ค์ด ์ถ๊ฐ๋๋ค.

  const App = () => {
  return (
    <>
      <Input />
      <Input />
      <Input />
    </>
  )
  ```

- `keyframes`: styled-components์์ keyframes๋ฅผ importํด์ css๋ฅผ ์ฌ์ฉํ๋ฏ์ด ์ ๋๋ฉ์ด์์ ๊ตฌํํ  ์ ์๋ค.

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

- `Pseudo Selectors`: SASS์ `์ค์ฒฉ` ๋ฌธ๋ฒ, `&` ๋ค ์ฌ์ฉ ๊ฐ๋ฅํ๋ค.

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

  // ํน์  ํ๊ทธ์ ์์กด์ ์ด์ง ์๊ฒ ์ฌ์ฉํ๊ณ  ์ถ๋ค๋ฉด ์๋์ฒ๋ผ ๋ณ๋์ ์คํ์ผ ์ปดํฌ๋ํธ๋ฅผ ์์ฑํด์ ์ฌ์ฉ ๊ฐ๋ฅํ๋ค.
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
        <span>๐</span>
        <Emoji>๐</Emoji>
        <Emoji as="div">๐</Emoji>
      </Box>
    );
  };
  ```

- `Theming`: `ThemeProvider`๋ฅผ ์ด์ฉํด์ App์ Theme๋ฅผ ์ ๋ฌํ๊ณ  ์ ๋ฌ ๋ Theme๋ `theme prop`์ผ๋ก App ์ปดํฌ๋ํธ ์ ์ญ์์ ์ฌ์ฉํ  ์ ์๋ค. Theme๋ฅผ ์ ์ํด๋๊ณ  ๋คํฌ ๋ชจ๋, ๋ผ์ดํธ ๋ชจ๋ ๋ฑ์ผ๋ก ์ฌ์ฉํ  ์ ์๋ค.

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

## ๐ React Query

- React ์ ํ๋ฆฌ์ผ์ด์์์ ์๋ฒ state๋ฅผ fetching, caching, synchronizing, updating ํ  ์ ์๊ฒ ๋์์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
- `global state`๋ฅผ ๊ฑด๋๋ฆฌ์ง ์๊ณ  React ๋ฐ React Native ์ ํ๋ฆฌ์ผ์ด์์์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๊ณ , ์บ์ํ๊ณ , ์๋ฐ์ดํธ ํ๋ค.
- [https://react-query.tanstack.com/quick-start](https://react-query.tanstack.com/quick-start)
- `useQuery`์ ์ธ ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ธ options ๊ฐ์ฒด์ `refetchInterval: time(ms)` ๊ฐ์ ์ฃผ๊ฒ ๋๋ฉด ํด๋น ๋ฐ๋ฆฌ์ด ๋จ์๋ก ๊ณ์ํด์ refetch ์ํฌ ์ ์๋ค.

```jsx
// Create a client
const queryClient = new QueryClient()

// Provide the client to your App
<QueryClientProvider client={queryClient} />
```

## ๐ React Router 6์์ Outlet ์ปดํฌ๋ํธ์ useOutletContext() ํ์ ์ฌ์ฉํด์ prop ์ ๋ฌํ๊ณ  ๋ฐ๊ธฐ

```jsx
// 1. ์์ ์ปดํฌ๋ํธ์์ Outlet ์ปดํฌ๋ํธ์ context์ prop ์ ๋ฌ
<Outlet context={{ fruit: 'apple' }} />;

// 2. ํ์ ์ปดํฌ๋ํธ์์ useOutletContext() hook์ ์ฌ์ฉํด์ props๋ฅผ ๋ฐ์์จ๋ค.
import { useOutletContext } from 'react-router';

const data = useOutletContext(); // { fruit: 'apple' }
```

- [https://reactrouter.com/docs/en/v6/api#useoutletcontext](https://reactrouter.com/docs/en/v6/api#useoutletcontext)

## ๐ Recoil

ํ์ด์ค๋ถ์์ ๋ง๋  ReactJS์์ ์ฌ์ฉํ  ์ ์๋ ์ํ ๊ด๋ฆฌ ๋๊ตฌ, ๊ฐ๋จํด์ ์ดํด๋ ์ฝ๊ณ  ์ฌ์ฉํ๊ธฐ ์ข์ ์ฅ์ ์ด ์๋ค.

- ์ํ ๊ด๋ฆฌ๊ฐ ํ์ํ ์ด์ 

  1. `Prop Drilling` : App์ ์ปดํฌ๋ํธ ๋ณต์ก๋๊ฐ ์ฌํด์ง์๋ก props๋ฅผ ํ์ ์ปดํฌ๋ํธ๋ก ์ ๋ฌํ๋ ๊ณผ์ ์ด ์ ์  ๋ ๋ง์์ง๊ณ  ์ฝ๋๋ฅผ ์ฝ์ ๋ ํด๋น prop์ ์ถ์ ํ๊ธฐ ํ๋ค์ด์ง๋ค.
  2. ๋ณต์กํ ์ํ ์๋ฐ์ดํธ ๋ก์ง๋ค์ ์ปดํฌ๋ํธ์์ ๋ผ์ด๋ผ ์ ์๊ณ , ์ด๋ฅผ ๋ชจ๋ํํด์ ์ฌ๋ฌ ํ์ผ๋ค๋ก ์ ์ฅํด์ ๋ณด๊ธฐ ์ข๊ฒ ์ ๋ฆฌํ  ์ ์๊ธฐ ๋๋ฌธ์ ๋์ ์ฝ๋ ๊ฐ๋์ฑ๊ณผ ์ ์ง ๋ณด์์ ์ ๋ฆฌํด์ง๋ค.

- `RecoilRoot`

  recoil ์ํ๋ฅผ ์ฌ์ฉํ๋ ์ปดํฌ๋ํธ๋ ๋ถ๋ชจ ํธ๋ฆฌ์ RecoilRoot๊ฐ ํ์ํ๋ค. Root ์ปดํฌ๋ํธ๊ฐ RecoilRoot๋ฅผ ๋ฃ๊ธฐ ๊ฐ์ฅ ์ข์ ์ฅ์๋ค.

- `Atom`

  Atom์ ์ํ(state)์ ์ผ๋ถ๋ฅผ ๋ํ๋ธ๋ค. Atoms๋ ์ด๋ค ์ปดํฌ๋ํธ์์๋ ์ฝ๊ณ  ์ธ ์ ์๋ค. atom์ ๊ฐ์ ์ฝ๋ ์ปดํฌ๋ํธ๋ค์ ์๋ฌต์ ์ผ๋ก atom์ subscribeํ๋ค. ๊ทธ๋์ atom์ ๋ณํ๊ฐ ์์ผ๋ฉด ๊ทธ atom์ subscribeํ๋ ๋ชจ๋  ์ปดํฌ๋ํธ๋ค์ด ๋ฆฌ๋ ๋๋ง๋๋ค.<br>

- `atom()`: ์ฐ๊ธฐ ๊ฐ๋ฅํ state๋ฅผ ๋ํ๋ด๋ atom์ ์์ฑํ๋ค.

  ```javascript
  const textState = atom({
    key: 'textState', // ๊ณ ์ ํ ID
    default: '', // ๊ธฐ๋ณธ ๊ฐ(์ด๊ธฐ ๊ฐ)
  });
  ```

- `useRecoilState(state, setState)`: ์ปดํฌ๋ํธ๊ฐ atom์ ์ฝ๊ณ  ์ฐ๊ฒ ํ๊ธฐ ์ํด์ useRecoilState()๋ฅผ ์ฌ์ฉํ๋ค.

  ```javascript
  const [text, setText] = useRecoilState(textState);
  ```

  - [https://recoiljs.org/ko/docs/introduction/getting-started](https://recoiljs.org/ko/docs/introduction/getting-started)

- `useRecoilValue(state)`: Recoil state ๊ฐ์ ๋ฐํํ๋ค. ์ฝ๊ธฐ ์ ์ฉ ์ํ์ ์ฐ๊ธฐ ๊ฐ๋ฅ ์ํ์์ ๋ชจ๋ ๋์ํ๊ธฐ ๋๋ฌธ์ ์ปดํฌ๋ํธ๊ฐ ์ํ๋ฅผ ์ฝ๊ธฐ ์ ์ฉ์ผ๋ก ์ฌ์ฉํ๊ณ  ์ถ์ ๋ ์ถ์ฒํ๋ hook์ด๋ค. ์ด hook์ React ์ปดํฌ๋ํธ์์ ์ฌ์ฉํ๋ฉด ์ํ๊ฐ ์๋ฐ์ดํธ ๋  ๋ ๋ฆฌ๋ ๋๋ง ํ๋๋ก ์ปดํฌ๋ํธ๋ฅผ subscribe ํ๋ค.

  - [https://recoiljs.org/ko/docs/api-reference/core/useRecoilValue/](https://recoiljs.org/ko/docs/api-reference/core/useRecoilValue/)

- `useSetRecoilState(state)`: Recoil state์ ๊ฐ์ ์๋ฐ์ดํธํ๊ธฐ ์ํ setter ํจ์๋ฅผ ๋ฐํํ๋ค. ์ํ๋ฅผ ๋ณ๊ฒฝํ๊ธฐ ์ํด ๋น๋๊ธฐ๋ก ์ฌ์ฉ๋  ์ ์๋ setter ํจ์๋ฅผ ๋ฐํํ๋ค. setter๋ ์๋ก์ด ๊ฐ์ด๋ ์ด์  ๊ฐ์ ์ธ์๋ก ๋ฐ๋ updater ํจ์๋ฅผ ๋๊ฒจ์ค๋ค.

  - [https://recoiljs.org/ko/docs/api-reference/core/useSetRecoilState/](https://recoiljs.org/ko/docs/api-reference/core/useSetRecoilState/)

- `Selector()`: ๊ธฐ์กด state๋ฅผ ๊ฐ์ ธ์์, ๊ทธ state๋ฅผ ์ด์ฉํด ์๋ก์ด state(`derived state`)๋ฅผ ๋ง๋ค์ด์ ๋ฐํํ  ์ ์๋ค. ๊ธฐ์กด state๋ฅผ ์ด์ฉํด์ ๊ทธ output์ ๋ณํํ๋ ๊ฒ์ด์ง, ์๋ณธ state๋ฅผ ๋ณํ์ํค์ง๋ ์๋๋ค. ๋ค๋ฅธ ๋ฐ์ดํฐ์ ์์กดํ๋ ๋์ ์ธ ๋ฐ์ดํฐ๋ฅผ ๋ง๋ค ์ ์๋ ๊ฐ๋ ฅํ ๊ฐ๋์ด๋ค.

  - `get`: ํ์๋ ์ํ์ ๊ฐ์ ํ๊ฐํ๋ ํจ์. ๊ฐ์ ์ง์  ๋ฐํํ๊ฑฐ๋ ๋น๋๊ธฐ์ ์ธ Promise๋ ๋๋ ๊ฐ์ ์ ํ์ ๋ํ๋ด๋ ๋ค๋ฅธ atom์ด๋ selector๋ฅผ ๋ฐํํ  ์ ์๋ค. ์ฒซ ๋ฒ์งธ ๋งค๊ฐ๋ณ์๋ก ๋ค์ ์์ฑ์ ํฌํจํ๋ ๊ฐ์ฒด๋ฅผ ์ ๋ฌํ๋ค.

    - `get(state)`: ๋ค๋ฅธ atom์ด๋ selector๋ก๋ถํฐ ๊ฐ์ ์ฐพ๋๋ฐ ์ฌ์ฉ๋๋ ํจ์. ์ด ํจ์์ ์ ๋ฌ๋ ๋ชจ๋  atom๊ณผ selector๋ ์์์ ์ผ๋ก selector์ ๋ํ ์์กด์ฑ ๋ชฉ๋ก์ ์ถ๊ฐ๋๋ค. Selector์ ์์กด์ฑ์ด ๋ณ๊ฒฝ๋๋ฉด Selector๊ฐ ๋ค์ ํ๊ฐ๋๋ค.

  - `set`: ์ด ์์ฑ์ด ์ค์ ๋๋ฉด selector๋ ์ฐ๊ธฐ ๊ฐ๋ฅํ ์ํ๋ฅผ ๋ฐํํ๋ค. ์ฒซ๋ฒ์งธ ๋งค๊ฐ๋ณ์๋ก ์ฝ๋ฐฑ ๊ฐ์ฒด์ ์๋ก ์๋ ฅ ๊ฐ์ด ์ ๋ฌ๋๋ค. ์ฌ์ฉ์๊ฐ selector๋ฅผ ์ฌ์ค์ ํ  ๊ฒฝ์ฐ ์๋ก ์๋ ฅ ๊ฐ์ T ํ์์ ๊ฐ ๋๋ DefaultValue ํ์์ ๊ฐ์ฒด์ผ ์ ์๋ค. ์ฝ๋ฐฑ์๋ ๋ค์์ด ํฌํจ๋๋ค.
    - `get(state)`: ๋ค๋ฅธ atom์ด๋ selector๋ก๋ถํฐ ๊ฐ์ ์ฐพ๋๋ฐ ์ฌ์ฉ๋๋ ํจ์. ์ด ํจ์๋ selector๋ฅผ ์ฃผ์ด์ง atom์ด๋ selector๋ฅผ subscribeํ์ง ์๋๋ค.
    - `set(state, newValue)`: ์์คํธ๋ฆผ Recoil ์ํ์ ๊ฐ์ ์ค์ ํ  ๋ ์ฌ์ฉ๋๋ ํจ์. ์ฒซ ๋ฒ์งธ ๋งค๊ฐ๋ณ์๋ Recoil ์ํ, ๋ ๋ฒ์งธ ๋งค๊ฐ๋ณ์๋ ์๋ก์ด ๊ฐ์ด๋ค. ์๋ก์ด ๊ฐ์ ์๋ฐ์ดํธ ํจ์๋ ์ฌ์ค์  ์ก์์ ์ ํํ๋ DefalutValue ๊ฐ์ฒด์ผ ์ ์๋ค.
  - [https://recoiljs.org/ko/docs/basic-tutorial/selectors/](https://recoiljs.org/ko/docs/basic-tutorial/selectors/)
  - [https://recoiljs.org/ko/docs/api-reference/core/selector/](https://recoiljs.org/ko/docs/api-reference/core/selector/)

  ```javascript
  import { atom, selector } from 'recoil';

  export const minuteState = atom({
    key: 'minutes',
    default: 0,
  });

  export const hoursSelector =
    selector <
    number >
    {
      key: 'hours',
      get: ({ get }) => {
        const minutes = get(minuteState);
        return minutes / 60;
      },
      set: ({ set }, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minuteState, minutes);
      },
    };
  ```

## ๐ react-hook-form

์ง์  form ์์ ํ๋ ํ๋์ state๋ฅผ ์ ์ธํ๊ณ , ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ฅผ ์ถ๊ฐํ๊ณ , ์ ํจ์ฑ ๊ฒ์ฌํด์ผํ๋ ์๊ณ ๋ก์์์ ๋ฒ์ด๋  ์ ์๋ค. ์ฌ๋ฌ form ์์๋ค์ ์ฌ์ฉํด์ผ ํ  ๋ ์ฌ์ฉํ๋ฉด ์ต์ํ์ ์ฝ๋๋ก ์ฌ๋ฌ form ์์๋ฅผ ์ ์ดํ  ์ ์๋ค.
<br>์ฌ์ฉํ๊ธฐ ์ฌ์ด ์ ํจ์ฑ ๊ฒ์ฌ๋ฅผ ํตํด ์ฑ๋ฅ์ด ๋ฐ์ด๋๊ณ  ์ ์ฐํ๋ฉฐ ํ์ฅ์ด ๊ฐ๋ฅํ form ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ค.

- `register(name)`: name, onBlur(ํด๋น form ์์์์ ๋ฒ์ด๋ฌ์ ๋ ์คํ๋๋ ์ด๋ฒคํธ), onChange, onClick, ref๋ฅผ ๋ฐํํ๋ ํจ์
- `watch()`: form์ ์๋ ฅ๊ฐ๋ค์ ๋ณํ๋ฅผ ๊ด์ฐฐํ  ์ ์๊ฒ ํด์ฃผ๋ ํจ์
- `handleSubmit(onValidFn, onInvalidFn?)`: ๋ฐ์ดํฐ๊ฐ ์ ํจํ  ๋ ํธ์ถ๋๋ ํจ์, ๋ฐ์ดํฐ๊ฐ ์ ํจํ์ง ์์ ๋ ํธ์ถ๋๋ ํจ์ ๋ ํจ์๋ฅผ ์ธ์๋ก ๋ฐ์์ validation์ ์ฒ๋ฆฌํ๋ค. ์์ฑํ ์ฝ๋๋ฅผ ์คํํ  ๋ ์ฌ์ฉํ๋ค. [https://react-hook-form.com/api/useform/handlesubmit](https://react-hook-form.com/api/useform/handlesubmit)
- `setError(formName, error)`: ํน์  form์ ์๋ฌ๋ฅผ ๋ฐ์์ํจ๋ค.
- `setValue(formName, value)`: ํน์  form์ ๊ฐ์ ์ค์ ํ๋ค.

```jsx
import { useForm } from 'react-hook-form';

const App = () => {
  const { register, watch, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(watch());

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register('email', { required: true })}
          placeholder="Email"
        />
        <input
          type="text"
          {...register('firstName', { required: true })}
          placeholder="First Name"
        />
        <input
          type="text"
          {...register('lastName', { required: true })}
          placeholder="Last Name"
        />
        <input
          type="text"
          {...register('userName', { required: true })}
          placeholder="Username"
        />
        <input
          type="text"
          {...register('password', { required: true, minLength: 8 })}
          placeholder="Password"
        />
        <input
          type="text"
          {...register('passwordConfirm', { required: true, minLength: 8 })}
          placeholder="Password Confirm"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
```

## ๐ react-beautiful-dnd

๋๋๊ทธ ์ค ๋๋์ ์ฝ๊ฒ ๊ตฌํํ  ์ ์๊ฒ ๋์์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ด๋ค.

### Setup

- `DragDropContext`: dnd๊ฐ ์ฌ์ฉ๋  ์ปจํ์ด๋ ์ปดํฌ๋ํธ, onDragEnd๊ฐ ํ์ ๊ฐ์ด๊ณ , children ์์๊ฐ ๋ฐ๋์ ์์ด์ผ ํ๋ค.
  - `onDragEnd`: ์ฌ์ฉ์๊ฐ ๋๋๊ทธ๋ฅผ ๋๋ธ ์์ ์ ์คํ๋๋ ํจ์,
    - `DropResult`: ๋๋กญ ๊ฒฐ๊ณผ์ Interface
    - `result`: onDragEnd์ ์ธ์๋ก ๋ฐ์ ์ ์๋ ๊ฒฐ๊ณผ ๊ฐ๋ค์ด ๋ค์ด์๋ ๊ฐ์ฒด
      - `result.draggableId`: ๋๋๊ทธ ๋์๋ Draggable์ id
      - `result.type`: ๋๋๊ทธ ๋์๋ Draggable์ type
      - `result.source`: Draggable์ด ์์๋ ์์น(location)
      - `result.destination`: Draggable์ด ๋๋ ์์น(location). ๋ง์ฝ Draggable์ด ์์ํ ์์น์ ๊ฐ๋ค๋ฉด null์ด๋ค.
- `Droppable`: ์ด๋ค ์์๋ฅผ ๋๋กญํ  ์ ์๋ ์์ญ, droppableId, children ์์๊ฐ ๋ฐ๋์ ์์ด์ผ ํ๋ค.
  - `droppableId`: ๋๋กญํ  ์ ์๋ ์์ญ์ด ์ฌ๋ฌ ๊ฐ์ผ ์ ์๊ธฐ ๋๋ฌธ์ droppableId๋ก ๊ตฌ๋ถ์ด ํ์ํ๋ค.
  - `children`: children ์์๋ react ์์์ด๋ฉด ์๋๊ณ , ํจ์๋ก ๊ตฌํ๋ผ์ผ ํ๋ค. ํจ์์์ provided, snapshot ๋ ๊ฐ์ ์ธ์๋ฅผ ๋ฐ์ ์ ์๋ค. provided๋ก๋ถํฐ innerRef์ placeholder, droppableProps๋ฅผ ๋ฐ๋๋ค. snapshot์ผ๋ก๋ถํฐ isDraggingOver, draggingOverWith?, draggingFromThisWith?, isUsingPlaceholder๋ฅผ ๋ฐ์ ์ ์๋ค.
    - `innerRef`: ref ์์ฑ์ ํตํด HTML ์์๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํด์ ๋ฐ๋ ์์ฑ
    - `placeholder?`: placeholder๋ ์์๊ฐ ๋๋๊ทธ ๋ผ์ ํด๋น ์์ญ์ ๋น ์ ธ๋๊ฐ์ ๋๋ ํด๋น ์์์ ์์ญ์ ์ฐจ์งํ๊ณ  ์์ ๊ฒ์ธ์ง๋ฅผ ๊ฒฐ์ ํ๋ ์์ฑ์ด๋ค.
    - `droppableProps`: ๋๋กญํ  ์ ์๋ ์์๋ฅผ ์ง์ ํ๋ ์์ฑ
    - `isDraggingOver`: ํ์ฌ ์ ํํ Draggable์ด ํน์  Droppable ์์ ๋๋๊น ๋๊ณ  ์๋์ง ์ฌ๋ถ
    - `draggingOverWith?`: Droppable ์๋ก ๋๋๊ทธํ๋ Draggable ID
    - `draggingFormThisWith?`: ํ์ฌ Droppable์์ ๋ฒ์ด๋ ๋๋๊ทธ๋๊ณ  ์๋ Draggable ID
    - `isUsingPlaceholder`: placeholder๊ฐ ์ฌ์ฉ๋๊ณ  ์๋์ง ์ฌ๋ถ
- `Draggable`: ์ด๋ค ์์๋ฅผ ๋๋๊ทธํ  ์ ์๋ ์์ญ, draggableId, index, children๊ฐ ํ์ํ๊ณ , key ๊ฐ์ ๊ณ ์ ํด์ผ ํ๋ฉฐ, map ๋ฑ์ ์ฌ์ฉํ  ๋ key ๊ฐ์ index๋ก ํ๋ฉด ์๋๋ค. ์ผ๋ฐ์ ์ผ๋ก๋ draggableId์ ๊ฐ๊ฒ ํ๋ ๊ฒ์ ๊ถ์ฅํ๋ค.
  - `draggableId`: ์์๋ฅผ ๊ตฌ๋ถํ๊ธฐ ์ํ id
  - `index`: ์์์ index
  - `children`: ํจ์๋ก ๊ตฌํ๋ ์์๊ฐ ๋ค์ด๊ฐ์ผ ํ๋ค. provided๋ก๋ถํฐ draggableProps์ dragHandleProps๋ฅผ ๋ฐ์์ ์ฌ์ฉํ๋ค. snapshot์ผ๋ก๋ถํฐ isDragging, isDropAnimating, dropAnimation?, combineWith?, combineTargetFor?, mode ๋ฑ์ ์์ฑ์ ์ฌ์ฉํ  ์ ์๋ค.
    - `draggableProps`: ์์๊ฐ ๊ธฐ๋ณธ์ ์ผ๋ก ๋๋๊ทธ ๋๊ธฐ๋ฅผ ์ํ๋ค๋ฉด ์ฌ์ฉํ๋ค.
    - `dragHandleProps?`: ๊ธฐ๋ณธ์ ์ผ๋ก ๋ชจ๋  ์์ญ์ด ๋๋๊ทธ ๊ฐ๋ฅํ ์์ญ์ด์ง๋ง, ํด๋น ์ต์์ผ๋ก ๋๋๊ทธ ๊ฐ๋ฅํ ์์ญ์ ์ง์ ํ  ์ ์๋ค.
    - `isDragging`: Draggable์ด ๋๋๊ทธ ๋๊ณ  ์๋์ง ์ฌ๋ถ
    - `dropAnimation`: ๋๋กญ ์ ๋๋ฉ์ด์ ์ ๋ณด
    - `draggingOver`
    - ``

```jsx
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
    if (destination?.index === undefined) return;
    setToDos((oldToDos) => {
      const copyToDos = [...oldToDos];
      copyToDos.splice(source.index, 1); // Delete Item copyToDos[sourceIndex]
      copyToDos.splice(destination.index, 0, draggableId); // Put back the item on the destination.index
      return copyToDos;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <Board ref={provided.innerRef} {...provided.droppableProps}>
              {toDos.map((toDo, index) => (
                <Draggable draggableId={toDo} index={index} key={toDo}>
                  {(provided) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {toDo}
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Board>
          )}
        </Droppable>
      </Container>
    </DragDropContext>
  );
};

export default App;
```

## ๐ Framer Motion

React ์ ๋๋ฉ์ด์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ, styled-components์ ์ฝ๊ฒ ๊ฐ์ด ์ฌ์ฉํ  ์ ์๋ค.

- `initial`: ์ ๋๋ฉ์ด์์ ์ด๊ธฐ๊ฐ
- `animate`: ์ ๋๋ฉ์ดํธ์ํฌ ์์ฑ
- `transition`: ์์ง์ด๋ ๋ฐฉ์
- `variants`: ์ปดํฌ๋ํธ๊ฐ ๊ฐ์ง ์ ์๋ ๋ฏธ๋ฆฌ ์ ์๋ state. variants๋ฅผ ํ์ฉํด์ ์ฝ๋ ๊ฐ๋์ฑ์ ๋์ด๊ณ , ์ฝ๋๋ฅผ ๊น๋ํ๊ฒ ํ  ์ ์๋ค.

  ```jsx
  const Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  <motion.div initial="hidden" animate="visible" variants={Variants} />;
  ```

  - `delayChildren`: ๋ถ๋ชจ ์์๊ฐ ์ ๋๋ฉ์ด์ ๋ ํ ์์ ์์์ ์ ๋๋ฉ์ด์์ ์์ํ๊ณ  ์ถ์ ๋์ ์ง์ฐ ์๊ฐ
  - `staggerChildren`: ์์ ์์์ ์ ๋๋ฉ์ด์์ ๊ฐ ์์ ์ฌ์ด์ ์ง์ฐ ์๊ฐ

- `drag`: ๋๋๊ทธ ๊ธฐ๋ฅ ์ถ๊ฐ. boolean | 'x' | 'y'. ๊ธฐ๋ณธ์ด ์๋ฐฉํฅ ๋๋๊ทธ ๊ธฐ๋ฅ์ด๊ณ  x ํน์ y๋ฅผ ์ค์ ํ๋ฉด ํน์  ๋ฐฉํฅ์ผ๋ก๋ง ๋๋๊ทธ ํ  ์ ์๊ฒ ์ค์  ๊ฐ๋ฅํ๋ค.
  - `dragConstraints`: ๋๋๊ทธ ๊ฐ๋ฅ ์์ญ์ ์กฐ๊ฑด์ ์ ์ฉํ๋ค.(๋๋๊ทธ ๊ฐ๋ฅํ ์์ญ์ ๊ฐ์ฅ์๋ฆฌ์์ ์ผ๋ง๋งํผ๊น์ง ํ์ฉํ  ๊ฒ์ธ์ง ์ง์ ) ํฝ์์ ์ด์ฉํด์ ๊ฐ์ ์ง์ ํ  ์๋ ์๊ณ , ref์ ์ด์ฉํด์ ์์ญ์ ์ง์ ํ  ์๋ ์๋ค.
  - `dragSnapToOrigin`: boolean. true์ธ ๊ฒฝ์ฐ ๋๋๊ทธ ๊ฐ๋ฅํ ์์๋ฅผ ๋๋๊ทธ ์ค ๋์ ๋, ์์ ์ผ๋ก ๋ค์ ์ ๋๋ฉ์ด์ ๋๋ค.
  - `dragElastic`: ์ธ๋ถ ์ ์ฝ ์กฐ๊ฑด์์ ํ์ฉ๋๋ ์ด๋ ์ ๋. 0 = ์์ง์ X, 1 = ์ ์ฒด ์์ง์. ๊ธฐ๋ณธ ๊ฐ 0.5, false = ๋นํ์ฑํ
- `whileHover`: ๋ง์ฐ์ค์ค๋ฒ ์ ์ ๋๋ฉ์ด์ ์ค์ 
- `whileTab`: ๋ง์ฐ์คํด๋ฆญ ์ ์ ๋๋ฉ์ด์ ์ค์ 
- `whileDrag`: ๋๋๊ทธ ๋  ๋ ์ ๋๋ฉ์ด์ ์ค์ 
- `useMotionValue()`: ์ ๋๋ฉ์ด์ ๊ฐ์ ์ํ(state)์ ์๋(velocity)๋ฅผ ์ถ์ ํ๋ค. ๋ชจ๋  ๋ชจ์ ์ปดํฌ๋ํธ๋ ๋ด๋ถ์ ์ผ๋ก MotionValues๋ฅผ ์ฌ์ฉํด์ ์ ๋๋ฉ์ด์ ๊ฐ์ ์ํ์ ์๋๋ฅผ ์ถ์ ํ๋ค. ์ผ๋ฐ์ ์ผ๋ก ์๋์ผ๋ก ์์ฑ๋๋ค. (MotionValue๋ React State๊ฐ ์๋๊ธฐ ๋๋ฌธ์ Motion Value ๊ฐ์ด ๋ฐ๋์ด๋ ๋น์ฐํ ๋ฆฌ๋ ๋๋ง์ด ์ผ์ด๋์ง ์๋๋ค.)

  ```javascript
  import { motion, useMotionValue } from 'framer-motion';

  export const MyComponent = () => {
    const x = useMotionValue(0);
    return <motion.div style={{ x }} />;
  };
  ```

  - useMotionValue hook์ผ๋ก MotionValues๋ฅผ ์์ฑํ  ์ ์๋ค. useMotionValue์ ์ ๋ฌ๋ ๊ฐ์ MotionValue์ ์ด๊ธฐ ์ํ๋ก ์๋ํ๋ค.<br>
  - x.set(100) - `set` ๋ฉ์๋๋ก ์๋ฐ์ดํธํ  ์ ์๋ค. React ๋ฆฌ๋ ๋๋ง์ ์ผ์ผํค์ง ์๋๋ค.<br>
  - x.get() // 100 - `get` ๋ฉ์๋๋ก ๊ฐ์ ์ฝ์ ์ ์๋ค. MotionValue๋ ๋ฌธ์์ด์ด๋ ์ซ์๊ฐ ๋  ์ ์๋ค.

- `useTransform()`: useTransform hook์ ํตํด MotionValues๋ฅผ ์ฐ๊ฒฐํ๋ค. useTransform() ํ ๊ฐ ๋ฒ์์์ ๋ค๋ฅธ ๊ฐ ๋ฒ์๋ก ๋งคํํด์ ๋ค๋ฅธ MotionValue์ output์ ๋ฐํํ๋ MotionValue๋ฅผ ๋ง๋ ๋ค. x(Motion Value) ๊ฐ์ ๋ค๋ฅธ output๊ฐ์ผ๋ก ๋ณํํด์ค๋ค.

  ```javascript
  import { useMotionValue, useTransform } from 'framer-motion';

  // ex) x: -400 => 1
  const x = useMotionValue(0);
  const input = [-200, 0, 200];
  const output = [0, 1, 0];
  const opacity = useTransform(x, input, output);

  return <motion.div drag="x" style={{ x, opacity }} />;
  ```

- `useScroll()`: ๋ทฐํฌํธ๊ฐ ์คํฌ๋กค๋  ๋ ์๋ฐ์ดํธ๋๋ MotionValues๋ฅผ ๋ฐํํ๋ค. ์๋ ๊ฐ๋ค์ ๋ชจ๋ MotionValue<number>๋ฅผ ๋๊ฒจ์ค๋ค.

  - scrollX: ์ค์  ์ํ ์คํฌ๋กค ํฝ์
  - scrollY: ์ค์  ์์ง ์คํฌ๋กค ํฝ์
  - scrollXProgress: 0 ~ 1 ์ฌ์ด์ ์ํ ์คํฌ๋กค ๋ณํ ๊ฐ
  - scrollYProgress: 0 ~ 1 ์ฌ์ด์ ์์ง ์คํฌ๋กค ๋ณํ ๊ฐ

    ```javascript
    import { useScroll } from 'framer-motion';

    export const MyComponent = () => {
      const { scrollYProgress } = useScroll();
      return <motion.div style={{ scaleX: scrollYProgress }} />;
    };
    ```

    [https://www.framer.com/docs/motionvalue/##useviewportscroll](https://www.framer.com/docs/motionvalue/##useviewportscroll)
    <br>[์คํฌ๋กค ํ๋ก๊ทธ๋ ์ค๋ฐ ์์ ์ฝ๋](https://codesandbox.io/s/framer-motion-usescroll-xwdxbt?from-embed)

- `Line drawing`: svg ์๋ฆฌ๋จผํธ์ `pathLength`, `pathSpacing`, `pathOffset` ์์ฑ์ ์ด์ฉํด์ Line drawing ์ ๋๋ฉ์ด์์ ๋ง๋ค ์ ์๋ค.<br>[https://www.framer.com/docs/examples/#line-drawing](https://www.framer.com/docs/examples/#line-drawing)

  - motion.path ์ปดํฌ๋ํธ๋ ์ธ ๊ฐ์ง ๊ฐ๋ ฅํ svg path ์์ฑ์ธ pathLength, pathSpacing ๋ฐ pathOffset์ ๊ฐ์ง๊ณ  ์๋ค. ์๋ ๊ฒฝ๋ก ์ธก์ ์ด ํ์ ์์ด ๋ชจ๋ 0์์ 1 ์ฌ์ด์ ๊ฐ์ผ๋ก ์ค์ ๋๋ค.
    ```jsx
    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
    ```

- `AnimatePresence` : React ํธ๋ฆฌ์์ ์ปดํฌ๋ํธ๊ฐ ์ ๊ฑฐ๋  ๋ ์ ๊ฑฐ๋๋ ์ปดํฌ๋ํธ์ ์ ๋๋ฉ์ด์ ํจ๊ณผ๋ฅผ ์ค ์ ์๋ค.

  - `exit`: ์ด ์ปดํฌ๋ํธ๊ฐ ํธ๋ฆฌ์์ ์ ๊ฑฐ๋  ๋ ๋ฐ์์ํฌ ์ ๋๋ฉ์ด์

    ```jsx
    import { motion, AnimatePresence } from 'framer-motion';

    export const myComponent = ({ isVisible }) => (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    );
    ```

  - `key`: AnimatePresence์ ๋จ์ผ ์์ key๋ฅผ ๋ณ๊ฒฝํด์ Slider๋ฅผ ์ฝ๊ฒ ๋ง๋ค ์ ์๋ค.

    ```jsx
    export const Slider = ({ image }) => (
      <AnimatePresence>
        <motion.img
          key={image.src}
          src={image.src}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        ></motion.img>
      </AnimatePresence>
    );
    ```

    [https://www.framer.com/docs/animate-presence/##unmount-animations](https://www.framer.com/docs/animate-presence/##unmount-animations)
    <br>[์ฌ๋ผ์ด๋ ์์ ์ฝ๋](https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed)

  - `mode`: `wait`๋ก ์ค์ ํ๋ฉด AnimatePresence๋ ํ ๋ฒ์ ํ๋์ ์ปดํฌ๋ํธ๋ง ๋ ๋๋งํ๋ค. exiting ์ค์ธ ์ปดํฌ๋ํธ๋ enteringํ๋ ์ปดํฌ๋ํธ๊ฐ ๋ ๋๋ง๋๊ธฐ ์ ์ exit ์ ๋๋ฉ์ด์์ ์๋ฃํ๋ค. `sync`๋ก ์ค์ ํ๋ฉด ๋์์ ์ ๋๋ฉ์ด์์ด ์ผ์ด๋๋ค.

    ```jsx
    <AnimatePresence mode="wait">
      <motion.div key={currentItem} exit={{ opacity: 0 }} />
    </AnimatePresence>
    ```

    [https://www.framer.com/docs/animate-presence/###exitbeforeenter](https://www.framer.com/docs/animate-presence/###exitbeforeenter)

  - `custom`: ๊ฐ ์ ๋๋ฉ์ด์ ์ปดํฌ๋ํธ์ ๋ํด variants๋ฅผ ๋์ ์ผ๋ก ์ ์ฉํ  ๋ ์ฌ์ฉํ  ์ ์๋ ์ฌ์ฉ์ ์ง์  ๋ฐ์ดํฐ

    ```jsx
    const variants = {
      visible: (custom) => ({
        opacity: 1,
        transition: {
          delay: custom * 0.2,
        },
      }),
    };

    <motion.div variants={variants} custom={0} animate="visible">
    <motion.div variants={variants} custom={1} animate="visible">
    <motion.div variants={variants} custom={2} animate="visible">
    ```

    [https://www.framer.com/docs/component/###custom](https://www.framer.com/docs/component/###custom)

  - `onExitComplete`: exit ์ค์ธ ๋ชจ๋  ๋ธ๋๋ค์ด ์ ๋๋ฉ์ด์์ ๋๋ด๋ฉด ์คํ๋๋ค.
    ```javascript
    AnimatePresenceProps.onExitComplete?:(() => void) | undefined
    ```
    [https://www.framer.com/docs/animate-presence/###onexitcomplete](https://www.framer.com/docs/animate-presence/###onexitcomplete)

  [https://www.framer.com/docs/animate-presence/](https://www.framer.com/docs/animate-presence/)

- `layout`: true์ธ ๊ฒฝ์ฐ ํด๋น ์ปดํฌ๋ํธ๋ ๋ ์ด์์์ด ๋ณ๊ฒฝ๋  ๋ ์ ์์น์ ์๋์ผ๋ก ์ ๋๋ฉ์ด์์ ์ ์ฉํ๋ค. ํฌ๊ธฐ๋ ์์น๋ ๋ณ๊ฒฝ๋  ๋ ๋ชจ์ ์ปดํฌ๋ํธ์ ๋ ์ด์์์ ์๋์ผ๋ก ์ ๋๋ฉ์ด์์ ์ ์ฉํ๋ ๋ ์ด์์ prop์ ์ ๊ณตํ๋ค. ๋ถ๋ชจ ํ๋ ์ค๋ฐ์ค ๋ฐฉํฅ, ๋๋น, ์๋จ/์ค๋ฅธ์ชฝ ๋ฑ ๋ ์ด์์ ๋ณ๊ฒฝ์ ์์ธ์ด ๋ฌด์์ด๋  ์๊ด์์ด ์ ๋๋ฉ์ด์ ์์ฒด๋ ์ต๋ ์ฑ๋ฅ์ ์ํด ๋ณํ๋์ด์ ์ํ๋๋ค.

  ```jsx
  <motion.div layout></motion.div>
  ```

  [https://www.framer.com/docs/animate-shared-layout/#syncing-layout-animations](https://www.framer.com/docs/animate-shared-layout/#syncing-layout-animations)

- `Animate between components`: AnimateSharedLayout์ ๋์ผํ layoutId prop์ ๊ฐ์ง ๋ชจ์ ์ปดํฌ๋ํธ๋ค ๊ฐ์ ์ ๋๋ฉ์ด์์ ์ ์ฉํ  ์ ์๋ค. layoutId๊ฐ ์๋ ์ ์ปดํฌ๋ํธ๊ฐ ์ถ๊ฐ๋๊ณ  ๋ค๋ฅธ ์ปดํฌ๋ํธ๊ฐ ์ ๊ฑฐ๋๋ฉด ์ด์  ์ปดํฌ๋ํธ์์ ์ ์ปดํฌ๋ํธ๋ก ๋ ์ด์์ ์ ๋๋ฉ์ด์์ ์ํํ๋ค. ์ ์ปดํฌ๋ํธ๋ ์ด์  ์ปดํฌ๋ํธ์ ์ ๋๋ฉ์ด์ ๊ฐ๋ ์ด๊ธฐ ์ํ๋ก ์์ํ๋ค. ๋ฐ๋ผ์ ์๊ฐ์ ์ผ๋ก ํ๋์ ์ฐ์ ์ปดํฌ๋ํธ๋ก ์ฒ๋ฆฌ๋๋ค.
  ```jsx
  isSelected && <motion.div layoutId="underline" />;
  ```
  [https://www.framer.com/docs/animate-shared-layout/#animate-between-components](https://www.framer.com/docs/animate-shared-layout/#animate-between-components)
  <br>[๋ ์ด์์ ์ ๋๋ฉ์ด์ ์์](https://www.framer.com/docs/animate-shared-layout/#syncing-layout-animations)

### Usage

```bash
npm i framer-motion
```

```jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: tomato;
  border-radius: 15px;
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotate: 180, transition: { type: 'spring', bounce: 0.75 } },
};

const boxVariants = {
  hover: { scale: 1.1, rotate: 90 },
  click: { scale: 1, borderRadius: '50%' },
  drag: { backgroundColor: 'rgb(46, 204, 113)' },
};


export const MyComponent = ({ isVisible }) => (
  // motion.HTMLElement
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />

  // with styled-components
  <Box animate={{borderRadius: 50px}} transition={{ duration: 3 }} />
  <Box
    initial={{ scale: 0 }}
    animate={{ scale: 1, rotate: 180 }}
    transition={{ type: 'spring', bounce: 0.75 }}
  />

  // use variants
  // variants์ ํค ๊ฐ์ ํญ์ ๋ฌธ์์ด๋ก ๋ค์ด๊ฐ๋ค.
  <Box variants={myVars} initial="start" animate="end" />

  <Box
    drag
    variants={boxVariants}
    whileHover="hover"
    whileTap="click"
    whileDrag="drag"
  ></Box>
);
```

[https://github.com/framer/motion](https://github.com/framer/motion)

> ### Reference
>
> [https://nomadcoders.co/react-masterclass/](https://nomadcoders.co/react-masterclass/)
