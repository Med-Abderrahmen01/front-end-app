import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { SerLivraisonService } from '../_services/ser-livraison.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  isShown:boolean = false;

  lists: any = [];
  content: string;

  constructor(private userService: UserService,
              private serLivraisonService:SerLivraisonService,
              private http:HttpClient,
              private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.onGetAll()
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  onGetAll(){
    //if(!this.authService.login)
    //this.router.navigateByUrl('/login');
  this.lists=this.serLivraisonService.getService().subscribe(
    Response=>{
      console.log(Response);
      this.lists=Response
    });
 } 

 onDelete(id){
   let D=confirm("voulez vous supprime ?")
   if(D==true)
   console.log(id)
  this.serLivraisonService.remove(id).subscribe(
       Response=>{
         this.onGetAll()
         console.log(Response)
       })
      
  return "success del";
 }
 onEdit(id:number){
   this.router.navigate(['editSer',id])
 }

 onGetAllProduct(){
  this.router.navigateByUrl('/add-product');
 }

}
