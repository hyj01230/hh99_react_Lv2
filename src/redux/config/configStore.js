// 설정 코드 작성하기!

// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux";  // 스토어를 만드는 API
import { combineReducers } from "redux";  // 리듀서들을 하나로 묶는 역할
// import todo from "../modules/todo";

// rootReducer: 리듀서들을 하나로 모아서 한개로 만든 기본 리듀서
// modules에 넣은 state의 그룹들을 객체형태로 넣음!
// 그러면 웹애플리케이션에서 관리하는 state의 집단들이 다 rootReducer로 들어오고,
// 모든 컴포넌트들이 props로 값을 내려주지 않아도 중앙데이터 관리소로 데이터를 바라볼 수 있게 됨
const rootReducer = combineReducers({
    // todo,
});
const store = createStore(rootReducer)  // 리듀서의 묶음이 인자로 들어가야함

export default store;
// 사용 가능하게 밖으로 내보냄
// index.js로 이동하기!