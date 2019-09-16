import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  pet: any;
  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(data=> {
      this.getPet(data['id']);
    });
  }
  getPet(p_id){
    this._http.singlePet(p_id).subscribe(data=>{
      this.pet = data;
      console.log(data);
    })
  }

  adoptPet(p_id){
    let obs = this._http.deletePet(p_id)
    obs.subscribe(data=>{
      if(data['errors']){
        console.log('errors')
      }else{
      this.pet = data;
      this._router.navigate(['/pets'])
      }
    })
  }
}
