import {createAction, props} from '@ngrx/store';
import {CharacterModel} from '../../models/character.model';
import {CharacterItemModel} from '../../models/characterItem.model';

export const getAllCharacters = createAction(
  'getAllCharacter',
)

export  const getAllCharactersSuccess= createAction(
  'getAllCharacters Success', props<{characterList: CharacterModel}>()
)
export const getAllCharactersFailure= createAction(
  'getAllCharacters Failure', props<{error: any}>()
)

export const getCharacterById= createAction(
  'getCharacterById', props<{id: string}>()
)

export const getCharacterByIdSuccess= createAction(
  'getCharacterByIdSuccess', props<{characterById: CharacterItemModel}>()
)

export const getCharacterByIdFailure= createAction(
  'getCharacterByIdFailure', props<{error: any}>()
)
