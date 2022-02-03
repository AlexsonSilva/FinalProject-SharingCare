import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {


  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    num: new FormControl('')
  })
  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
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
    
  }

  collectResto()
  {
    console.warn(this.addResto.value)
  }
}

