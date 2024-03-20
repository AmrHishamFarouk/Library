const Mylibrary = [];

function book (title,author,pagesno,readed){
    this.title = title;
    this.author = author;
    this.pagesno = pagesno;
    this.readed = readed;
}

addBookToArray('bo7irat','amr',255,true); 
addBookToArray('zeko','amr',285,false);
addBookToArray('e7m','amr',252,true); 


updateLibrary();

function addBookToArray(title,author,pagesno,readed) {
    //add book to array
    Mylibrary.push(new book(title,author,pagesno,readed));
}

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

//to make the read button work
        let readedbtn = document.querySelectorAll('.readed');
        readedbtn.forEach((btn,index) =>{
            btn.addEventListener('click',()=>{
            Mylibrary[index].toggleRead();
            updateLibrary();
            console.log('readed');
            })
        });
//to make the delete button work
        let deletebtn = document.querySelectorAll('.deletebtn');
        deletebtn.forEach((btn,index) =>{
            btn.addEventListener('click',()=>{
            Mylibrary.splice(index,1);
            updateLibrary();
            })
        });

}

function makeCard(name,writer,pages,readed){
        let card    = document.createElement('div');
        let title   = document.createElement('h1');
        let author  = document.createElement('h2');
        let pageno  = document.createElement('h2');
        let states  = document.createElement('h2');
        let readbtn = document.createElement('button');
        card.classList.add('card');
        title.textContent  = name;
        author.textContent = writer;
        pageno.textContent = pages;
        states.textContent = readed == true ? 'readed' : 'not readed';
        readbtn.classList.add('readed');
        readbtn.textContent = readed == true ? 'not readed' : 'readed';
        let delbtn = document.createElement('button');
        delbtn.classList.add('deletebtn');
        delbtn.textContent = 'Remove Book';
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pageno);
        card.appendChild(states);
        card.appendChild(delbtn);
        card.appendChild(readbtn);
        return card;
}


let openform = document.querySelector('.addBooks');
let modal    = document.querySelector('.modal');

openform.addEventListener('click',()=>{
    modal.showModal();
})

let closemodal  = document.querySelector('.closemodal');
let newBookForm = document.querySelector('#newBookForm');

newBookForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    //this act like  query select all
    let name = document.getElementsByName('book-title');
    console.log(name[0].value);
    let writer = document.getElementsByName('book-writer');
    console.log(writer[0].value);
    let pageno = document.getElementsByName('pageno');
    //not working
    let checkbox = document.getElementsByName('book-readed');
    
    addBookToArray(name[0].value,writer[0].value,pageno[0].value,checkbox[0].checked); 
    updateLibrary();
    modal.close();
})

book.prototype.toggleRead = function(){
    this.readed = !this.readed;
}
