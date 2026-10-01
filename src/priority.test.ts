import { expect, test } from "vitest";
import { isValidPriority } from "./priority.js";

test("優先度2は有効", () => {
    expect(isValidPriority(2)).toBe(true);
});
test("下限の1は有効", () => {
    expect(isValidPriority(1)).toBe(true);
});

test("上限の3は有効", () => {
    expect(isValidPriority(3)).toBe(true);
});

test("下限より小さい0は無効", () => {
    expect(isValidPriority(0)).toBe(false);
});

test("上限より大きい4は無効", () => {
    expect(isValidPriority(4)).toBe(false);
});
test("範囲内でも小数の1.5は無効", () => {
    expect(isValidPriority(1.5)).toBe(false);
});