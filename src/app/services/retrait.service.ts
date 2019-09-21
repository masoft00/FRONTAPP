import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetraitService {
constructor(private http: HttpClient) { }
   postFile(
    code: string,
    numpieceben: string,
    typepieceben: string,
    ) {
      
    const Headers  = {headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'))};
    const endpoint = 'http://localhost:8000/api/retrait';
    const formData : FormData= new FormData();
    formData.append('code',code);
    formData.append('numpieceben',numpieceben);
    formData.append('typepieceben',typepieceben);
    return this.http
      .post(endpoint, formData,Headers);
  }
}
