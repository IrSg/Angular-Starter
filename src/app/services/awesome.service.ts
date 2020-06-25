import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs' //import Observable and Subject from rxjs

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  private sendMessageSubject = new Subject<any>()

  constructor() { }

  setMessage(message){  //1. get message from amazing first component
  	this.sendMessageSubject.next({ text: message }) //2. send message to the sendMessageFunction
  }

  sendMessageFunction(): Observable<any>{ //3. get message from setMessage
  	return this.sendMessageSubject.asObservable() //4. send message to any component that is subscribing to sendMessageSubject
  }

}
