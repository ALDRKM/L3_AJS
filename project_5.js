async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  const copy = posts.slice();
  copy.sort((a, b) => b.title.length - a.title.length);
  return copy;
}

getPosts()
  .then(data => console.log(data.slice(0, 100)))
  .catch(err => console.error('Ошибка async posts:', err));
