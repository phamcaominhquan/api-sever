import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharacterModel} from '../../models/character.model';
import {CharacterItemModel} from '../../models/characterItem.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {

  }

  getAllCharacter(){
    return this.http.get<CharacterModel>('https://dragonball-api.com/api/characters?page1&limit=100')
  }

  getCharacterById(id: string){
    return this.http.get<CharacterItemModel>(`https://dragonball-api.com/api/characters/${id}`)
  }
}
