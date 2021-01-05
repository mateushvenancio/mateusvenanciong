import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Post } from '../models/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    posts: Post[];

    constructor(private db: AngularFirestore, private store: AngularFireStorage) {

    }

    getPosts() {
        return this.db.collection('posts').get()
    }

    getSinglePost(id: string) {
        return this.db.collection('posts').doc(id).get()
    }

    getMdPost(id: string) {
        return this.store.ref('/' + id + '/post.md').getDownloadURL()
    }
}
