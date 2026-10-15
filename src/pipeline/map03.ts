import { initTodos } from "./initTodos.js";

console.log("プロパティ変更前");
console.log(JSON.stringify(initTodos, null, 2));
// React の useState の更新関数
// setTodos(initTodos);

// 推奨されるプロパティ変更
const targetId = "a004";
const updatedTodos = initTodos.map((todo) => { // mapメソッドを利用
    if (todo.id === targetId) {
        return { ...todo, isDone: false }; // スプレッド構文を利用
    } else {
        return todo;
    }
});
console.log("プロパティ変更後");
console.log(JSON.stringify(updatedTodos, null, 2));
// React の useState の更新関数
// setTodos(updatedTodos);