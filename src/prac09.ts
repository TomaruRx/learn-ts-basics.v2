import type { Todo } from "./types.js";
import { printTodo } from "./utils/printTodo.js";

const todo1: Todo = {
    name: "TypeScriptの勉強",
    priority: 3,
    isDone: false,
    deadline: new Date(2026, 9, 11, 9, 45),
};

console.log(`■ 状態変更前`);
printTodo(todo1);

todo1.name = "COBOLの勉強をする"; // プロパティの変更
todo1.priority = 1; // プロパティの変更

console.log(`■ 状態変更後`);
printTodo(todo1);