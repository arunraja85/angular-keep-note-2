import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../note';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NotesService {
  
  private baseURL : string = "http://localhost:3000/notes";

  constructor(private httpClient : HttpClient){
  }
  getNotes(): Observable<Array<Note>> {
    return this.httpClient.get<Note[]>(this.baseURL);
  }

  addNote(note: Note): Observable<Note> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // 'Authorization': 'my-auth-token'
      })
    };
    return this.httpClient.post<Note>(this.baseURL,note,httpOptions);
  }

}