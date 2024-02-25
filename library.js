const Mylibrary = [];

function book (title,author,pagesno,readed){
    this.title = title;
    this.author = author;
    this.pagesno = pagesno;
    this.readed = readed;
}
let book1 = new book('bo7irat','amr',255,true);
Mylibrary.push(book1);
let book2 = new book('zeko','amr',285,false);
Mylibrary.push(book2);
let book3 = new book('e7m','amr',252,true);
Mylibrary.push(book3);


Mylibrary.forEach(function(e){

    // loop in Array;

})

function updateLibrary(){
    Mylibrary.forEach(function(e){
        console.log(e);
    })
}

function addBookToLibrary() {
    let newbook = new book(title,author,pagesno,readed);
    Mylibrary.push(newbook);

}