import { expect, test } from "vitest";
import { date2str } from "./date2str.js";

test("前回の日時を年/月/日 時:分で整形する", () => {
    const dt = new Date(2025, 9, 2, 14, 15);
    expect(date2str(dt)).toBe("2025/10/02 14:15");
});

test("1桁の月・日・時・分をゼロ埋めする", () => {
    const dt = new Date(2026, 0, 3, 4, 5);
    expect(date2str(dt)).toBe("2026/01/03 04:05");
});

test("12月末の日時を整形する", () => {
    const dt = new Date(2026, 11, 31, 23, 59);
    expect(date2str(dt)).toBe("2026/12/31 23:59");
});

test("0時0分を00:00とする", () => {
    const dt = new Date(2026, 9, 2, 0, 0);
    expect(date2str(dt)).toBe("2026/10/02 00:00");
});