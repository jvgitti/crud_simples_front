import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pagina/listar/listar.component';
import { CriarComponent } from './pagina/criar/criar.component';
import { DeletarComponent } from './pagina/deletar/deletar.component';

const routes: Routes = [
  {path: '', component: ListarComponent},
  {path: 'listar', component: ListarComponent},
  {path: 'criar', component: CriarComponent},
  {path: 'deletar', component: DeletarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
