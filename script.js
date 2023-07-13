const addElt = document.querySelector('.add_elt');
var inputLabel = document.querySelector('.input_elt');
const container = document.querySelector('.container');

class item {
    constructor(itemName) {
        // Create the item div
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        let inputElt = document.createElement('input');
        inputElt.value = itemName;
        inputElt.disabled = true;
        inputElt.classList.add('elt_name');
        inputElt.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('elt');

        let editButton = document.createElement('button');
        editButton.innerHTML = "Edit";
        editButton.classList.add('edit_elt');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "Remove";
        removeButton.classList.add('remove_elt');

        container.appendChild(itemBox);
        itemBox.appendChild(inputElt);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(inputElt));
        removeButton.addEventListener('click', () => this.remove(itemBox));

    }
    edit(inputElt) {
        inputElt.disabled = !inputElt.disabled;
    }

    remove(item) {
        container.removeChild(item);
    }
}

new item("Sport");

function check() {
    if (inputLabel.value != "") {
        new item(inputLabel.value);
        inputLabel.value = "";
    }
}

addElt.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        check();
    }
    
    // if (e.which === 13) {
    //     check();
    // }
})
