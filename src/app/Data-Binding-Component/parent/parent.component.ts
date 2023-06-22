import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  constructor(){}
  
    myName=''
    sendDataToChild(data:any){
      this.myName=data.value;
    }
    getDataFormChild(data:any){
      console.log(data)
    }
  }
  



