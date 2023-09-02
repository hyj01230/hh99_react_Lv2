import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// configStore.js 파일에서 export default로 작성해서 store에 {} 안해도됨!
import store from './redux/config/configStore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider : react-redux 패키지에서 추천!
  // App 컴포넌트가 Provider 지배권 안에 들어옴
  // Provider는 store를 기반으로 지배권을 행사함(=store로 만들어둔 중앙 데이터 관리소를 App 컴포넌트가 있는 전체에서 store로를 쓸 수 있음)
  // configStore.js 파일에서 export한 store!(위에서 import도 해줘야함)
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();