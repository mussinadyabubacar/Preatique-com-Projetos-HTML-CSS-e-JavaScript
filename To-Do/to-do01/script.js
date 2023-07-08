const inputText = document.querySelector('#inputtext');
const AddListBtn = document.querySelector('.inputtext-btn');
const ul = document.querySelector('.box-list');

const ItensDB = [];

AddListBtn.addEventListener('click', () => {

    if (inputText.value !== '') {

        AddItem();

    }
})