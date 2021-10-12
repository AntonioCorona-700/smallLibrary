/*export default class ModifyBook {
    constructor() {
        this.keywords = document.getElementById('option');
        this.typeBook = document.getElementById('update');
        var updateButton = document.getElementById('updateDetails');
        var cancelButton = document.getElementById('cancel');
        var favDialog = document.getElementById('favDialog');
        var submit=document.getElementById('submit')
        updateButton.addEventListener('click', function() {
            favDialog.showModal();
          });
      
          // Form cancel button closes the dialog box
          cancelButton.addEventListener('click', function() {
            favDialog.close();
          });

      
    }
    onClick(callback) {
        this.submit.onclick = () => {
            if(this.option.value === ''){
                this.alert.classList.remove('d-none');
                this.alert.innerText = 'Title of the book cannot be empty';
                return;
            }
            if(this.update.value === ''){
                this.alert.classList.remove('d-none');
                this.alert.innerText = 'Author cannot be empty.';
                return;
            }
            
            this.alert.classList.add('d-none');
            callback(this.id.value,this.option.value, this.update.value);
            
            this.option.value = "";
            this.update.value = "";

        }
    }
}

*/