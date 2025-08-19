import {OriginPlanetModel} from './originPlanet.model';
import {TransformationsModel} from './transformations.model';

export interface CharacterItemModel {
  id: number;
  name: string;
  ki:string;
  maxKi :string;
  race:string;
  gender:string;
  description:string;
  image:string;
  affiliation:string;
  deltedAt:string;
  originPlanet?:OriginPlanetModel;
  transformations?: TransformationsModel[]
}
