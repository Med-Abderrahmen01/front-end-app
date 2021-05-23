import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { SerLivraisonComponent } from './ser-livraison/ser-livraison.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditLivraisonComponent } from './edit-livraison/edit-livraison.component';
import { FooterComponent } from './footer/footer.component';
import { AddProductComponent} from './add-product/add-product.component';
import { NewProductComponent} from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SerSocieteComponent } from './ser-societe/ser-societe.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    SerLivraisonComponent,
    EditLivraisonComponent,
    FooterComponent,
    AddProductComponent,
    NewProductComponent,
    EditProductComponent,
    SerSocieteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
