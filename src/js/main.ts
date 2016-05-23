import * as $ from 'jquery';
import {Note} from './note';

const notes: Note[] = [];

loadListFromJson();


function loadListFromJson(){
    
    const note = new Note('note 3');
    
    notes.push(note);
    $('#notes').append(`<li>${note.title}</li>`)
}

function loadArrayFromJson(){
    
}