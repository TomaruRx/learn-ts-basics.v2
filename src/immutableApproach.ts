import type { Todo } from "./types.js";

const todo: Todo = {
    name: "Learn TypeScript",
    priority: 3,
    isDone: false,
    deadline: new Date(2026, 9, 11, 9, 45),
};

// ▼▼▼ ここから
// const updatedTodo = {
//   ...todo, // スプレッド構文
//     name: "Learn COBOL",
//     priority: 1,
// }; // ➊～➌
// ▲▲▲ ここまでが着目してほしいところ
const updatedTodo = {
    ...todo,
}; // ➊
updatedTodo.name = "Learn COBOL"; // ➋
updatedTodo.priority = 1; // ➌

// updatedTodo と todo の「参照」は違う (=異なるオブジェクト)
console.log("todo !== updatedTodo ---> ", todo !== updatedTodo);

// todo の内容を確認
console.log("■ todo の内容");
console.log(JSON.stringify(todo, null, 2));

// updatedTodo の内容を確認
console.log("■ updatedTodoの内容");
console.log(JSON.stringify(updatedTodo, null, 2));