import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { FormGroup, FormControl} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Donation } from 'src/app/model/donation';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})

export class MenupageComponent implements OnInit {

  donationList: Donation[] = [];
  donationObj: Donation = {
    id: '',
    donRestName: '',
    donRestEmail: '',
    donQuantity: ''
  };

  id: string = '';
  donRestName: string = '';
  donRestEmail: string = '';
  donQuantity: string = '';

  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    num: new FormControl('')
  })

  constructor(private param:ActivatedRoute,public service:OrderDetailsService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.foodDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
        
    }

    this.getAllDonations();
    
  }

  collectResto()
  {
    console.warn(this.addResto.value)
  }

  getAllDonations(){
    this.service.getAllDonations().subscribe(res => {
      this.donationList = res.map((e: any) => {
        const service = e.payload.doc.service();
        service.id = e.payload.doc.id;
        return service;
      })
    }, err => {
      alert('Error while fetching donation service');
    })
  }

  addDonation(){
    if(this.donRestName == '' || this.donRestEmail == '' || this.donQuantity == ''){
      alert('Fill all input fields');
      return;
    }

    this.donationObj.id = '';
    this.donationObj.donRestName = this.donRestName;
    this.donationObj.donRestEmail = this.donRestEmail;
    this.donationObj.donQuantity = this.donQuantity;

    this.service.addDonation(this.donationObj);
    this.resetForm();
  }

  resetForm(){
    this.id = '';
    this.donRestName = '';
    this.donRestEmail = '';
    this.donQuantity = '';
  }


  
}

