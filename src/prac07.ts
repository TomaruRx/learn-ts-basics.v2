import type { Todo } from "./types.js"; 

// Todo型のオブジェクトを作成
const todo1: Todo = {
    name: "TypeScriptの勉強",  // カンマで区切り
    priority: 3,
    isDone: false,
    deadline: new Date(2026, 9, 11, 9, 45),
};

// Todo型のオブジェクトを作成
const todo2: Todo = {
    name: "基礎物理3の宿題",
    priority: 1,
    isDone: false,
    deadline: new Date(2026, 9, 10, 16, 0),
};

console.log(JSON.stringify(todo1, null, 2));
console.log(JSON.stringify(todo2, null, 2));