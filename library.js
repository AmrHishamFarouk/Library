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
        states.textContent = readed? 'readed' : 'not readed';
        let readbtn = document.createElement('button');
        readbtn.classList.add('readed');
        readbtn.textContent = 'readed';
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
let modal = document.querySelector('.modal');

openform.addEventListener('click',()=>{
    modal.showModal();
})

let closemodal = document.querySelector('.closemodal');
console.log(closemodal)
let newBookForm = document.querySelector('#newBookForm');

newBookForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    //this act like  query select all
    let name = document.getElementsByName('book-title');
    console.log(name[0].value);
    let writer = document.getElementsByName('book-writer');
    console.log(writer[0].value);
    let pageno = document.getElementsByName('pageno');
    console.log(pageno[0].value);
    //not working
    let checkbox = document.getElementsByName('readed');
    let states = checkbox.checked == true ? 'readed' : 'not readed'
    console.log(checkbox);
    addBookToArray(name[0].value,writer[0].value,pageno[0].value,states); 
    updateLibrary();
    modal.close();

})


let deletebtn = document.querySelectorAll('.deletebtn');
deletebtn.forEach((btn) =>{
    btn.addEventListener('click',()=>{
        console.log('delete');
    })
});


let readedbtn = document.querySelectorAll('.readed');
readedbtn.forEach((btn) =>{
    btn.addEventListener('click',()=>{
        console.log('readed');
    })
});
