import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  petToEdit = {name:"", petType:"", description:"", skill1:"", skill2:"", skill3:""};
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router ) { }

  ngOnInit() {
    this._route.params.subscribe((params)=> {
      console.log('the id of the product is', params['id']);
      let obs = this._httpService.getPetById(params['id']);
      obs.subscribe((data:any)=> {
        console.log('data', data);
        this.petToEdit = data;
    })
  })
}
  updatePet(){
    console.log('updatePet', this.petToEdit);
    let obs = this._httpService.updatePetRequest(this.petToEdit);
    obs.subscribe((data:any)=>{
      console.log('got a response',data)
      if(!data.errors){
        this._router.navigate(['/pets']);
        //4. When the server responds, the component redirects to '/products'
      }
    })
  }
}
