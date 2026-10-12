import type { Todo } from "../types.js";

export const completeTodo = (todo: Todo): Todo => {
    // todo.isDone = true; return todo;
    return { ...todo, isDone: true };
};