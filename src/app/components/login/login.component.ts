import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal  from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private LogService:LoginService, private router:Router) { }

  ngOnInit() {
  }
  //Cette methode me permet de se connecter vers mon API
  onLogin(data) {
    this.LogService.login(data)
      .subscribe(resp => {
        // tslint:disable-next-line: typedef-whitespace
        const jwt = resp.body.token;
        console.log(jwt);
        this.LogService.saveJwtToken(jwt);
        //ce bout de code me permet de faire une redirection
        this.router.navigateByUrl('/menu');

        const Toast = Swal.mixin({
          toast            : true,
          position         : 'top-end',
          showConfirmButton: false,
          timer            : 3000
        })
        Toast.fire({
          type : 'success'               ,
          title: 'Signed in successfully'
        })
      
      }, err => {
      
      });
  }

    getLogin() {
  return(localStorage.getItem('username'));
  }
}
