export default class Model {

    constructor(){
        this.view = null;
        this.books = JSON.parse(localStorage.getItem('books'));
        if( !this.books || this.books.length === 0 ){
            this.currentId = 1;
            this.books = [];
        }else{
            this.currentId = this.books[this.books.length - 1 ].id + 1;
        }

    }

    setView(view) {
        this.view = view;
    }

    getBooks() {
        return this.books.map( book => ({...book}) );
    }

    addBook(title,author,year,country,keywords,typeBook) {
        const book = { 
            id: this.currentId++,
            title,
            author,
            year,
            country,
            keywords,
            typeBook,
            completed: false
        };
        this.books.push(book);
        this.save();
        return {...book};
    }

    findBook(id){
        return this.books.findIndex( t => t.id === id);
    }

    removeBook(id){
        const index = this.findBook(id);
        this.books.splice(index, 1);
        this.save();
    }

    toogleCompleted(id){
        const index = this.findBook(id);
        const book = this.books[index];
        book.completed = !book.completed;
        this.save();
    }
    changeItems(id, option, update){
        const index = this.findBook(id);
        const book = this.books[index];
        book.option = update;
        this.save();
        
    }
    save(){
        localStorage.setItem('books', JSON.stringify(this.books));
    }

}