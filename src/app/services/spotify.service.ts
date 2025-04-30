import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public http: HttpClient) { }

  searchTrack(query: string) {
    let params: string = [
    `q=${query}`,
    `type=track`
    ].join("&");
     let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.request(queryURL:string);
    }

}
