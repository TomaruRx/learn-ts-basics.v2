// 第02回で実装した src/utils/todoStatus.ts を利用
import type { Todo } from "./types.js";
import { isOverdue } from "../utils/todoStatus.js";

export const getOverdueTodos = (todos: Todo[], now: Date): Todo[] => {
    return todos.filter((todo) => {
        if (todo.deadline === null) {
        return false;
        }
        const todoWithDeadline = { ...todo, deadline: todo.deadline };
        return isOverdue(todoWithDeadline, now);
    });
};