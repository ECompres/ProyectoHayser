import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders,
    StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
