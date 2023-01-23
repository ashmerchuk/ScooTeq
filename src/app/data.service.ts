import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data = new Map<string, any>();

  setData(key:string, value: any){
   this.data.set(key,value)
  }

  getData(key: string ){
    return this.data.get(key)
}

}
