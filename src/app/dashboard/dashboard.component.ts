import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  errMessage: string;
  notes: Note[];
  titleModel: string;
  textModel: string;
NotesService

  constructor(private noteService: NotesService) {

  }

  ngOnInit() {
    this.noteService.getNotes().subscribe(noteResponse => {

      this.notes = noteResponse;
    },
      err => this.errMessage = "Http failure response for http://localhost:3000/notes: 404 Not Found");
  }

  addNote() {
    const newNote: Note = { id: this.notes.length + 1, title: this.titleModel, text: this.textModel };
    if ((newNote.title === undefined || newNote.title.trim() === '' ) || (newNote.text === undefined || newNote.text.trim() === '')) {
      this.errMessage = "Title and Text both are required fields";
    } else {

      this.noteService.addNote(newNote).subscribe(note => {
        this.notes.push(note);
        this.errMessage = "";
      },
        err => this.errMessage = "Http failure response for http://localhost:3000/notes: 404 Not Found");
    }
  }
}
