import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  
  baseUrl = 'http://127.0.0.1:8000';

  constructor() {}
  getBaseUrl(): string {
    return this.baseUrl;
  }
}
