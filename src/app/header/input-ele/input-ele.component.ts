import { outputAst } from '@angular/compiler';
import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-ele',
  templateUrl: './input-ele.component.html',
  styleUrls: ['./input-ele.component.css']
})
export class InputEleComponent {
  @Input() placeholder : string ='';
  @Output() x = new EventEmitter<string>();
  
  update(event:any){
    
    this.x.emit(event.target.value);
  }
  
 
  
}
