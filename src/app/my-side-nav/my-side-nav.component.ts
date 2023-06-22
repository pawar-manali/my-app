import { Component } from '@angular/core';

@Component({
  selector: 'app-my-side-nav',
  templateUrl: './my-side-nav.component.html',
  styleUrls: ['./my-side-nav.component.css']
})
export class MySideNavComponent {
  menuItems=[
    {name:'HOME',icon:'fa fa-home'},
    {name:'PRODUCTS',icon:'fa fa-cog'},
    {name:'GALLERY',icon:'fa fa-picture'},
    {name:'ABOUT US',icon:'fa fa-users'},
    {name:'LOGIN'}
  ]
  arr=[222,'222',22,'Shiva']
  isMenuOpen:boolean;
  constructor(){
    this.isMenuOpen=false;
  }
  toogleMenu(){
    this.isMenuOpen=!this.isMenuOpen;    ///if toogle is true then it will be visible in console & if it becomes false it disappers from console
  }
  addMenu(){
    this.menuItems.push({name:'shop'})
  }

}
