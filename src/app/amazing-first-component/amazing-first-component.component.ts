import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazing-first-component',
  templateUrl: './amazing-first-component.component.html',
  styleUrls: ['./amazing-first-component.component.scss']
})
export class AmazingFirstComponentComponent implements OnInit {
  //add router

  //add component within another component (ex--mission component, go/game-session and vimeo component)

  //add service to coordinate and house the information

  public firstVar = 'Hi, I am a variable'

  constructor() { }

  ngOnInit() {
  }

  talkToComponent2(){
    //call the service.
  }

}
