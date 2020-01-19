import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {grat } from '../models/grat'; 
import {mockGrats} from '../mockdata/mock-grats'

@Injectable({
  providedIn: 'root'
})
export class GratService {

  constructor() { }

  public getAllGrats(): Observable<grat[]> {
  
   return of(mockGrats); 
  }
}
