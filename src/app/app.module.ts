import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddEditComponent } from './addEdit/addEdit.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchMoviesComponent } from './search/search-movies.component';

import { MoviesService } from './movies/movies.service';
import { SearchService } from './search/search.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'addEdit/:title', component: AddEditComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: MoviesComponent },
  { path: 'movie/:title', component: DetailsComponent },
  { path: 'search/:query', component: SearchMoviesComponent },
  { path: '**',component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddEditComponent,
    MoviesComponent,
    HeaderComponent,
    SearchComponent,
    DetailsComponent,
    PageNotFoundComponent,
    SearchMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MoviesService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
