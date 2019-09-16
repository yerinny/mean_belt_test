import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  allPets(){
    return this._http.get('/api/pets');
  }

  createPet(newPet: any){
    return this._http.post('/api/pets', newPet)
  }

  getPetById(id){
    return this._http.get('/api/pets/'+id);
  }

  updatePetRequest(petObj){
    console.log('updatePetRequest')
    return this._http.post('/api/pets/'+petObj._id+'/update', petObj);
  }

  singlePet(id: string){
    return this._http.get(`/api/pets/${id}`)
  }

  deletePet(id: string){
    return this._http.delete(`/api/pets/${id}/`)
  }
}
