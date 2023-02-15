import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { FilrerByTypePipe } from './filrer-by-type.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [AppComponent, FormComponent, GameComponent, FilrerByTypePipe, SortPipe],
  imports: [BrowserModule, TetrisCoreModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
