import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DetailsPageComponent } from './User/details-page/details-page.component';
import { CreateRegistrationComponent } from './Admin/create-registration/create-registration.component';
import { RegistrationListComponent } from './Admin/registration-list/registration-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin/register', pathMatch: 'full' },
  { path: 'details', component: DetailsPageComponent },
  //admin route
  { path: 'admin/register', component: CreateRegistrationComponent },
  { path: 'admin/list', component:  RegistrationListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
