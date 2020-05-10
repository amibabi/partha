import { Component, OnInit } from '@angular/core';
import {HobbiService } from './../../service/hobbi.service';

@Component({
  selector: 'app-hobbi-list',
  templateUrl: './hobbi-list.component.html',
  styleUrls: ['./hobbi-list.component.css']
})

export class HobbiListComponent implements OnInit {
  
  Hobbis:any = [];

  constructor(private hobbiService: HobbiService) { 
    this.readHobbi();
  }

  ngOnInit() {}

  readHobbi(){
    this.hobbiService.getHobbies().subscribe((data) => {
     this.Hobbis = data;
    })    
  }

  removeHobbi(hobbi, index) {
    if(window.confirm('Are you sure?')) {
        this.hobbiService.deleteHobbi(hobbi._id).subscribe((data) => {
          this.Hobbis.splice(index, 1);
        }
      )    
    }
  }

  

}