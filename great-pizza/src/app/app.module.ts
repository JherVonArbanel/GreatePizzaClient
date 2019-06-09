import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { PizzaTopingsComponent } from './components/pizza-topings/pizza-topings.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpacedJoinPipe } from './pipes/spaced-join.pipe';
import { TopingComponent } from './components/toping/toping.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaTopingsComponent,
    MenuComponent,
    SpacedJoinPipe,
    TopingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
