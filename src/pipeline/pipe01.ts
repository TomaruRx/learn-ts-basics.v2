import dayjs from "dayjs";
import { initTodos } from "./initTodos.js";
const dtFmt = "YYYY/MM/DD HH:mm";

const listItemsTodos: string[] = initTodos
    .filter((todo) => !todo.isDone)
    .sort((a, b) => a.priority - b.priority)
    .map(
        (todo) =>
        `<li>優先度[${todo.priority}] ${todo.name}` +
        `...期限${todo.deadline === null ? "なし" : dayjs(todo.deadline).format(dtFmt)}</li>`
    );
console.log(JSON.stringify(initTodos, null, 2)); // 変更操作の影響を受けていない
console.log(JSON.stringify(listItemsTodos, null, 2));