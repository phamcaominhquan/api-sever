import {CharacterModel} from '../../models/character.model';
import {CharacterItemModel} from '../../models/characterItem.model';

export interface CharacterState {
  characterList: CharacterModel
  characterById: CharacterItemModel
  isLoading: boolean
  error: any
}
