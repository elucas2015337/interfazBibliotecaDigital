import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LibrosComponent } from './libros/libros.component';
import { NuLibrosComponent } from './nu-libros/nu-libros.component';
import { NuRevistasComponent } from './nu-revistas/nu-revistas.component';
import { RevistasComponent } from './revistas/revistas.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: 'content', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'content', component: ContentComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'revistas', component: RevistasComponent},
  {path: 'nuLibros', component: NuLibrosComponent},
  {path: 'nuRevistas', component: NuRevistasComponent},
  {path: '**', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
