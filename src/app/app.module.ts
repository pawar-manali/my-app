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
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserDetailsComponent } from './user-details/user-details.component';

const route:Routes=[
  {path:'Home',component:DashBoardComponent},
  {path:'Table',component:TableComponent},
  {path:'user-details',component:UserDetailsComponent}
]


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
    SideNavComponent,
    DashBoardComponent,
    TableComponent,
    UserDetailsComponent
  ],
  imports: [             //here we import all structures on our webpg
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forRoot(route),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
