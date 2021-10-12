export default class AddBook {
    constructor() {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.author = document.getElementById('author');
        this.year = document.getElementById('year');
        this.country = document.getElementById('country');
        this.keywords = document.getElementById('keywords');
        this.typeBook = document.getElementById('typeBook');
        this.alert = document.getElementById('alert');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if(this.title.value === ''){
                this.alert.classList.remove('d-none');
                this.alert.innerText = 'Title of the book cannot be empty';
                return;
            }
            if(this.author.value === ''){
                this.alert.classList.remove('d-none');
                this.alert.innerText = 'Author cannot be empty.';
                return;
            }
            if(this.year.value === ''){
                this.alert.classList.remove('d-none');
                this.alert.innerText = 'Invalid entry in year';
                return;
            }
            if(this.country.value === ''){
                this.alert.classList.remove('d-none');
                this.alert.innerText = 'Country cannot be empty.';
                return;
            }
            this.alert.classList.add('d-none');

            callback(this.title.value, this.author.value,this.year.value,this.country.value,this.keywords.value,this.typeBook.value);
            
            this.title.value = "";
            this.author.value = "";
            this.year.value = "";
            this.country.value = "";
            this.keywords.value = "";
            this.typeBook.value = "";
        }
    }
}