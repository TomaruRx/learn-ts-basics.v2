import { expect, test } from "vitest";
import type { Todo } from "../types.js";
import { isOverdue, getTodoStatus } from "./todoStatus.js";

const pending: Todo = {
    name: "基礎物理3の宿題",
    priority: 1,
    isDone: false,
    deadline: new Date(2026, 9, 2, 12, 0),
};
const completed: Todo = {
    name: "基礎物理3の宿題",
    priority: 1,
    isDone: true,
    deadline: new Date(2026, 9, 2, 12, 0),
};

test("未完了なら、期限を過ぎたときだけ期限切れになる", () => {
    expect(isOverdue(pending, new Date(2026, 9, 2, 11, 59, 59, 999))).toBe(false);
    expect(isOverdue(pending, new Date(2026, 9, 2, 12, 0))).toBe(false);
    expect(isOverdue(pending, new Date(2026, 9, 2, 12, 0, 0, 1))).toBe(true);
});

test("完了済みなら、期限の前後によらず期限切れにはしない", () => {
    expect(isOverdue(completed, new Date(2026, 9, 2, 11, 59, 59, 999))).toBe(false);
    expect(isOverdue(completed, new Date(2026, 9, 2, 12, 0))).toBe(false);
    expect(isOverdue(completed, new Date(2026, 9, 2, 12, 0, 0, 1))).toBe(false);
});

test("完了済みなら名前の前に済を付ける", () => {
    expect(getTodoStatus(completed, new Date(2026, 9, 2, 13, 0)))
        .toBe("【済】基礎物理3の宿題");
});

test("期限までの残り時間を小数第1位まで示す", () => {
    expect(getTodoStatus(pending, new Date(2026, 9, 2, 10, 30)))
        .toBe("【未】基礎物理3の宿題 (期限まで残り1.5時間)");
});

test("期限ちょうどは残り0.0時間とする", () => {
    expect(getTodoStatus(pending, new Date(2026, 9, 2, 12, 0)))
        .toBe("【未】基礎物理3の宿題 (期限まで残り0.0時間)");
});

test("期限後は超過時間を示す", () => {
    expect(getTodoStatus(pending, new Date(2026, 9, 2, 12, 30)))
        .toBe("【未】基礎物理3の宿題 (期限を0.5時間超過)");
});