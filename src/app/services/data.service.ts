import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _http: HttpClient) {
  }

  getRepos(value) {
    return this._http.get(`https://api.github.com/search/repositories?q=${value}&sort=stars&order=desc&limit=10`);
  }
  GetCities() {  
    return this._http.get('http://localhost:5000/cities');
    // return this._http.get<string>('http://localhost:5000/cities').subscribe(data => {
    //     console.log(data)
    // }, err => {console.log('Got error: ${err}')})
    //   {
    //   method: 'GET',333
    //   url: ''
    // }).then(function successCallback(response) {
    //     // this callback will be called asynchronously
    //     // when the response is available
    //   }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //   });
  }

  // getUsers() {
  //   return this._http.get(`https://jsonplaceholder.typicode.com/users`);
  // }
}

