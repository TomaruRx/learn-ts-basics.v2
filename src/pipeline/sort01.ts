import { initTodos } from "./initTodos.js";

const sortedTodos = [...initTodos].sort((a, b) => {
    return a.priority - b.priority; // 昇順
    // return b.priority - a.priority; // 降順
});

console.log(JSON.stringify(initTodos, null, 2));
console.log(JSON.stringify(sortedTodos, null, 2));