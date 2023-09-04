// action value
// 리듀서를 하드코딩으로 사용하는 빈도가 많아지면 휴먼에러 가능성이 높아짐
// 그래서 action value 만들어서 변수형태로 관리하는것!
// 앞에 export 써서 App.jsx에서도 쓸 수도 있지만, action creator가 있으면 export 안써도 됨
const ADD_TODO = "ADD_TODO";
const DONE_TODO = "DONE_TODO";
const DELETE_TODO = "DELETE_TODO";
const CANCLETODO = "CANCLE_TODO";

// action creator : action value를 return하는 함수
// dispatch가 action 객체를 던진다 = 컴포넌트에서 사용 = export 해주기
export const addTodo = (payload) => {
    // console.log(payload)
    return {
        type: ADD_TODO,
        payload,
    };
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };
}

export const doneTodo = (id) => {
    return {
        type: DONE_TODO,
        id,
    };
}

export const cancleTodo = (id) => {
    return {
        type: CANCLETODO,
        id,
    };
}


// 초기 상태값(state) : 키=벨류!
// useState로 쓰면 : const [todo, setTodo] = useState("")
const initialState = [
    {
        id: 0,
        title: "투두리스트",
        content: "추가하기 버튼 성공!!",
        isDone: false
    },
    {
        id: 1,
        title: "삭제/완료/취소 버튼",
        content: "도전중~~~~~",
        isDone: true
    }

]

// 리듀서 : 'state의 변화를 일으키는' 함수!
// state를 action의 type에 따라 변경하는 함수
// input(인자값) : state, action
// action 객체 : action의 type에 따라 stete를 어떻게 수정할건지 나타냄! (type/payload)
// action 객체라는 것은 action type을 payload 만큼 처리하는 것
// ex: payload가 3 = 3만큼을 Plus
const todo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: // 추가하기 버튼
            const newTodoObj = {
                // id : 마지막 카드에 +1한 id값 부여 / 마지막 카드가 없을때는 id값 1로 주기!
                // arr.at(-1) : 배열의 마지막 인덱스를 가져옴!
                // at() 메서드는 정숫값을 받아 해당 인덱스에 있는 항목을 반환
                id: state.length > 0 ? state.at(-1).id + 1 : 1,
                // Redux의 액션 객체를 처리하는 일반적인 방식
                title: action.payload.inputTitle,
                content: action.payload.inputContents,
                isDone: false,
            };

            console.log("Title:", newTodoObj.title);
            console.log("Content:", newTodoObj.content);
            const newTodo = [...state, newTodoObj]
            return newTodo;

        case DELETE_TODO:  // 삭제 버튼
            const delTodo = state.filter((item) => item.id !== action.id);
            return delTodo;

        case DONE_TODO:  // 완료 버튼
            const doneTodo = state.map((item) => {
                if (item.id === action.id) {
                    return {
                        id: action.id,
                        title: item.title,
                        content: item.content,
                        isDone: true,
                    }
                } else {
                    return item;
                }
            });
            return doneTodo;

        case CANCLETODO:  // 취소 버튼
            const notDonePost = state.map((post) => {
                if (post.id === action.id) {
                    return {
                        id: post.id,
                        title: post.title,
                        content: post.content,
                        isDone: false,
                    };
                } else {
                    return post;
                }
            });
            return notDonePost;
        default:
            return state;
        // 이무것도 없을 때는 초기 상태값을 보여줘!
    }
}

export default todo;
// todo 내보내서 사용 가능하게 만들기~_~
// configStore.js(중앙 state 관리소)에 import 하고, rootReducer에 넣주면 애플리케이션 전체에서 사용 가능!!!!!!!!!!