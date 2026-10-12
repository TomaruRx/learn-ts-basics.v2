import type { Todo } from "./types.js";

const todo1: Todo = {
    name: "TypeScriptの勉強",
    priority: 3,
    isDone: false,
    deadline: new Date(2026, 9, 11, 9, 45),
};

const state = todo1.isDone ? "【済】" : "【未】"; // 条件演算子
console.log(`${state}${todo1.name}`);