import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Note {
  id?: string;
  title: string;
  text: string;
}
export interface Users {
  id?: string | number | null | undefined ;
  email: string | number | null | undefined ;
  user_id: string | number | null | undefined ;
  user_pass: string | number | null | undefined ;
  user_type: boolean;
  
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getTrails(): Observable<Note[]> {
    const notesRef = collection(this.firestore, 'Trails');
    return collectionData(notesRef, { idField: 'id'}) as Observable<Note[]>;
  }

  getNoteById(id: any): Observable<Note> {
    const noteDocRef = doc(this.firestore, `notes/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<Note>;
  }

  addNote(note: Note) {
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, note);
  }

  deleteNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return deleteDoc(noteDocRef);
  }

  updateNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return updateDoc(noteDocRef, { title: note.title, text: note.text });
  }

  addUser(user: Users) {
    const notesRef = collection(this.firestore, 'Users');
    return addDoc(notesRef, user);
  }
}


