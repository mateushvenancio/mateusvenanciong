import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProjetosService {

    private postsUrl = 'https://api.github.com/users/mateushvenancio/repos'

    constructor(private http: HttpClient) { }

    getProjetos() {
        return this.http.get(this.postsUrl)
    }
}
