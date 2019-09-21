import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AjouterCaissierService {
constructor(private http : HttpClient) { }

  postFile(
    username      : string,
    prenom        : string,
    nom           : string,
    adresse       : string,
    email         : string,
    telephone     : string,
    password      : string,
    fileToUpload  : File,
    ) {
      
    const Headers  = {headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'))};
    const endpoint = 'http://localhost:8000/api/AjouterCaissier';
    const formData : FormData= new FormData();
    formData.append('prenom',prenom);
    formData.append('nom', nom);
    formData.append('adresse', adresse);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('telephone', telephone);
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData,Headers);
  }
}
