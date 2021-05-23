import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { ProductServiceService } from '../_services/product-service.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProd: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isShown:boolean = false;

  lists: any = [];
  content: string;
  constructor( private authService:AuthService,
               private router:Router,
               private userService: UserService,
               private productService:ProductServiceService,
               private http:HttpClient) { }

  ngOnInit(): void {
    this.onGetAll()
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
        console.log(data)
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  onGetAll(){
      this.lists=this.productService.getService().subscribe(
    Response=>{
      this.lists=Response
      console.log(Response[3]);

    });
 } 
 

}
