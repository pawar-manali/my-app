import { Component } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-zoom-image',
  templateUrl: './zoom-image.component.html',
  styleUrls: ['./zoom-image.component.css']
})
export class ZoomImageComponent {
  constructor(public img:ImageService){
    
  }

}
