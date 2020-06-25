import { Component, OnInit, OnDestroy } from '@angular/core';
import { AwesomeService } from '../../services/awesome.service' //import service
import { Subscription } from 'rxjs' //import subscription from rxjs
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-second-component',
  templateUrl: './our-second-component.component.html',
  styleUrls: ['./our-second-component.component.scss']
})

export class OurSecondComponentComponent implements OnInit, OnDestroy {
  public helloVariable = 'Life is Great'
  public showTheDiv: any
  public arrayItems: Array<any> = [];
  public coolMessage: string
  public getMessageSubscription: Subscription
  

  constructor(public awesomeService: AwesomeService, public router: Router) { } //load service and router

  ngOnInit() {
    console.log('the second component is initialized')
    this.getMessageSubscription = this.awesomeService.sendMessageFunction().subscribe(message => {
      //when awesome service sends out a message through its sendMessageFunction, receive it here, and take this action:
      console.log('received message')
      let displayMessage = message.text
      this.coolMessage = 'We got the message: ' + displayMessage
    })
  }

  ngOnDestroy(){
    this.getMessageSubscription.unsubscribe() //unsubscribe when leave component 
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

  routeToThirdComponent(){
    //navigate to third component
    this.router.navigate(['third'])
  }


}
