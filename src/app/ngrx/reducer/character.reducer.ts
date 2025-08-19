import {CharacterState} from '../state/character.state';
import {createReducer, on} from '@ngrx/store';
import * as CharacterActions from '../actions/character.action'
import {CharacterItemModel} from '../../models/characterItem.model';

export const initialState: CharacterState = {
  characterList: {
    items: [],
    meta: {},
    links: {}
  },
  characterById: <CharacterItemModel>{},
  error: null,
  isLoading: false,
}

export const characterReducer = createReducer(
  initialState,
  on(CharacterActions.getAllCharacters, (state, {type})=>{
    return {
      ...state,
      error:null,
      isLoading: true,
    }
  }),

  on(CharacterActions.getAllCharactersSuccess, (state, {characterList, type})=>{
    console.log(type);
    return {
      ...state,
      characterList: characterList,
      isLoading: false,
    };
  }),

  on(CharacterActions.getAllCharactersFailure, (state, {error,type})=>{
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error,
    }
  }),
  on(CharacterActions.getCharacterById, (state, {id, type})=>{
    console.log(type);
    return {
      ...state,
      error: null,
      isLoading: true,
    }
  }),
  on(CharacterActions.getCharacterByIdSuccess, (state, {characterById, type})=>{
    console.log(type);
    return {
      ...state,
      characterById: characterById,
      isLoading: false,
    }
  }),
  on(CharacterActions.getCharacterByIdFailure, (state, {error, type})=>{
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error,
    }
  })



)
