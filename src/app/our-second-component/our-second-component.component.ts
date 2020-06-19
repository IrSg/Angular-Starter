import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-second-component',
  templateUrl: './our-second-component.component.html',
  styleUrls: ['./our-second-component.component.scss']
})

export class OurSecondComponentComponent implements OnInit {
  public helloVariable = 'Life is Great'

  constructor() { }

  ngOnInit() {
  	this.helloVariable = 'Life is supa dupa great'
    this.coolFunction()
  }

  coolFunction(){
  	//this function will now run when the page is initialized and when you click the button in the html
  	alert('you are now running a function')
  	this.helloVariable = 'It Worked! It Changed'
  }

}
