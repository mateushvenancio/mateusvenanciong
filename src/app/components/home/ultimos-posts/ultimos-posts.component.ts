import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { DomSanitizer } from '@angular/platform-browser';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-ultimos-posts',
    templateUrl: './ultimos-posts.component.html',
    styleUrls: ['./ultimos-posts.component.css']
})
export class UltimosPostsComponent implements OnInit {

    posts: Post[] = [];
    faShare = faShare

    constructor(private service: PostsService, private ds: DomSanitizer) { }

    ngOnInit(): void {
        this.getPosts()
    }

    getPosts() {
        return this.service.getPosts().subscribe(
            result => {
                console.log(result['items'])

                result['items'].forEach(item => {
                    let _post = new Post()
                    _post.title = item['title']
                    _post.author = item['author']
                    _post.categories = item['categories']
                    _post.content = item['content']
                    _post.link = item['link']
                    _post.pubDate = item['pubDate']
                    _post.thumbnail = item['thumbnail']
                    this.posts.push(_post)
                    // console.log(this.posts)
                })
            }
        )
    }

    removeHtml(cont: string): string {
        return cont ? String(cont).replace(/<[^>]+>/gm, '') : '';
    }

}
