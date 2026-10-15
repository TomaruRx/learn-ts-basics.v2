import { initTodos } from "./initTodos.js";

const updatedTodos = initTodos.filter((todo) => !todo.isDone);
console.log("未完了Todoの一覧");
console.log(JSON.stringify(updatedTodos, null, 2));