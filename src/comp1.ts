import type { Todo } from "./types.js";

const todo1: Todo = {
    name: "TypeScriptの勉強",
    priority: 1,
    isDone: false,
    deadline: new Date(2026, 9, 11, 9, 45),
};

const todo2: Todo = {
    name: "TypeScriptの勉強",
    priority: 1,
    isDone: false,
    deadline: new Date(2026, 9, 11, 9, 45),
};

console.log(todo1 === todo2); // 比較結果は「false」