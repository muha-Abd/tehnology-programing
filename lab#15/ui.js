// ui.js — модуль отображения

export function renderList(listElem, tasks, removeFn) {
    listElem.innerHTML = '';
  
    tasks.forEach((task, i) => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${task}
        <button data-id="${i}" class="del">Удалить</button>
      `;
      listElem.appendChild(li);
    });
  
    // назначаем события кнопкам удаления
    listElem.querySelectorAll('.del').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        removeFn(Number(id));
      });
    });
  }