import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListerPartenaireService {

  id: number;
  prenom: string;
  nom: string;
  adresse: string;
  

  Headers = {headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'))}
  public host2: string  = 'http://127.0.0.1:8000/api/lister_utilisateur'
  constructor(private http: HttpClient) { }
  
  //methode qui me permet de lister les partenaires
  getlistepartenaires(){
     return this.http.get(this.host2,this.Headers);
  }
}
