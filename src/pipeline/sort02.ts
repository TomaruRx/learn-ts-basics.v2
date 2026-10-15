import type { Todo } from "./types.js";
import { initTodos } from "./initTodos.js";

const sortedTodos: Todo[] = [...initTodos].sort((a, b) => {
    if (a.isDone !== b.isDone) {
        return a.isDone ? 1 : -1;
    }
    if (a.deadline === null && b.deadline === null) {
        return 0;
    }
    if (a.deadline === null) {
        return 1;
    }
    if (b.deadline === null) {
        return -1;
    }
    return a.deadline.getTime() - b.deadline.getTime();
});

console.log(JSON.stringify(initTodos, null, 2));
console.log(JSON.stringify(sortedTodos, null, 2));