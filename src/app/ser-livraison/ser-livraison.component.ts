import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { SerLivraisonService } from '../_services/ser-livraison.service';


@Component({
  selector: 'app-ser-livraison',
  templateUrl: './ser-livraison.component.html',
  styleUrls: ['./ser-livraison.component.css']
})
export class SerLivraisonComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private serLivraisonService: SerLivraisonService,
              private authService:AuthService,
              private router:Router ) { }

  ngOnInit(): void {
    if(!this.authService.login)
    this.router.navigateByUrl('/login');
    else 
      this.router.navigateByUrl('/ser-livraison');

    // this.caddy=this.caddyService.getCaddy();
    // console.log(this.caddy);
  }

  onCommand(): void {
    this.serLivraisonService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
