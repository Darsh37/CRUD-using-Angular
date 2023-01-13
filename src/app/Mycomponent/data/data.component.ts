import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Sevice/data-service.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  users:User[];
  @Input()id:any;
    constructor(private dataservice : DataServiceService) {
  }
  @Input() searchId: any;
  
  ngOnInit () {}

  getUser(){
    this.dataservice.getUser().subscribe((data: User[])=>{
      this.users=data;
      console.log(data);
    });
  }
  getUserById(id: any){
    this.dataservice.getUsersById().subscribe((data:User[])=>{
       this.users.find(i => i.id === id);


    });
    
   
  }
}

