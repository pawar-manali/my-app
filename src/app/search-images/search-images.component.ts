import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

const apiKey="Ch8A2GiNnYxaKUq1wPvqh5glj1pzpRAbuMdyEWtDXFtfVafz9yO0Zron";

const headerOptions=new HttpHeaders({
    'Authorization': apiKey
})
@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.css']
})
export class SearchImagesComponent {
data:any;
  constructor(private http: HttpClient){
    this.getData('nature',50).subscribe((response)=>{
      console.log(response,'response')
      this.data=response.photos;
    })
 
    
  }
getData(type:any,count:any):Observable<any>{
  let url= "https://api.pexels.com/v1/search?query="+type+"&per_page="+count;

return this.http.get(url,{headers:headerOptions})
}
getImgs(type:any,count:any){
  this.getData(type,count).subscribe((response)=>{
    console.log(response,'response')
    this.data=response.photos;
  })

  
}

}



