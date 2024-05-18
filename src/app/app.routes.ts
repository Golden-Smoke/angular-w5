import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { AboutComponent } from './about/about.component';
import { PostDetailsComponent } from './post-details/post-details.component';

export const routes: Routes = [
    {path:'',title:'Home - JSONP_r',component: HomeComponent},
    {path:'posts',title:'Posts - JSONP_r',component: PostListComponent},
    {path:'posts/:id',title:'Post Details - JSONP_r',component: PostDetailsComponent},
    {path:'about',title:'About - JSONP_r',component: AboutComponent}
];
