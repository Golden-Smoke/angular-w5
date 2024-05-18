import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  @Input({required: true}) postId: number | string = '';
  @Input({required: true}) postTitle: string = '';
  @Input({required: true}) postBody: string = '';
}
