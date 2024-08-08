const URL = 'https://script.google.com/macros/s/AKfycbzYIbkY2NLgytTqTdU822EiETbREihtVJslB0JWhCIL4AGouYUow-gFZfXQPLkB1n7kUA/exec';
const SHEET_NAME = 'news';
const username = localStorage.getItem('YopshLoc_Username');
fetch(URL + '?username=' + username)
.then(response => response.json())
.then(data => {
  const dataContainer = document.getElementById('data-container');
  dataContainer.innerHTML = '';
  data.forEach(row => {
    const div = document.createElement('div');
    div.innerHTML = `
    <p class="title-class">Title: ${row[1]}</p>
    <img src="${row[3]}" class="image-another-class">
    <p class="news-class">News: ${row[2]}</p>
    <p class="username-class">Username: ${row[0]}</p>
    <hr>
    `;
    dataContainer.appendChild(div);
  });
})
.catch(error => console.error(error));