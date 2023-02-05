import { Component, ViewChild } from '@angular/core';
import {InputEleComponent} from './input-ele/input-ele.component'
import {ListServiceService} from '../list-service.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  
  constructor(private d : ListServiceService){}  
  
  empty:any='';
  name="Name";
  descr="Description";
  
  nm :any ='';
  ds : any = '';
  arr :object[]=[];
  subarr :string[]=[];
  addfun(){
    let a = this.nm;
    let b = this.ds;
    this.subarr=[a,b];
    if(a!='' && a!=' '){
    this.arr.push(this.subarr);
    }
    this.d.func(this.arr);
    this.subarr=[];
    this.nm=' ';
    this.ds=' ';
  }
  handleName(event : any){
    this.nm = event;
    // console.log("handle name");
  }
  handleDescr(event: any){
    this.ds = event;
  }
  
  
}
