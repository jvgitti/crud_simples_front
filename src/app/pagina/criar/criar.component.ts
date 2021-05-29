import { Component, OnInit } from '@angular/core';
import { RestService } from './../../rest.service'

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent {


  nome = ''
  senha = ''
  json:any = []

  criar(){
    this.json = {"nm_usuario":this.nome, "senha_usuario":this.senha}
    this.user.postData(this.json).subscribe(data=>{
      console.warn(data)
    })
    this.nome = ''
    this.senha = ''
  }

  constructor(private user: RestService) {
   }

  ngOnInit(): void {
  }

  

}
