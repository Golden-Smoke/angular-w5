import { Component, OnInit, inject } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostApiService } from '../services/post.api';

export type Post = {
  id: number | string,
  title: string,
  body: string
}

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  
  private postsPerPage = 5;
  pages: number[] = [];
  posts = [];
  activePage = 0;

  currentPosts: Post[] = [];

  postService = inject(PostApiService);

  ngOnInit(): void {
    this.postService.getAllPosts()
    .subscribe((data: any) => {
      
       this.posts = data;
       this.pages = Array(Math.floor(this.posts.length / this.postsPerPage))
                    .fill(1);

       this.setCurrentPosts()
      })
  }

  setActivePage(index: number) {
    this.activePage = index
    this.setCurrentPosts()
  }

  setCurrentPosts() {
    const startIndex = this.activePage * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    this.currentPosts = this.posts.slice(startIndex,endIndex)
  }

}
