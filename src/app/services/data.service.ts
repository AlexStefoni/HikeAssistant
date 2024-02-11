import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Users {
  id?: string | number | null | undefined ;
  email: string | number | null | undefined ;
  user_id: string | number | null | undefined ;
  user_pass: string | number | null | undefined ;
  user_type: boolean;
  
}
export interface Trails {
  id? :  string | number | null | undefined ;
  Creator :  string | number | null | undefined ;
  EndLat :  string | number | null | undefined ;
  EndLon :  string | number | null | undefined ;
  Name  :  string | number | null | undefined ;
  StartLat  :  string | number | null | undefined ;
  StartLon  :  string | number | null | undefined ;
  description  :  string | number | null | undefined ;

}

export interface DataC{
  id? :string;
  data:string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  temp : string;

  constructor(private firestore: Firestore) { }

  getTrails(): Observable<Trails[]> {
    const notesRef = collection(this.firestore, 'Trails');
    return collectionData(notesRef, { idField: 'id'}) as Observable<Trails[]>;
  }

  getUsers(): Observable<Users[]> {
    const notesRef = collection(this.firestore, 'Users');
    return collectionData(notesRef, { idField: 'id'}) as Observable<Users[]>;
  }

  getUser_byId(id:string):Observable<Users>{
    const UserDocRef = doc(this.firestore, `Users/${id}`);
    return docData(UserDocRef, { idField: 'id' }) as Observable<Users>;
  }
  getTrail_byId(id:string):Observable<Trails>{
    const TrailDocRef = doc(this.firestore, `Trails/${id}`);
    return docData(TrailDocRef, { idField: 'id' }) as Observable<Trails>; 
  }

  addUser(user: Users) {
    const notesRef = collection(this.firestore, 'Users');
    return addDoc(notesRef, user);
  }

  addTrail(trail: Trails){
    const notesRef = collection(this.firestore, 'Trails');
    return addDoc(notesRef, trail);
  }

  getUserCurrent(): Observable<DataC> {
    const CUDocRef = doc(this.firestore, `Current/Current_User`);
    return docData(CUDocRef, { idField: 'id' }) as Observable<DataC>;
  }
  getTrailCurrent():Observable<DataC> {
    const CTDocRef = doc(this.firestore, `Current/Current_trail`);
    return docData(CTDocRef, { idField: 'id' }) as Observable<DataC>;
  }

  setUserCurrent(id:any){
    const CUDocRef = doc(this.firestore, `Current/Current_User`);
    return updateDoc(CUDocRef,{data:id});
  }

  setTrailCurrent(id:any){
    const CTDocRef = doc(this.firestore, `Current/Current_trail`);
    return updateDoc( CTDocRef ,{data: id});
  }

  updatePass(id:any , pass:any) {
    const UDocRef = doc(this.firestore, `Users/${id}`);
    return docData(UDocRef, { idField: 'id' }) as Observable<Users>;
    //updateDoc(UDocRef, { user_pass : pass });
  }

  

}


