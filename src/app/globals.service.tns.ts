import { Injectable } from '@angular/core';
import { isAndroid } from 'tns-core-modules/platform';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  
  baseUrl = 'http://127.0.0.1:8000';

  constructor() {
    if (isAndroid) {
      this.baseUrl = 'http://10.0.2.2:8000';
    }
  }
  getBaseUrl(): string {
    return this.baseUrl;
  }
}
