import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class TodoService {

  apiUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) {
  }

  getTodos() {
    return this.http.get(this.apiUrl);
  }
}
