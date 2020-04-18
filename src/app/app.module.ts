import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from './material/material.module';
import { AjouterPartenaireComponent } from './components/ajouter-partenaire/ajouter-partenaire.component';
import { ListerPartenaireComponent } from './components/lister-partenaire/lister-partenaire.component';
import { AjouterCaissierComponent } from './components/ajouter-caissier/ajouter-caissier.component';
import { AjouterCompteComponent } from './components/ajouter-compte/ajouter-compte.component';
import { DepotComponent } from './components/depot/depot.component';
import { EnvoieComponent } from './components/envoie/envoie.component';
import { RetraitComponent } from './components/retrait/retrait.component';
import { AjouterUtilisateurComponent } from './components/ajouter-utilisateur/ajouter-utilisateur.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    AjouterPartenaireComponent,
    ListerPartenaireComponent,
    AjouterCaissierComponent,
    AjouterCompteComponent,
    DepotComponent,
    EnvoieComponent,
    RetraitComponent,
    AjouterUtilisateurComponent,
    NavComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
