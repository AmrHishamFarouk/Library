const Mylibrary = [];

function book (title,author,pagesno,readed){
    this.title = title;
    this.author = author;
    this.pagesno = pagesno;
    this.readed = readed;
}

addBookToLibrary('bo7irat','amr',255,true); 
addBookToLibrary('zeko','amr',285,false);
addBookToLibrary('e7m','amr',252,true); 

updateLibrary();
   
function updateLibrary(){
    //clears the current library
    document.querySelector('.books').remove();
    //make the new library
    let books = document.createElement('div');
    books.classList.add('books');

    Mylibrary.forEach(function(e){
        let card = makeCard(e.title,e.author,e.pagesno,e.readed);
        books.appendChild(card); 
    })

    let container = document.querySelector('.container');
    container.appendChild(books);
}

function makeCard(name,writer,pages,readed){
        let card = document.createElement('div');
        card.classList.add('card');
        let title = document.createElement('h1');
        title.textContent = name;
        let author = document.createElement('h2');
        author.textContent  =  writer;
        let pageno = document.createElement('h2');
        pageno.textContent = pages;
        let states = document.createElement('h2');
        states.textContent = readed;
        let delbtn = document.createElement('button');
        delbtn.classList.add('deletebtn');
        delbtn.textContent = 'Remove Book'
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pageno);
        card.appendChild(states);
        card.appendChild(delbtn);
}

function addBookToLibrary(title,author,pagesno,readed) {
    //add book to array
    Mylibrary.push(new book(title,author,pagesno,readed));
}






