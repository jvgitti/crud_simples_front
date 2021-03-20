import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste';
  nome = '';
  vetor = ['a',1,'b'];
  add(){
    let n = this.nome;
    this.vetor.push(n);
    this.nome = '';
  }
  delete(x:any){
    this.vetor.splice(x,1);
  }
}
