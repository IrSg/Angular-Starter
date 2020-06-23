import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-second-component',
  templateUrl: './our-second-component.component.html',
  styleUrls: ['./our-second-component.component.scss']
})

export class OurSecondComponentComponent implements OnInit {
  public helloVariable = 'Life is Great'
  public showTheDiv: any
  public arrayItems: Array<any> = [];



  constructor() { }

  ngOnInit() {
    console.log('the second component is initialized')
  }

  coolFunction(){
  	//this function will now run when the page is initialized and when you click the button in the html
  	this.helloVariable = 'It Worked! It Changed'
  }

  showDivFunc(){
    if (this.showTheDiv === 'show it!'){
      this.showTheDiv = "hide it!"
    } else {
      this.showTheDiv = 'show it!'
    }    
  }

  showArrayFunc(){
    this.arrayItems = ['hello', 'here', 'is', 'an', 'array']
    this.anotherGreatFunc()
  }

  anotherGreatFunc(){
    console.log('great job!')
  }


}
