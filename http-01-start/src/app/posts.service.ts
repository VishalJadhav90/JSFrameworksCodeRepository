import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  errorMessage = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(postData: Post) {
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-242f1.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.errorMessage.next(error.message);
      });
  }

  fetchPosts() {
    return this.http
      .get<{[key: string]: Post}>(
        'https://ng-complete-guide-242f1.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello'}),
          responseType: 'json'
        }
      )
      .pipe(
        map(responseData => {
          console.log("before map: ",responseData)
          const postsData: Post[] = [];
          for (const key in responseData) {
            if(responseData.hasOwnProperty(key)) {
              postsData.push({...responseData[key], id: key});
            }
          }
          return postsData;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      )
  }

  clearPosts() {
    return this.http.delete('https://ng-complete-guide-242f1.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'json'
      }
    ).
    pipe(
      tap(event => {
        //console.log("clearPosts: ",event);
        if(event.type === HttpEventType.Response) {
          console.log("events", event.body);
        }
      })
    )
  }
}
