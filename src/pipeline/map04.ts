import { initTodos } from "./initTodos.js";

console.log("プロパティ変更前");
console.log(JSON.stringify(initTodos, null, 2));
// React の useState の更新関数
// setTodos(initTodos);

const targetId = "a004";
const updatedTodos = initTodos.map((todo) => {
  return todo.id === targetId ? { ...todo, isDone: false } : todo; // 条件演算子
});
console.log("プロパティ変更後");
console.log(JSON.stringify(updatedTodos, null, 2));
// React の useState の更新関数
// setTodos(updatedTodos);