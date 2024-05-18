import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({ 
    providedIn: "root"
})
export class PostApiService {

    private httpClient = inject(HttpClient)

    getAllPosts() {
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
    }
    
    getPost(id: number | string) {
        return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/" + id)
    }
}