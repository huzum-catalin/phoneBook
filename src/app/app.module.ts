import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DataListComponent }        from './components/dataList.component';
import { PaginationService } from './services/paginationService'

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule


  ],
  providers: [PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
