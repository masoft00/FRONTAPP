import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  LoginService: any;


  constructor(private logservice: LoginService) { }

  ngOnInit() {

  }

  isCaissier() {
    this.logservice.isCaissier();
  }

  isAdminSup() {
    this.logservice.isAdminSup();
  }
  isAdminPartenaire()  {
    this.logservice.isAdminPartenaire();
  }
   isUserPartenaire() {
    this.logservice.isUserPartenaire();
   }
   Authentification() {
    this.logservice.Authentification();
   }


}
