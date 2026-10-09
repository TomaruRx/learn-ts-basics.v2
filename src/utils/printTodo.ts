// import dayjs from "dayjs";
// import type { Todo } from "../types.js";

// export const printTodo = (todo: Todo): void => {
//     const todoSummary =
//         `(優先度: ${todo.priority}) ${todo.name}` +
//         ` 期日: ${dayjs(todo.deadline).format("YYYY/MM/DD HH:mm")}`;
//     console.log(todoSummary);
// };

import dayjs from "dayjs";
import type { Todo } from "../types.js";

// export const printTodo = (todo: Todo): void => {
//     const { name, priority, deadline } = todo; // ◀◀ 分割代入
export const printTodo = ({name, priority, deadline}: Todo): void => {
    const todoSummary =
        `(優先度: ${priority}) ${name}` +
        ` 期日: ${dayjs(deadline).format("YYYY/MM/DD HH:mm")}`;
    console.log(todoSummary);
};

// 以下のプログラムと実質的に同じ

// export const printTodo = (todo: Todo): void => {
//     const name = todo.name;          // 通常の代入
//     const priority = todo.priority;  // 通常の代入
//     const deadline = todo.deadline;  // 通常の代入
//     const todoSummary =
//         `(優先度: ${priority}) ${name}` +
//         ` 期日: ${dayjs(deadline).format("YYYY/MM/DD HH:mm")}`;
//     console.log(todoSummary);
// };