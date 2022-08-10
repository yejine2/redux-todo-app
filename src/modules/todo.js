// 액션 타입
const ADD_TODO = "todo/ADD_TODO";
const DELETE_TODO = "todo/DELETE_TODO";

// 액션 생성 함수
let todoId = 1;
export function addTodo(todoItem) {
  return {
    type: ADD_TODO,
    payload: { ...todoItem, id: todoId++ },
  };
}
export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: { todoId },
  };
}

// 초기값
const initialState = [];

// 추가 / 제거
export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((element) => element.id !== action.payload.todoId);
    default:
      return state;
  }
}
