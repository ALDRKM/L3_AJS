function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      return users.map(u => ({
        id: u.id,
        name: u.name,
        username: u.username,
        email: u.email,
        phone: u.phone
      }));
    });
}

getUsers()
  .then(data => console.log(data))
  .catch(err => console.error('Ошибка users:', err));
