function getTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(todos => todos.filter(t => !t.completed));
}

getTodos()
  .then(data => console.log(data.slice(0, 200)))
  .catch(err => console.error('Ошибка todos:', err));
