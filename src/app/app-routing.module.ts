import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { SerLivraisonComponent } from './ser-livraison/ser-livraison.component';
import { EditLivraisonComponent } from './edit-livraison/edit-livraison.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { SerSocieteComponent } from './ser-societe/ser-societe.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'ser-livraison', component: SerLivraisonComponent },
  { path: 'editSer/:id', component: EditLivraisonComponent},
  { path: 'add-product', component: AddProductComponent  },
  { path: 'new-product', component: NewProductComponent },
  { path: 'ser-societe', component: SerSocieteComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
