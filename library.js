const Mylibrary = [];

function book (title,author,pagesno,readed){
    this.title = title;
    this.author = author;
    this.pagesno = pagesno;
    this.readed = readed;
}

// addBookToLibrary('bo7irat','amr',255,true); 
// addBookToLibrary('zeko','amr',285,false);
// addBookToLibrary('e7m','amr',252,true); 

// console.log(Mylibrary);
// Mylibrary.forEach(function(e){
//     console.log(e);
// })
   
function updateLibrary(){
    //clears the current library
    let books = document.querySelector('.books');
    books.remove();
    
    Mylibrary.forEach(function(e){
        console.log(e);
    })
}

function makeCard(){
    let library = document.querySelector('.books');

}

function addBookToLibrary(title,author,pagesno,readed) {
    //add book to array
    Mylibrary.push(new book(title,author,pagesno,readed));
}