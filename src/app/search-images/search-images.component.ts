import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.css']
})
export class SearchImagesComponent {
  data:any;
  constructor(public imageService: ImageService,private rout:Router){
    
      this.imageService.getData('dog',50).subscribe((response)=>{
        console.log(response,'response')
        this.data=response.photos;
      })
    
  }

    getImgs(type:any,count:any){
      this.imageService.getData(type,count).subscribe((response)=>{
        console.log(response,'response')
        this.data=response.photos;
      })
    }

    navigateToImage(){
      this.rout.navigateByUrl('Zoom-Image')
    }
}



