import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


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
  public host4: string  = 'http://localhost:8000/api/utilisateur_Bbloquer/id'
  constructor(private http: HttpClient) { }
  
  //methode qui me permet de lister les partenaires
  getlistepartenaires(){
     return this.http.get(this.host2,this.Headers);
  }

  //methode qui me permet de lister les partenaires

 
}
