import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    posts: Post[] = [];

    constructor(private service: PostsService) { }

    ngOnInit(): void {
        this.getPosts()
    }

    getPosts() {
        this.service.getPosts().subscribe(
            resp => {
                resp['items'].forEach(item => {
                    let _post = new Post()
                    _post.title = item['title']
                    _post.author = item['author']
                    _post.categories = item['categories']
                    _post.content = item['content']
                    _post.link = item['link']
                    _post.pubDate = item['pubDate']
                    _post.thumbnail = item['thumbnail']
                    this.posts.push(_post)
                })
            }
        )
    }

    removeHtml(old: string): string {
        return this.service.removeHtml(old)
    }

}
