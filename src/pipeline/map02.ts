import { initTodos } from "./initTodos.js";

console.log("プロパティ変更前");
console.log(JSON.stringify(initTodos, null, 2));
// React の useState の更新関数
// setTodos(initTodos);

// NGなプロパティ変更
const targetId = "a004"; // isDone を false に戻す対象
for (const todo of initTodos) {
    if (todo.id === targetId) {
        todo.isDone = false;
        break;
    }
}
console.log("プロパティ変更後");
console.log(JSON.stringify(initTodos, null, 2));
// React の useState の更新関数
// setTodos(initTodos);