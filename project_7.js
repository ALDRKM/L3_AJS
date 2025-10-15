async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return users.map(u => ({
    id: u.id,
    name: u.name,
    username: u.username,
    email: u.email,
    phone: u.phone
  }));
}

getUsers()
  .then(data => console.log(data))
  .catch(err => console.error('Ошибка async users:', err));
