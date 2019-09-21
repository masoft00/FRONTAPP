import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepotService {
constructor(private http: HttpClient) { }
   postFile(
    montant: string,
    compte: string,
    ) {
      
    const Headers  = {headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'))};
    const endpoint = 'http://localhost:8000/api/depot';
    const formData : FormData= new FormData();
    formData.append('montant',montant);
    formData.append('compte',compte);
    return this.http
      .post(endpoint, formData,Headers);
  }
}
