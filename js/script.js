//target the form 
const noteForm = document.querySelector('#note-form');
//form "entry" E #1 for formE1, storying the query selecter in that variable

//target the note header h3 
//to target h3 header for the note
const noteHeader = document.querySelector('.note-header');

function getNotes() {
    const rawNoteArray = localStorage.getItem('notes');
    const notes = JSON.parse(localStorage.getItem('notes')) || []; //converts to array
    //push the  raw notes object into the notes array
    return notes;
}




//a function that is called when the form is submitted
function createNote(eventObj) {
    eventObj.preventDefault();

    //grab the note input 
    const noteInput = document.querySelector('#note-input');
    //get the value what they typed into the box
    const noteText = noteInput.value;
    //create a date value index
    const dateObj = new Date();
    //get the month from the date object
    const month = dateObj.getMonth() + 1;
    //get date from date object
    const date = dateObj.getDate();
    //get the year from the date object
    const year = dateObj.getFullYear();
    //conbine all of those values into a string that looks like this 06/24/2024


    //const dateStr = month + '/' + date + '/' + year;
    //OR
    const dateStr = `${month}/${date}/${year}`;
    //create an ibject value with the note text and the current date
    //the object should have two properties - text and date
    //KET VALUE PAIR
    const entryStr = {
        text: noteText,
        date: dateStr
    }
    /*
    //pull the old data from the database (localstorage) or an empy array if no previous data has been stored
    const rawNoteArray = localStorage.getItem('notes');
    const notes = JSON.parse(localStorage.getItem('notes')) || []; //converts to array
    */
    const notes = getNotes();

    //push the  raw notes object into the notes array
    notes.push(entryStr);

    localStorage.getItem('notes', JSON.stringify(notes));

    const jsonArray = JSON.stringify(notes);
    localStorage.setItem('notes', jsonArray);

    outputNotes();
    noteInput.value = '';

}



function outputNotes() {
    const notes = getNotes();
    const container = document.querySelector('.container');
    //this container allows us to interact w/ the main section container in our index


    if (notes.length) {
        noteHeader.innerText = 'Your Notes:'
    }

    container.innerHTML = '';
//This will clear the container before we begin the loop 



    for (const entryStr of notes) {
        //Target our main container element
        container.insertAdjacentHTML('beforeend', `
        <article class="note">
            <p class="note-text">${entryStr.text}</p>
            <p class="note-date">Created: ${entryStr.date}</p>
        </article>
        `);

    }


}


outputNotes();
noteForm.addEventListener('submit', createNote);
/*

//set up ny necessary event listeners that need to be listening when the page loads
const rawNoteArray = localStorage.getItem('notes');
const parsed = JSON.parse(rawNoteArray);
console.log(rawNoteArray);
*/

