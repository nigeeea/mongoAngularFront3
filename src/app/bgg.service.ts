import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import{Subject, firstValueFrom} from 'rxjs'
import { Game } from './models'

const BACKEND = 'http://localhost:8085';

@Injectable()
export class BGGService{

    onSearchResults = new Subject<Game>()

    onOffsetLimitSearchResults = new Subject<Game[]>()

    constructor(private http: HttpClient){}

    searchGameById(gameId: string): Promise<Game> {
    
        const params = new HttpParams().set("gameId", gameId)
    
        return firstValueFrom(
          this.http.get<Game>(`${BACKEND}/api/id`, { params })
        ).then(results => {
          this.onSearchResults.next(results)
          return results;
        })
    
      }

      searchGamesWithOffsetAndLimit(offset: string, limit: string): Promise<Game[]>{

        const params = new HttpParams().set("offset", offset).set("limit", limit)

        return firstValueFrom(
          this.http.get<Game[]>(`${BACKEND}/api/aFewGames`, { params })
        ).then(results =>
          {
            this.onOffsetLimitSearchResults.next(results);
            return results;
          }
          
        )
      }


}


