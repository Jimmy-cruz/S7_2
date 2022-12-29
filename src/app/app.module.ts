import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartidosModule } from './compartidos/compartidos.module';
// import { NavbarComponent } from './shared/navbar/navbar.component';
// import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    CompartidosModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
