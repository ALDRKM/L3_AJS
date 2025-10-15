function getPosts(callback) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => callback(err));
}

function sortTitle(posts) {
  return posts.slice().sort((a, b) => b.title.length - a.title.length);
}

getPosts((error, posts) => {
  if (error) {
    console.error('Ошибка при загрузке постов:', error);
    return;
  }
  const sorted = sortTitle(posts);
  console.log(sorted.slice(0, 100));
});
