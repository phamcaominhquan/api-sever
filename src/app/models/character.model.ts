import {CharacterItemModel} from './characterItem.model';

export interface CharacterModel {
  items: CharacterItemModel[];
  meta:object;
  links:object;
}
