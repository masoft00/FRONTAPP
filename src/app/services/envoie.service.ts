import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvoieService {
 constructor(private http: HttpClient) { }
    postFile(
      nomCompleEnv: string,
      telenv: string,
      numpieceenv:string,
      typepieceenv:string,
      nomCompleBen:string,
      teleben:string,
      montant:string
    ) {
      
    const Headers  = {headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'))};
    const endpoint = 'http://localhost:8000/api/envoie';
    const formData : FormData= new FormData();
    formData.append('nomCompleEnv',nomCompleEnv);
    formData.append('telenv',telenv);
    formData.append('numpieceenv',numpieceenv);
    formData.append('typepieceenv',typepieceenv);
    formData.append('nomCompleBen',nomCompleBen);
    formData.append('teleben',teleben);
    formData.append('montant',montant);
    return this.http
      .post(endpoint, formData,Headers);
  }
  
}
