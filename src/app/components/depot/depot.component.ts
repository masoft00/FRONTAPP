import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepotService } from '../../services/depot.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
 constructor(private depot: DepotService, private router: Router) { }

  ngOnInit() {
  }
  OnSubmit(f) {
    this.depot.postFile(
      f.value['montant'],
      f.value['compte'],
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
