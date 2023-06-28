import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiKey="Ch8A2GiNnYxaKUq1wPvqh5glj1pzpRAbuMdyEWtDXFtfVafz9yO0Zron";
const headerOptions=new HttpHeaders({
    'Authorization': apiKey
})

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public selectedImge = '';
  constructor(private http: HttpClient) { }

  getData(type:any,count:any):Observable<any>{
    let url= "https://api.pexels.com/v1/search?query="+type+"&per_page="+count;
    return this.http.get(url,{headers:headerOptions})
  }
}
