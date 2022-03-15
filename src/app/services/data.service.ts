import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { restEvent } from '../model/restEvent';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  //add event
  addEvent(event : restEvent){
    event.id = this.afs.createId();
    return this.afs.collection('/restEvent').add(event);
  }

  //get all events
  getAllEvents(){
    return this.afs.collection('/restEvent').snapshotChanges();
  }

  //delete event
  deleteEvent(event : restEvent){
    return this.afs.doc('/restEvent/'+event.id).delete();
  }

  //update event
  updateEvent(event :  restEvent){
    this.deleteEvent(event);
    this.addEvent(event);
  }
}
