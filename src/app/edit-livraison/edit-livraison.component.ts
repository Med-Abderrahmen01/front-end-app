import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerLivraisonService } from '../_services/ser-livraison.service';



@Component({
  selector: 'app-edit-livraison',
  templateUrl: './edit-livraison.component.html',
  styleUrls: ['./edit-livraison.component.css']
})
export class EditLivraisonComponent implements OnInit {
  service:[];
          
  id: number;
  isSuccessful = false;
  constructor(private route: ActivatedRoute,private router: Router,
              private serLivraisonService:SerLivraisonService) { }

  ngOnInit(): void {
  

    this.id = this.route.snapshot.params['id'];
    
    this.serLivraisonService.findServiceId(this.id)
    
    this.serLivraisonService.findServiceId(this.id)
      .subscribe(data => {
        console.log(data)
        this.service = data;
      }, error => console.log(error));

  }
  
  updateSer() {
    this.serLivraisonService.updateService(this.id, this.service)
      .subscribe(data => {
        console.log(data);
        //this.service = new this.service();
        this.goToList();
      }, error => console.log(error));
  }
  onSave() {
    this.updateSer();    
  }

  goToList() {
    this.router.navigate(['/admin']);
  }

  

}
