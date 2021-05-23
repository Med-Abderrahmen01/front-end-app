import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../_services/product-service.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  addProd: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isShown:boolean = false;
  constructor(private productService:ProductServiceService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onSave(): void{
    this.productService.register(this.addProd).subscribe(
      data =>{
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.goToList();
      },
      err => {
        
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    )

  }
  goToList() {
    this.router.navigate(['/add-product']);
  }

}
