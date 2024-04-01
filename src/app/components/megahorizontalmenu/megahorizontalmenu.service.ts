// import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MegaMenuService {
  constructor(private http: HttpClient) {}
 
  getAll() {}
}


