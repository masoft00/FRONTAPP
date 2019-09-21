import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
host1 = 'http://127.0.0.1:8000/api/login_check';
  jwt: string;
  username: string;
  roles: Array <string>;
  

  constructor(private http: HttpClient) { }
  login(data) {
    return this.http.post<any>(this.host1,data,{observe:'response'});
  }
    //CETTE METHODE ME PERTMET DE SAUVEGARGER LE TOKEN AU NIVEAU DE LOCAL STORAGE
  saveJwtToken(jwt: string) {
   
    localStorage.setItem('token', jwt);
    this.parsejwt(jwt);
       
    }
  
    //CETTE METHODE ME PERTMET DE DECODER LE TOKEN
  parsejwt(token: any) {
    let jwtHelper = new JwtHelperService();
    let objJWT    = jwtHelper.decodeToken(token);
   // console.log(objJWT);
    this.username = objJWT.username;
    this.roles    = objJWT.roles;
    localStorage.setItem('username', this.username);
    localStorage.setItem('roles', this.roles[0]);
  }
   

  //CETTE METHODE ME PERTMET DE VERIFIER SI L'UTILISATEUR EST UN ADMIN SUPERIEUR
  isAdminSup() {
    return this.roles.indexOf('ROLE_ADMIN_SUP')>=0;
  }

  //CETTE METHODE ME PERTMET DE VERIFIER SI L'UTILISATEUR EST UN CAISSIER
  isCaissier() {
   // return this.roles.indexOf('ROLE_CAISSIER') >=0;
   return localStorage.getItem('roles').indexOf('ROLE_CAISSIER') >=0;
  }

  //CETTE METHODE ME PERTMET DE VERIFIER SI L'UTILISATEUR EST UN ADMI PARTENAIRE
  isAdminPartenaire() {
    return this.roles.indexOf('ROLE_ADMIN_PARTENAIRE') >=0;
  }

  //CETTE METHODE ME PERTMET DE VERIFIER SI L'UTILISATEUR EST UN USER PARTENAIRE
  isUserPartenaire() {
    return this.roles.indexOf('ROLE_USER_PARTENAIRE') >=0;
  }

  //CETTE METHODE ME PERTMET DE VERIFIER SI L'UTILISATEUR S'EST CONNECTE
  Authentification() {
    return this.roles && (this.isAdminSup ||this.isAdminPartenaire ||this.isCaissier || this.isUserPartenaire);
  }



}
