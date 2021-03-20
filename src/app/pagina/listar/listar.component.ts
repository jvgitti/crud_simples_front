import { Component, OnInit } from '@angular/core';
import { RestService } from './../../rest.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  data : any= [];

  constructor(private user: RestService) {

    this.user.getData().subscribe(data=>{
      console.warn(data)
      this.data = data
    })


   }

  ngOnInit(): void {
  }

}
