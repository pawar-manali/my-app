import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
@Input() giveMeData:any;

@Input() click=new EventEmitter();
triggerClickEvent(){ //doubt
  this.click.emit('Message Read')
}

  
  

}
