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
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

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
    RoundButtonDirective,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
