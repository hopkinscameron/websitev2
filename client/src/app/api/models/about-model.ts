/* tslint:disable */
import { FavoriteGameModel } from './favorite-game-model';
export interface AboutModel {
  bio: string;
  favoriteGames: Array<FavoriteGameModel>;
  hobbies: Array<string>;
}
