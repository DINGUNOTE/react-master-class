# 💡 React JS 마스터클래스 강의 학습 내용

## 🚀 Project

- [TOP 100 Crypto Tracker](https://github.com/DINGUNOTE/top100-crypto-tracker)
- [ToDo](https://github.com/DINGUNOTE/practice-recoil-todo)
- [Kanban](https://github.com/DINGUNOTE/kanban)
- [Nomflix](https://github.com/DINGUNOTE/nomflix)

## 📌 styled-components

- React에서 컴포넌트에 style을 부여하는 방법 중 인라인 스타일로 컴포넌트 구현부에서 스타일을 추가하는 방식이 있고, CSS Module을 이용하는 방법이 있지만 첫 번째는 코드의 가독성이 떨어지고, 그로 인해서 컴포넌트의 역할을 파악하기 어렵게 된다. 두 번째는 css module을 위해 추가로 파일을 생성해야 하는 번거로움이 있다. 이런 문제를 해결하고, 컴포넌트 내부에서 쉽게 스타일을 부여하기 위해서 `styled-components`를 주로 사용한다.
- 컴포넌트에서 `prop`으로 데이터를 받아서 prop에 따라 다른 속성을 지정할 수 있다.
- `Extending Styles` : 다른 컴포넌트의 스타일을 상속하는 새 컴포넌트를 쉽게 만들려면 `styled()` 생성자에 상속받을 컴포넌트를 추가하면 된다.

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
        <Emoji as="div">😋</Emoji>
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

## 📌 React Query

- React 애플리케이션에서 서버 state를 fetching, caching, synchronizing, updating 할 수 있게 도와주는 라이브러리
- `global state`를 건드리지 않고 React 및 React Native 애플리케이션에서 데이터를 가져오고, 캐시하고, 업데이트 한다.
- [https://react-query.tanstack.com/quick-start](https://react-query.tanstack.com/quick-start)
- `useQuery`의 세 번째 파라미터인 options 객체에 `refetchInterval: time(ms)` 값을 주게 되면 해당 밀리초 단위로 계속해서 refetch 시킬 수 있다.

```jsx
// Create a client
const queryClient = new QueryClient()

// Provide the client to your App
<QueryClientProvider client={queryClient} />
```

## 📌 React Router 6에서 Outlet 컴포넌트와 useOutletContext() 훅을 사용해서 prop 전달하고 받기

```jsx
// 1. 상위 컴포넌트에서 Outlet 컴포넌트의 context에 prop 전달
<Outlet context={{ fruit: 'apple' }} />;

// 2. 하위 컴포넌트에서 useOutletContext() hook을 사용해서 props를 받아온다.
import { useOutletContext } from 'react-router';

const data = useOutletContext(); // { fruit: 'apple' }
```

- [https://reactrouter.com/docs/en/v6/api#useoutletcontext](https://reactrouter.com/docs/en/v6/api#useoutletcontext)

## 📌 Recoil

페이스북에서 만든 ReactJS에서 사용할 수 있는 상태 관리 도구, 간단해서 이해도 쉽고 사용하기 좋은 장점이 있다.

- 상태 관리가 필요한 이유

  1. `Prop Drilling` : App의 컴포넌트 복잡도가 심해질수록 props를 하위 컴포넌트로 전달하는 과정이 점점 더 많아지고 코드를 읽을 때 해당 prop을 추적하기 힘들어진다.
  2. 복잡한 상태 업데이트 로직들을 컴포넌트에서 떼어낼 수 있고, 이를 모듈화해서 여러 파일들로 저장해서 보기 좋게 정리할 수 있기 때문에 높은 코드 가독성과 유지 보수에 유리해진다.

- `RecoilRoot`

  recoil 상태를 사용하는 컴포넌트는 부모 트리에 RecoilRoot가 필요하다. Root 컴포넌트가 RecoilRoot를 넣기 가장 좋은 장소다.

- `Atom`

  Atom은 상태(state)의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있다. atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 subscribe한다. 그래서 atom에 변화가 있으면 그 atom을 subscribe하는 모든 컴포넌트들이 리렌더링된다.<br>

- `atom()`: 쓰기 가능한 state를 나타내는 atom을 생성한다.

  ```javascript
  const textState = atom({
    key: 'textState', // 고유한 ID
    default: '', // 기본 값(초기 값)
  });
  ```

- `useRecoilState(state, setState)`: 컴포넌트가 atom을 읽고 쓰게 하기 위해서 useRecoilState()를 사용한다.

  ```javascript
  const [text, setText] = useRecoilState(textState);
  ```

  - [https://recoiljs.org/ko/docs/introduction/getting-started](https://recoiljs.org/ko/docs/introduction/getting-started)

- `useRecoilValue(state)`: Recoil state 값을 반환한다. 읽기 전용 상태와 쓰기 가능 상태에서 모두 동작하기 때문에 컴포넌트가 상태를 읽기 전용으로 사용하고 싶을 때 추천하는 hook이다. 이 hook은 React 컴포넌트에서 사용하면 상태가 업데이트 될 때 리렌더링 하도록 컴포넌트를 subscribe 한다.

  - [https://recoiljs.org/ko/docs/api-reference/core/useRecoilValue/](https://recoiljs.org/ko/docs/api-reference/core/useRecoilValue/)

- `useSetRecoilState(state)`: Recoil state의 값을 업데이트하기 위한 setter 함수를 반환한다. 상태를 변경하기 위해 비동기로 사용될 수 있는 setter 함수를 반환한다. setter는 새로운 값이나 이전 값을 인수로 받는 updater 함수를 넘겨준다.

  - [https://recoiljs.org/ko/docs/api-reference/core/useSetRecoilState/](https://recoiljs.org/ko/docs/api-reference/core/useSetRecoilState/)

- `Selector()`: 기존 state를 가져와서, 그 state를 이용해 새로운 state(`derived state`)를 만들어서 반환할 수 있다. 기존 state를 이용해서 그 output을 변형하는 것이지, 원본 state를 변형시키지는 않는다. 다른 데이터에 의존하는 동적인 데이터를 만들 수 있는 강력한 개념이다.

  - `get`: 파생된 상태의 값을 평가하는 함수. 값을 직접 반환하거나 비동기적인 Promise나 또는 같은 유형을 나타내는 다른 atom이나 selector를 반환할 수 있다. 첫 번째 매개변수로 다음 속성을 포함하는 객체를 전달한다.

    - `get(state)`: 다른 atom이나 selector로부터 값을 찾는데 사용되는 함수. 이 함수에 전달된 모든 atom과 selector는 암시적으로 selector에 대한 의존성 목록에 추가된다. Selector의 의존성이 변경되면 Selector가 다시 평가된다.

  - `set`: 이 속성이 설정되면 selector는 쓰기 가능한 상태를 반환한다. 첫번째 매개변수로 콜백 객체와 새로 입력 값이 전달된다. 사용자가 selector를 재설정할 경우 새로 입력 값은 T 타입의 값 또는 DefaultValue 타입의 객체일 수 있다. 콜백에는 다음이 포함된다.
    - `get(state)`: 다른 atom이나 selector로부터 값을 찾는데 사용되는 함수. 이 함수는 selector를 주어진 atom이나 selector를 subscribe하지 않는다.
    - `set(state, newValue)`: 업스트림 Recoil 상태의 값을 설정할 때 사용되는 함수. 첫 번째 매개변수는 Recoil 상태, 두 번째 매개변수는 새로운 값이다. 새로운 값은 업데이트 함수나 재설정 액션을 전파하는 DefalutValue 객체일 수 있다.
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

## 📌 react-hook-form

직접 form 요소 하나 하나에 state를 선언하고, 이벤트 핸들러를 추가하고, 유효성 검사해야하는 수고로움에서 벗어날 수 있다. 여러 form 요소들을 사용해야 할 때 사용하면 최소한의 코드로 여러 form 요소를 제어할 수 있다.
<br>사용하기 쉬운 유효성 검사를 통해 성능이 뛰어나고 유연하며 확장이 가능한 form 라이브러리다.

- `register(name)`: name, onBlur(해당 form 요소에서 벗어났을 때 실행되는 이벤트), onChange, onClick, ref를 반환하는 함수
- `watch()`: form의 입력값들의 변화를 관찰할 수 있게 해주는 함수
- `handleSubmit(onValidFn, onInvalidFn?)`: 데이터가 유효할 때 호출되는 함수, 데이터가 유효하지 않을 때 호출되는 함수 두 함수를 인자로 받아서 validation을 처리한다. 작성한 코드를 실행할 때 사용한다. [https://react-hook-form.com/api/useform/handlesubmit](https://react-hook-form.com/api/useform/handlesubmit)
- `setError(formName, error)`: 특정 form에 에러를 발생시킨다.
- `setValue(formName, value)`: 특정 form의 값을 설정한다.

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

## 📌 react-beautiful-dnd

드래그 앤 드랍을 쉽게 구현할 수 있게 도와주는 라이브러리이다.

### Setup

- `DragDropContext`: dnd가 사용될 컨테이너 컴포넌트, onDragEnd가 필수 값이고, children 요소가 반드시 있어야 한다.
  - `onDragEnd`: 사용자가 드래그를 끝낸 시점에 실행되는 함수,
    - `DropResult`: 드롭 결과의 Interface
    - `result`: onDragEnd의 인자로 받을 수 있는 결과 값들이 들어있는 객체
      - `result.draggableId`: 드래그 되었던 Draggable의 id
      - `result.type`: 드래그 되었던 Draggable의 type
      - `result.source`: Draggable이 시작된 위치(location)
      - `result.destination`: Draggable이 끝난 위치(location). 만약 Draggable이 시작한 위치와 같다면 null이다.
- `Droppable`: 어떤 요소를 드롭할 수 있는 영역, droppableId, children 요소가 반드시 있어야 한다.
  - `droppableId`: 드롭할 수 있는 영역이 여러 개일 수 있기 때문에 droppableId로 구분이 필요하다.
  - `children`: children 요소는 react 요소이면 안되고, 함수로 구현돼야 한다. 함수에서 provided, snapshot 두 개의 인자를 받을 수 있다. provided로부터 innerRef와 placeholder, droppableProps를 받는다. snapshot으로부터 isDraggingOver, draggingOverWith?, draggingFromThisWith?, isUsingPlaceholder를 받을 수 있다.
    - `innerRef`: ref 속성을 통해 HTML 요소를 사용하기 위해서 받는 속성
    - `placeholder?`: placeholder는 요소가 드래그 돼서 해당 영역을 빠져나갔을 때도 해당 요소의 영역을 차지하고 있을 것인지를 결정하는 속성이다.
    - `droppableProps`: 드롭할 수 있는 요소를 지정하는 속성
    - `isDraggingOver`: 현재 선택한 Draggable이 특정 Droppable 위에 드래깅 되고 있는지 여부
    - `draggingOverWith?`: Droppable 위로 드래그하는 Draggable ID
    - `draggingFormThisWith?`: 현재 Droppable에서 벗어나 드래그되고 있는 Draggable ID
    - `isUsingPlaceholder`: placeholder가 사용되고 있는지 여부
- `Draggable`: 어떤 요소를 드래그할 수 있는 영역, draggableId, index, children가 필요하고, key 값은 고유해야 하며, map 등을 사용할 때 key 값을 index로 하면 안된다. 일반적으로는 draggableId와 같게 하는 것을 권장한다.
  - `draggableId`: 요소를 구분하기 위한 id
  - `index`: 요소의 index
  - `children`: 함수로 구현된 요소가 들어가야 한다. provided로부터 draggableProps와 dragHandleProps를 받아서 사용한다. snapshot으로부터 isDragging, isDropAnimating, dropAnimation?, combineWith?, combineTargetFor?, mode 등의 속성을 사용할 수 있다.
    - `draggableProps`: 요소가 기본적으로 드래그 되기를 원한다면 사용한다.
    - `dragHandleProps?`: 기본적으로 모든 영역이 드래그 가능한 영역이지만, 해당 옵션으로 드래그 가능한 영역을 지정할 수 있다.
    - `isDragging`: Draggable이 드래그 되고 있는지 여부
    - `dropAnimation`: 드롭 애니메이션 정보
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

## 📌 Framer Motion

React 애니메이션 라이브러리, styled-components와 쉽게 같이 사용할 수 있다.

- `initial`: 애니메이션의 초기값
- `animate`: 애니메이트시킬 속성
- `transition`: 움직이는 방식
- `variants`: 컴포넌트가 가질 수 있는 미리 정의된 state. variants를 활용해서 코드 가독성을 높이고, 코드를 깔끔하게 할 수 있다.

  ```jsx
  const Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  <motion.div initial="hidden" animate="visible" variants={Variants} />;
  ```

  - `delayChildren`: 부모 요소가 애니메이션 된 후 자식 요소의 애니메이션을 시작하고 싶을 때의 지연 시간
  - `staggerChildren`: 자식 요소의 애니메이션의 각 요소 사이의 지연 시간

- `drag`: 드래그 기능 추가. boolean | 'x' | 'y'. 기본이 양방향 드래그 기능이고 x 혹은 y를 설정하면 특정 방향으로만 드래그 할 수 있게 설정 가능하다.
  - `dragConstraints`: 드래그 가능 영역에 조건을 적용한다.(드래그 가능한 영역에 가장자리에서 얼마만큼까지 허용할 것인지 지정) 픽셀을 이용해서 값을 지정할 수도 있고, ref을 이용해서 영역을 지정할 수도 있다.
  - `dragSnapToOrigin`: boolean. true인 경우 드래그 가능한 요소를 드래그 중 놓을 때, 원점으로 다시 애니메이션 된다.
  - `dragElastic`: 외부 제약 조건에서 허용되는 이동 정도. 0 = 움직임 X, 1 = 전체 움직임. 기본 값 0.5, false = 비활성화
- `whileHover`: 마우스오버 시 애니메이션 설정
- `whileTab`: 마우스클릭 시 애니메이션 설정
- `whileDrag`: 드래그 될 때 애니메이션 설정
- `useMotionValue()`: 애니메이션 값의 상태(state)와 속도(velocity)를 추적한다. 모든 모션 컴포넌트는 내부적으로 MotionValues를 사용해서 애니메이션 값의 상태와 속도를 추적한다. 일반적으로 자동으로 생성된다. (MotionValue는 React State가 아니기 때문에 Motion Value 값이 바뀌어도 당연히 리렌더링이 일어나지 않는다.)

  ```javascript
  import { motion, useMotionValue } from 'framer-motion';

  export const MyComponent = () => {
    const x = useMotionValue(0);
    return <motion.div style={{ x }} />;
  };
  ```

  - useMotionValue hook으로 MotionValues를 생성할 수 있다. useMotionValue에 전달된 값은 MotionValue의 초기 상태로 작동한다.<br>
  - x.set(100) - `set` 메서드로 업데이트할 수 있다. React 리렌더링을 일으키지 않는다.<br>
  - x.get() // 100 - `get` 메서드로 값을 읽을 수 있다. MotionValue는 문자열이나 숫자가 될 수 있다.

- `useTransform()`: useTransform hook을 통해 MotionValues를 연결한다. useTransform() 한 값 범위에서 다른 값 범위로 매핑해서 다른 MotionValue의 output을 반환하는 MotionValue를 만든다. x(Motion Value) 값을 다른 output값으로 변환해준다.

  ```javascript
  import { useMotionValue, useTransform } from 'framer-motion';

  // ex) x: -400 => 1
  const x = useMotionValue(0);
  const input = [-200, 0, 200];
  const output = [0, 1, 0];
  const opacity = useTransform(x, input, output);

  return <motion.div drag="x" style={{ x, opacity }} />;
  ```

- `useScroll()`: 뷰포트가 스크롤될 때 업데이트되는 MotionValues를 반환한다. 아래 값들은 모두 MotionValue<number>를 넘겨준다.

  - scrollX: 실제 수평 스크롤 픽셀
  - scrollY: 실제 수직 스크롤 픽셀
  - scrollXProgress: 0 ~ 1 사이의 수평 스크롤 변환 값
  - scrollYProgress: 0 ~ 1 사이의 수직 스크롤 변환 값

    ```javascript
    import { useScroll } from 'framer-motion';

    export const MyComponent = () => {
      const { scrollYProgress } = useScroll();
      return <motion.div style={{ scaleX: scrollYProgress }} />;
    };
    ```

    [https://www.framer.com/docs/motionvalue/##useviewportscroll](https://www.framer.com/docs/motionvalue/##useviewportscroll)
    <br>[스크롤 프로그레스바 예시 코드](https://codesandbox.io/s/framer-motion-usescroll-xwdxbt?from-embed)

- `Line drawing`: svg 엘리먼트에 `pathLength`, `pathSpacing`, `pathOffset` 속성을 이용해서 Line drawing 애니메이션을 만들 수 있다.<br>[https://www.framer.com/docs/examples/#line-drawing](https://www.framer.com/docs/examples/#line-drawing)

  - motion.path 컴포넌트는 세 가지 강력한 svg path 속성인 pathLength, pathSpacing 및 pathOffset을 가지고 있다. 수동 경로 측정이 필요 없이 모두 0에서 1 사이의 값으로 설정된다.
    ```jsx
    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
    ```

- `AnimatePresence` : React 트리에서 컴포넌트가 제거될 때 제거되는 컴포넌트에 애니메이션 효과를 줄 수 있다.

  - `exit`: 이 컴포넌트가 트리에서 제거될 때 발생시킬 애니메이션

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

  - `key`: AnimatePresence의 단일 자식 key를 변경해서 Slider를 쉽게 만들 수 있다.

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
    <br>[슬라이더 예시 코드](https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed)

  - `mode`: `wait`로 설정하면 AnimatePresence는 한 번에 하나의 컴포넌트만 렌더링한다. exiting 중인 컴포넌트는 entering하는 컴포넌트가 렌더링되기 전에 exit 애니메이션을 완료한다. `sync`로 설정하면 동시에 애니메이션이 일어난다.

    ```jsx
    <AnimatePresence mode="wait">
      <motion.div key={currentItem} exit={{ opacity: 0 }} />
    </AnimatePresence>
    ```

    [https://www.framer.com/docs/animate-presence/###exitbeforeenter](https://www.framer.com/docs/animate-presence/###exitbeforeenter)

  - `custom`: 각 애니메이션 컴포넌트에 대해 variants를 동적으로 적용할 때 사용할 수 있는 사용자 지정 데이터

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

  [https://www.framer.com/docs/animate-presence/](https://www.framer.com/docs/animate-presence/)

- `layout`: true인 경우 해당 컴포넌트는 레이아웃이 변경될 때 새 위치에 자동으로 애니메이션을 적용한다. 크기나 위치나 변경될 때 모션 컴포넌트의 레이아웃에 자동으로 애니메이션을 적용하는 레이아웃 prop을 제공한다. 부모 플렉스박스 방향, 너비, 상단/오른쪽 등 레이아웃 변경의 원인이 무엇이든 상관없이 애니메이션 자체는 최대 성능을 위해 변환되어서 수행된다.

  ```jsx
  <motion.div layout></motion.div>
  ```

  [https://www.framer.com/docs/animate-shared-layout/#syncing-layout-animations](https://www.framer.com/docs/animate-shared-layout/#syncing-layout-animations)

- `Animate between components`: AnimateSharedLayout은 동일한 layoutId prop을 가진 모션 컴포넌트들 간에 애니메이션을 적용할 수 있다. layoutId가 있는 새 컴포넌트가 추가되고 다른 컴포넌트가 제거되면 이전 컴포넌트에서 새 컴포넌트로 레이아웃 애니메이션을 수행한다. 새 컴포넌트는 이전 컴포넌트의 애니메이션 값도 초기 상태로 상속한다. 따라서 시각적으로 하나의 연속 컴포넌트로 처리된다.
  ```jsx
  isSelected && <motion.div layoutId="underline" />;
  ```
  [https://www.framer.com/docs/animate-shared-layout/#animate-between-components](https://www.framer.com/docs/animate-shared-layout/#animate-between-components)
  <br>[레이아웃 애니메이션 예시](https://www.framer.com/docs/animate-shared-layout/#syncing-layout-animations)

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
  // variants의 키 값은 항상 문자열로 들어간다.
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
