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
    const Ref = collection(this.firestore, 'Trails');
    return collectionData(Ref, { idField: 'id'}) as Observable<Trails[]>;
  }

  getUsers(): Observable<Users[]> {
    const Ref = collection(this.firestore, 'Users');
    return collectionData(Ref, { idField: 'id'}) as Observable<Users[]>;
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
    const Ref = collection(this.firestore, 'Users');
    return addDoc(Ref, user);
  }

  addTrail(trail: Trails){
    const Ref = collection(this.firestore, 'Trails');
    return addDoc(Ref, trail);
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
    return updateDoc(UDocRef, { user_pass : pass });
  }

  updatePass2(user: Users, pass:any) {
    const Ref = doc(this.firestore, `Users/${user.id}`);
    return updateDoc(Ref, { user_pass : pass  });
  }

  updateTrails(trail: Trails,newTrail: Trails){
    const Ref = doc(this.firestore, `Trails/${trail.id}`);
    return updateDoc(Ref, { EndLat : newTrail.EndLat, EndLon : newTrail.EndLon, Name : newTrail.Name, StartLat : newTrail.StartLat, StartLon : newTrail.StartLon , description : newTrail.description });
  }

  deleteTrail(trail: Trails){
    
    const Ref = doc(this.firestore, `Trails/${trail.id}`);
    return deleteDoc(Ref);
    
  }

}


