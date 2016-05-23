import * as $ from 'jquery';
import {Note} from './note';

const notes: Note[] = [];

const titleBox = $('#title');

loadListFromJson();

titleBox.keypress(function (event) {

    var key = event.which;

    if (key == 13) {

        const title: string = titleBox.val();
        const id : number = 1;
        const note = new Note(id,title);

        addNoteToJson(note);
        addNoteToArray(note);
    }

});


function addNoteToJson(note: Note) {
    $.ajax({
        type: "POST",
        dataType: "json",
        data: "title=" + note.title,
        url: "http://localhost:3000/notes",
        success: function (note) {
            console.log('success',note.title);
            addNoteToArray(note);
            addNoteToList(note);
            clearInputField();
        }

    });
}

function clearInputField(){
    titleBox.val('');
}

function addNoteToList(note:Note){
    $('#notes').append(`<li class="${note.id}">${note.title}</li>`);
}


function addNoteToArray(note:Note){
    notes.push(note);
    console.log('add Note to Array');
    console.dir(notes);
}


function loadListFromJson() {

    $.getJSON('notes.json', function (data) {

        data.notes.forEach(note => {
            // add to list
            $('#notes').append(`<li class="${note.id}">${note.title}</li>`);
            // add to array
            notes.push(note);
        });

    });

}




function loadArrayFromJson() {

}