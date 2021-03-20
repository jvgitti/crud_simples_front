import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule} from '@angular/forms';
import { MenuComponent } from './pagina/menu/menu.component';
import { ListarComponent } from './pagina/listar/listar.component';
import { CriarComponent } from './pagina/criar/criar.component';
import { DeletarComponent } from './pagina/deletar/deletar.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListarComponent,
    CriarComponent,
    DeletarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
