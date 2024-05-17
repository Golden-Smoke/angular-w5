import { Component, OnInit, inject } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent,HttpClientModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {

  postsPerPage = 10;
  pages: number = 0;
  posts = [];
  activePage = 0;

  postService = inject(HttpClient);

  ngOnInit(): void {
    this.postService.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe((data: any) => {
       this.posts = data;
       this.pages = this.posts.length / this.postsPerPage;
      })
  }

}
