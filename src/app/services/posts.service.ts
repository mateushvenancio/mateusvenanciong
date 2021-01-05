import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Post } from '../models/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    posts: Post[];

    constructor(private http: HttpClient) {

    }

    getPosts() {
        return this.http.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mateushvenancio')
    }

    removeHtml(cont: string): string {
        return cont ? String(cont).replace(/<[^>]+>/gm, '') : '';
    }
}
