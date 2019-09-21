import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjouterPartenaireService } from 'src/app/services/ajouter-partenaire.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajouter-partenaire',
  templateUrl: './ajouter-partenaire.component.html',
  styleUrls: ['./ajouter-partenaire.component.css']
})
export class AjouterPartenaireComponent implements OnInit {
imageUrl: string = "/assets/Images/user.png";
  fileToUpload: File = null;
  constructor(private ajoutpartService : AjouterPartenaireService,private router:Router) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    
    reader.onload=(event:any)=> {this.imageUrl=event.target.result}
    reader.readAsDataURL(this.fileToUpload);
  }

    OnSubmit(username,prenom,nom,image,adresse,email,telephone,raisonSociale,ninea,password){
   this.ajoutpartService.postFile(
     username.value,
     prenom.value,
     nom.value,
     adresse.value,
     email.value,
     telephone.value,
     raisonSociale.value,
     ninea.value,
     password.value,
     this.fileToUpload).subscribe(
     data =>{
    prenom        = null; 
    nom           = null;
    adresse       = null;
    username      = null;
    password      = null;
    email         = null;
    raisonSociale = null;
    ninea         = null;
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
  image() {
    Swal.fire({
  title: 'Sweet!',
  text: 'Modal with a custom image.',
  imageUrl: 'https://unsplash.it/400/200',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  animation: false
})
  }

   isCaissier() {
    this.isCaissier();
  }

}
