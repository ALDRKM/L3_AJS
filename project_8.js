async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
  return todos.filter(t => !t.completed);
}

getTodos()
  .then(data => console.log( data.slice(0, 200)))
  .catch(err => console.error('Ошибка async todos:', err));
