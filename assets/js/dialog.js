// Function to close a dialog by its ID
function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.close();
    1
}

// Get the icon-box and dialog elements
const BoxOne = document.querySelector('.BoxOne');
const dialogOne = document.getElementById('dialogOne');
const closeDialogButtonOne = dialogOne.querySelector('.closeDialog');

// Add event listeners
BoxOne.addEventListener('click', () => {
    dialogOne.showModal();
});

closeDialogButtonOne.addEventListener('click', () => {
    closeDialog('dialogOne');
});

// Get the icon-box and dialog elements
const BoxTwo = document.querySelector('.BoxTwo');
const dialogTwo = document.getElementById('dialogTwo');
const closeDialogButtonTwo = dialogTwo.querySelector('.closeDialog');

// Add event listeners
BoxTwo.addEventListener('click', () => {
    dialogTwo.showModal();
});

closeDialogButtonTwo.addEventListener('click', () => {
    closeDialog('dialogTwo');
});

// Get the icon-box and dialog elements
const BoxThree = document.querySelector('.BoxThree');
const dialogThree = document.getElementById('dialogThree');
const closeDialogButtonThree = dialogThree.querySelector('.closeDialog');

// Add event listeners
BoxThree.addEventListener('click', () => {
    dialogThree.showModal();
});

closeDialogButtonThree.addEventListener('click', () => {
    closeDialog('dialogTwo');
});

// Get the icon-box and dialog elements
const BoxFour = document.querySelector('.BoxFour');
const dialogFour = document.getElementById('dialogFour');
const closeDialogButtonFour = dialogFour.querySelector('.closeDialog');

// Add event listeners
BoxFour.addEventListener('click', () => {
    dialogFour.showModal();
});

closeDialogButtonFour.addEventListener('click', () => {
    closeDialog('dialogFour');
});

// Get the icon-box and dialog elements
const BoxFive = document.querySelector('.BoxFive');
const dialogFive = document.getElementById('dialogFive');
const closeDialogButtonFive = dialogFive.querySelector('.closeDialog');

// Add event listeners
BoxFive.addEventListener('click', () => {
    dialogFive.showModal();
});

closeDialogButtonFive.addEventListener('click', () => {
    closeDialog('dialogFive');
});


// Get the icon-box and dialog elements
const BoxSix = document.querySelector('.BoxSix');
const dialogSix = document.getElementById('dialogSix');
const closeDialogdialogSix = dialogSix.querySelector('.closeDialog');

// Add event listeners
BoxSix.addEventListener('click', () => {
    dialogSix.showModal();
});

closeDialogdialogSix.addEventListener('click', () => {
    closeDialog('dialogSix');
});