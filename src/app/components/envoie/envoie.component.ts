import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EnvoieService } from '../../services/envoie.service';

@Component({
  selector: 'app-envoie',
  templateUrl: './envoie.component.html',
  styleUrls: ['./envoie.component.css']
})
export class EnvoieComponent implements OnInit {
 constructor(private envoie: EnvoieService, private router: Router) { }

    ngOnInit() {
  }
  OnSubmit(f) {
    this.envoie.postFile(
      f.value['nomCompleEnv'],
      f.value['telenv'],
      f.value['numpieceenv'],
      f.value['typepieceenv'],
      f.value['nomCompleBen'],
      f.value['teleben'],
      f.value['montant'],
    ).subscribe(
      data => {
        //this.router.navigate(['/ListeComptes']);
      }
    );
  }

   Envoyer() {
     Swal.fire(
       "Votre Envoie a ete fait avec success !",
    )
   }
   isCaissier() {
    this.isCaissier();
  }
}
