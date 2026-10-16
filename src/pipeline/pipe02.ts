import dayjs from "dayjs";
import type { Todo } from "./types.js";
import { initTodos } from "./initTodos.js";
const dtFmt = "YYYY/MM/DD HH:mm";

const deleteTodoById = (todos: Todo[], id: string): Todo[] => {
    return todos.filter((todo) => todo.id !== id);
};

const stringifyTodos = (todos: Todo[]): string[] =>
    todos.map((todo) => {
        const deadline = todo.deadline === null
        ? "期限なし"
        : `期限 ${dayjs(todo.deadline).format(dtFmt)}`;
        return `id=${todo.id} ${todo.name} ${deadline}`;
    });

const updatedTodos = deleteTodoById(initTodos, "a002");
console.log("Before:", stringifyTodos(initTodos));
console.log("After:", stringifyTodos(updatedTodos));