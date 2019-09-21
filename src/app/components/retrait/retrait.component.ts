import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RetraitService } from '../../services/retrait.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {

 constructor(private retrait: RetraitService, private router: Router) { }

  ngOnInit() {
  }
  OnSubmit(f) {
    this.retrait.postFile(
      f.value['code'],
      f.value['numpieceben'],
      f.value['typepieceben']
    ).subscribe(
      data => {
        //this.router.navigate(['/ListeComptes']);
      }
    );
  }
 isCaissier() {
    this.isCaissier();
 }
  
    getLogin() {
  return(localStorage.getItem('username'));
  }
  
}
