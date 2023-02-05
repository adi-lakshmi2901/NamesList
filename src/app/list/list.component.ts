import { NgClass } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  data:any=[];
  ind =1;
  constructor(private d:ListServiceService){}
  ngOnInit(){
    this.d.newData.subscribe( val => this.data = val);
    // this.data = this.data.filter(item => item != '');
  }
  delete(ind : number){
    this.data.splice(ind,1);
  }
}
