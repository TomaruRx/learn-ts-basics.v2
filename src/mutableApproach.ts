import type { Todo } from "./types.js";

const todo: Todo = {
    name: "Learn TypeScript",
    priority: 3,
    isDone: false,
    deadline: new Date(2026, 9, 11, 9, 45),
};

// ▼▼▼ ここから
const updatedTodo = todo; // ➊
updatedTodo.name = "Learn COBOL"; // ➋
updatedTodo.priority = 1; // ➌
// ▲▲▲ ここまでが着目してほしいところ

// updatedTodo と todo の「参照」は同じ (=同じオブジェクト)
console.log("todo !== updatedTodo ---> ", todo !== updatedTodo);

// todo の内容を確認
console.log("■ todo の内容");
console.log(JSON.stringify(todo, null, 2));

// updatedTodoの内容を確認
console.log("■ updatedTodoの内容");
console.log(JSON.stringify(updatedTodo, null, 2));