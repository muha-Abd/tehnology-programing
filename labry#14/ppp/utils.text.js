import { square, maxOfArray } from "./utils.js";

test("square(5) должно быть 25", () => {
    expect(square(5)).toBe(25);
});

test("square(-4) должно быть 16", () => {
    expect(square(-4)).toBe(16);
});

test("maxOfArray должен возвращать максимальный элемент", () => {
    expect(maxOfArray([1, 5, 3])).toBe(5);
});