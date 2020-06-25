import { Component, OnInit } from '@angular/core';
import { AwesomeService } from '../../services/awesome.service'  //note this is how I import Awesome Service

@Component({
  selector: 'app-amazing-first-component',
  templateUrl: './amazing-first-component.component.html',
  styleUrls: ['./amazing-first-component.component.scss']
})
export class AmazingFirstComponentComponent implements OnInit {


  constructor(public awesomeService: AwesomeService) {  //note: here, in the constructor, is where I create the reference to the service
  }

  ngOnInit() {
  }

  talkToComponent2(){
    let message = 'button from first component has been clicked!'
    this.awesomeService.setMessage(message) //send the message to the service
  }

}
