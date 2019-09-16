import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newPet: any;
  errors= [];
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newPet = {name:"", petType:"", description:"", skill:""}
    // this._httpService.allRides().subscribe((data:any)=> console.log(data));      
  }

  addPet(){
    let obs = this._httpService.createPet(this.newPet)
    obs.subscribe(data =>{
      if(data['errors']){
        for(var key in data['errors']){
          // console.log(data['errors'][key]['message']);
          this.errors.push(data['errors'][key]['message'])
        }
      }else{
        this.newPet = {name:"", petType:"", description:""}
        this._router.navigate(['/pets'])
      }
    })
  }


}
