import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {

  data: string[]= ['a', 'b', 'c', 'd'];
  constructor() {

  }

  getData() {
    return this.data;
  }

}
