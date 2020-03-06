import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://mean-iecommerce.herokuapp.com/api/products');
  }

  deleteData(deleteid) {
    return this.http.delete('https://mean-iecommerce.herokuapp.com/api/products/' + deleteid);
  }

  addData(newproductData){
  console.log("adddataaaaaaaaaaaaaaaaaaaaaaaaaaaaa servise" , newproductData )
  // let add = newproductData;
  //   console.log("adddatas" , adtas)
  return this.http.post('https://mean-iecommerce.herokuapp.com/api/products' ,  newproductData);
  }

}
