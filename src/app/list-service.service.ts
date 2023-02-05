import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  private data = new BehaviorSubject<any>(null);
  newData = this.data.asObservable();
  constructor() { }
  func( x:any){
    this.data.next(x);
  }
}
