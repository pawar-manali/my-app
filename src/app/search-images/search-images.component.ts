import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.css']
})
export class SearchImagesComponent {
  data:any;
  constructor(private imageService: ImageService){}

getImgs(type:any,count:any){
  this.imageService.getData(type,count).subscribe((response)=>{
    console.log(response,'response')
    this.data=response.photos;
  })

  
}

}



