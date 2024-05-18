import { Component, OnInit, inject } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

type Post = {
  title: string,
  body: string
}

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent,HttpClientModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  
  private postsPerPage = 5;
  pages: number[] = [];
  posts = [];
  activePage = 0;

  currentPosts: Post[] = [];

  postService = inject(HttpClient);

  ngOnInit(): void {
    this.postService.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe((data: any) => {
      console.log(data)
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
