import AddBook from "./components/addBook.js";

export default class View {

    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addBookForm = new AddBook();
        this.addBookForm.onClick((t,a,y,c,d,tb) => this.addBook(t,a,y,c,d,tb) );  
    }
    setModel(model) {
        this.model = model;
    }

    render() {
        const books = this.model.getBooks();
        if( books && books.length > 0)
            books.forEach( t => this.createRow(t) );
    }

    addBook(title, author,year,country,keywords,typeBook){
        const book = this.model.addBook(title,author,year,country,keywords,typeBook);
        this.createRow(book)
    }

    removeBook(id){
        this.model.removeBook(id);
        document.getElementById(id).remove();
    }

    changeItem(id,option,change){
        this.model.changeItem(id,option,change)
    }
    toogleCompleted(id){
        this.model.toogleCompleted(id);
    }

    createRow(book) {
        const row = this.table.getElementsByTagName('tbody')[0].insertRow();
        row.setAttribute('id', book.id);
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.country}</td>
            <td>${book.keywords}</td>
            <td>${book.typeBook}</td>
            <td class="text-center"></td>
            <td class="text-right"></td>
        `;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = book.completed;
        checkbox.onclick = () => this.toogleCompleted(book.id);    
        row.children[6].appendChild(checkbox);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeBook(book.id) ;
        row.children[6].appendChild(removeBtn);


        const modifyElement = document.createElement('button');
        modifyElement.classList.add('btn','btn-primary', 'mb-0');
        modifyElement.innerHTML = '<i class="fa fa-undo" aria-hidden="true"></i>'
        modifyElement.onclick = () => this.changeItem(book.id,option,change) ;
        row.children[7].appendChild(modifyElement);
    
    }
}