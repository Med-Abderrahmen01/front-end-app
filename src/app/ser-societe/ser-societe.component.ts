import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { LivSocieteService } from '../_services/liv-societe.service';


@Component({
  selector: 'app-ser-societe',
  templateUrl: './ser-societe.component.html',
  styleUrls: ['./ser-societe.component.css']
})
export class SerSocieteComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private livSocieteService:LivSocieteService, 
              private authService:AuthService,
              private router:Router ) { }

  ngOnInit(): void {
  }
  onCommand(): void {
    this.livSocieteService.register(this.form).subscribe(
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
