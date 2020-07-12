import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  errorSubscription: Subscription = null;
  error = null;
  loadedPosts = [];
  isFetching = false;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.errorSubscription = this.postsService.errorMessage.subscribe(error => {
      this.error = error;
    });
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData);
    this.fetchPosts();
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.postsService.clearPosts().subscribe(res=> {
      console.log('deleted successfully', res);
      this.loadedPosts = [];
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  private sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    });
  }

  private async fetchPosts() {
    //await this.sleep(10000).then(()=>{})
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts=posts;
      this.isFetching = false;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }
}
