import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { AjouterPartenaireComponent } from './components/ajouter-partenaire/ajouter-partenaire.component';
import { ListerPartenaireComponent } from './components/lister-partenaire/lister-partenaire.component';
import { AjouterCaissierComponent } from './components/ajouter-caissier/ajouter-caissier.component';
import { AjouterCompteComponent } from './components/ajouter-compte/ajouter-compte.component';
import { DepotComponent } from './components/depot/depot.component';
import { EnvoieComponent } from './components/envoie/envoie.component';
import { RetraitComponent } from './components/retrait/retrait.component';
import { AjouterUtilisateurComponent } from './components/ajouter-utilisateur/ajouter-utilisateur.component';

const routes: Routes = [
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'ajouter_partenaire', component: AjouterPartenaireComponent },
  { path: 'lister_partenaire', component: ListerPartenaireComponent },
  { path: 'ajouter_caissier', component: AjouterCaissierComponent },
  { path: 'ajouter_compte', component: AjouterCompteComponent },
  { path: 'ajouter_utilisateur', component: AjouterUtilisateurComponent },
  { path: 'depot', component: DepotComponent },
  { path: 'envoie', component: EnvoieComponent },
  { path: 'retrait', component: RetraitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
