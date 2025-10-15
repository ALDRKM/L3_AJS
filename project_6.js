async function getComments() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await res.json();
  const copy = comments.slice();
  copy.sort((a, b) => {
    const na = a.name.toLowerCase();
    const nb = b.name.toLowerCase();
    if (na < nb) return -1;
    if (na > nb) return 1;
    return 0;
  });
  return copy;
}

getComments()
  .then(data => console.log( data.slice(0, 500)))
  .catch(err => console.error('Ошибка async comments:', err));
