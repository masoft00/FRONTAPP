import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjouterCaissierService } from 'src/app/services/ajouter-caissier.service';

@Component({
  selector: 'app-ajouter-caissier',
  templateUrl: './ajouter-caissier.component.html',
  styleUrls: ['./ajouter-caissier.component.css']
})
export class AjouterCaissierComponent implements OnInit {
imageUrl: string = "/assets/Images/user.png";
  fileToUpload: File = null;
  constructor(private ajoutCaissierService : AjouterCaissierService,private router:Router) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    //Show image preview
    var reader=new FileReader();
    
    reader.onload=(event:any)=> {
      this.imageUrl=event.target.result;
    }

    reader.readAsDataURL(this.fileToUpload);
  }

   OnSubmit(username,prenom,nom,image,adresse,email,telephone,password){
   this.ajoutCaissierService .postFile(
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
    //this.router.navigateByUrl('/listepartenaire');
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
