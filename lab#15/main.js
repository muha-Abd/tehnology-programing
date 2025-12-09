// main.js — основной модуль
import { saveTasks, loadTasks } from './storage.js';
import { renderList } from './ui.js';

let tasks = loadTasks();

const input = document.getElementById('taskInput');
const listElem = document.getElementById('taskList');

// удаление
function removeTask(index) {
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderList(listElem, tasks, removeTask);
}

document.getElementById('addBtn').addEventListener('click', () => {
  const text = input.value.trim();
  if (text) {
    tasks.push(text);
    saveTasks(tasks);
    input.value = '';
    renderList(listElem, tasks, removeTask);
  }
});

renderList(listElem, tasks, removeTask);