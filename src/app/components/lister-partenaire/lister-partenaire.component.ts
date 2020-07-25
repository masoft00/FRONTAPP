import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListerPartenaireService } from 'src/app/services/lister-partenaire.service';


export interface UserData {
  id        : string;
  prenom    : string;
  nom       : string;
  adresse   : string;
  telephone : string;
  email     : string;
  roles     : string;
  statut    : string;
 
}

@Component({
  selector: 'app-lister-partenaire',
  templateUrl: './lister-partenaire.component.html',
  styleUrls: ['./lister-partenaire.component.css']
})
export class ListerPartenaireComponent implements OnInit {
  displayedColumns: string[] = ['id', 'prenom', 'nom', 'adresse', 'email', 'telephone', 'roles','statut'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  Listepartenair: UserData[];
  lister: any;
  
  constructor(private Listepartenaire:ListerPartenaireService) { }
  partenaires;
  ngOnInit(): void{


    this.Listepartenaire.getlistepartenaires().subscribe(
      (Listepartenair: UserData[]) => {
        this.partenaires          = Listepartenair;    
        this.dataSource           = new MatTableDataSource(this.partenaires);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort      = this.sort;
     },err=>{
      console.log(err);
      })
   
}
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 isCaissier() {
    this.isCaissier();
  }

    getLogin() {
  return(localStorage.getItem('username'));
  }

}
