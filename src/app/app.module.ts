import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CaioHomeComponent } from './caio-home/caio-home.component';
import { CaioTasksComponent } from './caio-tasks/caio-tasks.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(
    {path: '', component: CaioHomeComponent},
    {path: 'tasks', component: CaioTasksComponent},

  ) ],
  declarations: [ AppComponent, HelloComponent, CaioHomeComponent, CaioTasksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
