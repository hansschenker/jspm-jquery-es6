import * as $ from 'jquery';
import {Note} from './note';

const notes: Note[] = [];

loadListFromJson();


function loadListFromJson() {

    //const note = new Note('note 3');

    $.getJSON('notes.json', function (data) {
        console.dir(data.notes);
        console.log(typeof data.notes);
        data.notes.forEach(note => {
            $('#notes').append(`<li class="${note.id}">${note.title}</li>`);
        });
    });

}

function loadArrayFromJson() {

}