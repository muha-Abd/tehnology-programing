/**
 * @jest-environment jsdom
 */
import { saveTasks, loadTasks } from "../storage.js";

test("Сохранение и загрузка списка задач", () => {
  const sample = ["a", "b", "c"];

  saveTasks(sample);
  const loaded = loadTasks();

  expect(loaded).toEqual(sample);
});