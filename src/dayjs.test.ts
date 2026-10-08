import { expect, test } from "vitest";
import dayjs from "dayjs";
import "dayjs/locale/ja.js";
import { date2str } from "./utils/date2str.js";

test("自作関数とDay.jsで同じ形式の日時を得る", () => {
    const dt = new Date(2026, 0, 3, 4, 5);
    const expected = "2026/01/03 04:05";
    expect(date2str(dt)).toBe(expected);
    expect(dayjs(dt).format("YYYY/MM/DD HH:mm")).toBe(expected);
});

test("日本語の曜日を含めて表示する", () => {
    const dt = new Date(2026, 9, 2, 14, 15);
    expect(dayjs(dt).locale("ja").format("YYYY/MM/DD(ddd) HH:mm"))
    .toBe("2026/10/02(金) 14:15");
});