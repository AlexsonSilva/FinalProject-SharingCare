import { Component, OnInit } from '@angular/core';
import { restEvent } from 'src/app/model/restEvent';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventList : restEvent[] = [];
  eventObj : restEvent = {
    id: '',
    restName: '',
    dishName: '',
    eventDate: ''
  };
  id:  string = '';
  restName: string = '';
  dishName: string = '';
  eventDate: string = '';
  
  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(){
    this.data.getAllEvents().subscribe(res => {
      this.eventList = res.map((e: any)  => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching event data');
    })
  }

  resetForm(){
    this.id = '';
    this.restName = '';
    this.dishName = '';
    this.eventDate = '';
  }

  addEvent(){
    if(this.restName == '' || this.dishName == '' || this.eventDate == ''){
      alert('Fill all input fields');
      return;
    }

    this.eventObj.id = '';
    this.eventObj.restName = this.restName;
    this.eventObj.dishName = this.dishName;
    this.eventObj.eventDate = this.eventDate;

    this.data.addEvent(this.eventObj);
    this.resetForm();
  }

  updateEvent(){

  }

  deleteEvent(event : restEvent){

    if(window.confirm('Are you sure you want to delete the event: '+event.eventDate+ ' '+ ' ?')){
    this.data.deleteEvent(event);
   }
 }

}
