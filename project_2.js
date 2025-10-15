function getComments(callback) {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => callback(null, data))
    .catch(err => callback(err));
}
function sortComments(comments) {
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
getComments((error, comments) => {
  if (error) {
    console.error('Ошибка при загрузке комментариев:', error);
    return;
  }
  const sorted = sortComments(comments);
  console.log(sorted.slice(0, 500));
});
