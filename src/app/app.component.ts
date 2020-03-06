import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../app/service/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

productList :any;

constructor(private info : DataService) { }

ngOnInit() {
  let getdata = this.info.getData();
  getdata.subscribe((data)=>{
  this.productList = data;
  console.log("got the response")
  });
}


Nid;
Nname;
Ncategory;
Nsize;
index;
// productList = [{ name : "chudi Material", category : "Material", size : "30"},
//               { name : "Saree Material", category : "ReadyMade", size : "40"} ];
    
onClick(i){
  // console.log(i,"i")
  this.index = i;
  this.Nid = this.productList[i]._id;
  this.Nname = this.productList[i].name;
  this.Ncategory = this.productList[i].category;
  this.Nsize = this.productList[i].size;
}

onAdd(){
  // console.log("serverdata" , this.productList)
  console.log("lengthnm" , this.Nname.length >0 && this.Ncategory.length >0 && this.Nsize.toString().length>0 )
  if(this.Nname.length >0 && this.Ncategory.length >0 && this.Nsize.toString().length>0){
    let newProduct = {
      name : this.Nname,
      category : this.Ncategory,
      size : this.Nsize
    }
    var newproductData = JSON.stringify(newProduct)
    var addData = this.info.addData(newproductData)
    addData.subscribe((addata)=>{
    console.log("addataaaaaaa compots" , addata)
    location.reload();
    });
  }
  
  //     this.productList.push(newProduct)
  //     this.Nname='';
  //     this.Ncategory='';
  //     this.Nsize='';
  // }
  }
onDelete(){
  // console.log(this.productList[0]._id , "iddddddddddd")
  let deletedat = this.info.deleteData(this.Nid)
  deletedat.subscribe((deldata)=>{
  console.log("deleteeeeeeeeeeeeeeeeeee" , deldata);
  location.reload();
  });
}  

// onDelete(){
//   this.productList.splice(this.index , 1);
//   this.Nname='';
//   this.Ncategory='';
//   this.Nsize='';
// }

onEdit(){
//   console.log("manju", this.index)
//   this.productList[this.index].name = this.Nname; 
//   this.productList[this.index].category = this.Ncategory;
//   this.productList[this.index].size = this.Nsize;
//   this.Nname='';
//   this.Ncategory='';
//   this.Nsize='';
}

}
