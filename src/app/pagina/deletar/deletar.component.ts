import { Component, OnInit } from '@angular/core';
import { RestService } from './../../rest.service'

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  data:any = []
  id:any =''
  value:any = ''

  deletar(){
    this.user.deleteData(this.id).subscribe()
    setTimeout(() =>{this.get()}, 500)
  }

  get(){
    this.user.getData().subscribe(data=>{
      console.warn(data)
      this.data = data
    })
  }
  constructor(private user: RestService) {
    this.get()
   }

   

  ngOnInit(): void {
  }

}
