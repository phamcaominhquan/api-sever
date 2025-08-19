import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {CharacterService} from '../../services/character/character.service';
import * as CharacterActions from '../actions/character.action'
import {catchError, map, of, switchMap} from 'rxjs';

export const CharacterEffect= createEffect(
  (action$=inject(Actions),characterService=inject(CharacterService))=> {
    return action$.pipe(
      ofType(CharacterActions.getAllCharacters),
      switchMap(()=>
        characterService.getAllCharacter().pipe(
          map((character)=>CharacterActions.getAllCharactersSuccess({characterList: character})),
    catchError((error:{error:any})=>
    of(CharacterActions.getAllCharactersFailure({error:error}))
    )
        )
      )
    )

  },
  {functional: true}
)

export const CharacterByIdEffect = createEffect(
  (action$=inject(Actions), characterService=inject(CharacterService))=>{
    return action$.pipe(
      ofType(CharacterActions.getCharacterById),
      switchMap((action)=>
      characterService.getCharacterById(action.id).pipe(
        map((character)=>CharacterActions.getCharacterByIdSuccess({characterById: character})),
        catchError((error:{error:any})=>
        of(CharacterActions.getCharacterByIdFailure({error:error}))
      )
      )
    )
    )
  },
  {functional: true}
)
