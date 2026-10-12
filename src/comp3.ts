import type { Todo } from "./types.js";
import { deepEqual } from "./utils/deepEqual.js"; // 追加

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

console.log(todo1 === todo2); // 参照の比較 false
console.log(deepEqual(todo1, todo2)); // 深い比較 true