// Configuration object for dialog boxes
const DIALOG_CONFIG = [
    { boxClass: 'BoxOne', dialogId: 'dialogOne' },
    { boxClass: 'BoxTwo', dialogId: 'dialogTwo' },
    { boxClass: 'BoxThree', dialogId: 'dialogThree' },
    { boxClass: 'BoxFour', dialogId: 'dialogFour' },
    { boxClass: 'BoxFive', dialogId: 'dialogFive' },
    { boxClass: 'BoxSix', dialogId: 'dialogSix' }
];

// Function to close a dialog by its ID
function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog) {
        dialog.close();
    }
}

// Function to initialize a single dialog
function initializeDialog({ boxClass, dialogId }) {
    const box = document.querySelector(`.${boxClass}`);
    const dialog = document.getElementById(dialogId);
    
    if (!box || !dialog) {
        console.warn(`Missing elements for dialog ${dialogId}`);
        return;
    }

    const closeButton = dialog.querySelector('.closeDialog');
    
    box.addEventListener('click', () => {
        dialog.showModal();
    });

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            closeDialog(dialogId);
        });
    }
}

// Initialize all dialogs
document.addEventListener('DOMContentLoaded', () => {
    DIALOG_CONFIG.forEach(initializeDialog);
});
