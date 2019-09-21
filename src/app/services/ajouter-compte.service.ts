import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjouterCompteService {

constructor(private http : HttpClient) { }

  postFile(
    partenaire      : string,
    ) {
      
    const Headers  = {headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'))};
    const endpoint = 'http://localhost:8000/api/ajouter/compte';
    const formData : FormData= new FormData();
    formData.append('partenaire',partenaire);
    return this.http
      .post(endpoint, formData,Headers);
  }
}
