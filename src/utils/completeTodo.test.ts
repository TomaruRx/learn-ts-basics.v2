import { expect, test } from "vitest";
import type { Todo } from "../types.js";
import { completeTodo } from "./completeTodo.js";

test("元のTodoを保ち、完了済みの新しいTodoを返す", () => {
    const todo: Todo = {
        name: "TypeScriptの勉強",
        priority: 1,
        isDone: false,
        deadline: new Date(2026, 9, 11, 9, 45),
    };
    const updated = completeTodo(todo);

    expect(updated.isDone).toBe(true);
    expect(todo.isDone).toBe(false);
    expect(updated).not.toBe(todo);
    expect(updated.name).toBe(todo.name);
    expect(updated.priority).toBe(todo.priority);
    expect(updated.deadline).toBe(todo.deadline);
});

test("完了済みのTodoを渡しても、元のTodoを保ち、完了済みの別のオブジェクトを返す", () => {
    const todo: Todo = {
        name: "TypeScriptの勉強",
        priority: 1,
        isDone: true,
        deadline: new Date(2026, 9, 11, 9, 45),
    };
    const updated = completeTodo(todo);

    expect(updated.isDone).toBe(true);
    expect(todo.isDone).toBe(true);
    expect(updated).not.toBe(todo);
    expect(updated.name).toBe(todo.name);
    expect(updated.priority).toBe(todo.priority);
    expect(updated.deadline).toBe(todo.deadline);
});