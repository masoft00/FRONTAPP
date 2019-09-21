import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent implements OnInit {
imageUrl: string = "/assets/Images/user.png";
  fileToUpload: File = null;
  constructor(private ajoutpartUser : UtilisateurService,private router:Router) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    
    reader.onload=(event:any)=> {this.imageUrl=event.target.result}
    reader.readAsDataURL(this.fileToUpload);
  }

    OnSubmit(username,prenom,nom,image,adresse,email,telephone,password){
   this.ajoutpartUser.postFile(
     username.value,
     prenom.value,
     nom.value,
     adresse.value,
     email.value,
     telephone.value,
     password.value,
     this.fileToUpload).subscribe(
     data =>{
    prenom        = null; 
    nom           = null;
    adresse       = null;
    username      = null;
    password      = null;
    email         = null;
    telephone     = null;
    image         = null;
    this.imageUrl = "/assets/Images/user.png";
    //this.router.navigateByUrl('/ListePartenaire');
     }
   );
    }
  
  AjouterPartenaire() {
      Swal.fire(
      "Vous venez d'ajouter un nouveau d'utilisateur !",
      'Ok'
    )
  }
   isCaissier() {
    this.isCaissier();
   }
    getLogin() {
  return(localStorage.getItem('username'));
  }
}
