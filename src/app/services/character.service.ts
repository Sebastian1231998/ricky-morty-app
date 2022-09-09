import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }

  getCharacters(pagination:number){
    return this.http.get(`${environment.character_api}/character?page=${pagination}`)
  }
}
