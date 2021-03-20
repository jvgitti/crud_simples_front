import { Component, OnInit } from '@angular/core';
import { RestService } from './../../rest.service'

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent {


  nome = ''
  email = ''
  json:any = []

  criar(){
    this.json = {"nm_usuario":this.nome, "email_usuario":this.email}
    this.user.postData(this.json).subscribe(data=>{
      console.warn(data)
    })
    this.nome = ''
    this.email = ''
  }

  constructor(private user: RestService) {
   }

  ngOnInit(): void {
  }

  

}
