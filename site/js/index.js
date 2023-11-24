bookblok = document.querySelector('.books')
if(window.location.pathname=="/D:/site/front/index.html" ){
async function uploadMultiple() {
    const response = await fetch("http://127.0.0.1:8000/medicines/", {
      method: "GET",
    });
    const result = await response.json();
    console.log(result)
    for (i of result.books){
        books = document.createElement('div')
        books.appendChild(document.createElement('h3')).innerHTML = i.name
        books.appendChild(document.createElement('p')).innerHTML = i.description
        a = books.appendChild(document.createElement('a'))
        a.href = 'index.html'
        bookblok.appendChild(books)
    }
}
}