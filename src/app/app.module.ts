import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { IssueComponent } from './issue/issue.component';

const myRouter:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"user_signup",
    component:UserSignupComponent
  },
  {
    path:"user_login",
    component:UserLoginComponent
  },
  {
    path:"entry",
    component:BookEntryComponent
  },
  {
    path:"book_view",
    component:ViewBooksComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"edit",
    component:EditComponent
  },
  {
    path:"delete",
    component:DeleteComponent
  },
  {
    path:"issue",
    component:IssueComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserSignupComponent,
    UserLoginComponent,
    BookEntryComponent,
    ViewBooksComponent,
    SearchComponent,
    EditComponent,
    DeleteComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
