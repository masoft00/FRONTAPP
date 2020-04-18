import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AjouterCompteService } from 'src/app/services/ajouter-compte.service';

@Component({
  selector: 'app-ajouter-compte',
  templateUrl: './ajouter-compte.component.html',
  styleUrls: ['./ajouter-compte.component.css']
})
export class AjouterCompteComponent implements OnInit {

  constructor(private ajoutpartService : AjouterCompteService,private router:Router) { }

  ngOnInit() {
  }

    OnSubmit(f){
   this.ajoutpartService.postFile(
     f.value['partenaire'],
    ).subscribe(
     data =>{
    this.router.navigate(['/ListeComptes']);
     }
   );
    // const partenaire = form.value['partenaire'];
    //   this.ajoutpartService.postFile(form.value['partenaire']).subscribe(
    //     partenaire
    //   )    
}
 isCaissier() {
    this.isCaissier();
 }
    getLogin() {
  return(localStorage.getItem('username'));
    }
   Envoyer() {
     Swal.fire(
       "Compte ajouté avec success !",
    )
   }
}
