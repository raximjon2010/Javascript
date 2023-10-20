let searchInput = document.querySelector('.textInput');
let textInput = document.querySelector('input[type = "text"]');
let emailInput = document.querySelector('input[type = "email"]');
let AddButton = document.querySelector('.Add_button');
let Save_button = document.querySelector('.Save_button');
let EditButton = document.querySelector('.first');
let DeleteButton = document.querySelector('.las');
let table_menu_data_id = document.querySelector('.table_menu_data_id')
let table_menu_data_name = document.querySelector('table_menu_data_name');
let table_menu_data_email = document.querySelector('table_menu_data_email');
let table_menu_data = document.querySelector('.table_menu_data');
let table_container_Adding = document.querySelector('.table_container_Adding')
// =========================================================
let deleteAdd = () => {
    if (AddButton) {
        AddButton.style.display = 'none'
    }
    if (Save_button) {
        document.querySelector('.Save_button').style.display = ''
    }
}
AddButton.addEventListener('click', deleteAdd);

// let deleteSave = () => {
//     if (Save_button) {
//         Save_button.style.display = 'none'
//     }
//     if (AddButton) {
//         document.querySelector('.AddButton').style.display = ''
//     }
// }
// Save_button.addEventListener('click', deleteSave);
// =========================================================
Save_button.addEventListener('submit', () => {
    const Add = textInput.value
    console.log(Add);
})










