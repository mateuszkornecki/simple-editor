const editorTitle = document.querySelector(".editor__title--js");
const editorTextArea = document.querySelector(".editor__text-area--js");
const editorSaveButton = document.querySelector(".editor__save-button--js");
const editorLoadButton = document.querySelector(".editor__load-button--js");
const note = {
    title: ``,
    text: ``
}

editorTitle.addEventListener('keyup', (e) => {
    note.title = editorTitle.value;
})

editorTextArea.addEventListener('keyup', (e) => {
    note.text = editorTextArea.value;
})

editorSaveButton.addEventListener('click', (e) => {
    const noteStringify = JSON.stringify(note);
    localStorage.setItem('note', noteStringify);
    editorTitle.value = "";
    editorTextArea.value = "";
})


editorLoadButton.addEventListener('click', (e) => {

    if (localStorage.getItem('note')) {
        const note = localStorage.getItem('note');
        const noteParse = JSON.parse(note);
        editorTitle.value = noteParse.title;
        editorTextArea.value = noteParse.text;
    } else {
        alert('You need to create and save a note first!');
    }
})