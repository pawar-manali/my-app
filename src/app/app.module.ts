import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { firstcomponent } from './first/first.component';
import { InlineComponent } from './inline/inline.component';
import { UserInlineComponent } from './user-inline/user-inline.component';
import { ParentComponent } from './Data-Binding-Component/parent/parent.component';
import { ChildComponent } from './Data-Binding-Component/parent/child/child.component';
import { MySideNavComponent } from './my-side-nav/my-side-nav.component';
import { RoundButtonDirective } from './round-button.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    firstcomponent,
    InlineComponent,
    UserInlineComponent,
    ParentComponent,
    ChildComponent,
    MySideNavComponent,
    RoundButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
