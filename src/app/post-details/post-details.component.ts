import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostApiService } from '../services/post.api';
import { Post } from '../post-list/post-list.component';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent implements OnInit {

  route: ActivatedRoute = inject(ActivatedRoute);
  postService = inject(PostApiService)

  id = this.route.snapshot.params['id'];
  postData: Post = {id:'',title:'',body:''};

  ngOnInit(): void {
    this.postService.getPost(this.id)
    .subscribe((data: any) => this.postData = data)
  }
}
