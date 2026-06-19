import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { AboutPageComponentComponent } from './pages/about-page-component/about-page-component.component';
import { BlogPageComponentComponent } from './pages/blog-page-component/blog-page-component.component';
import { ServicesPageComponentComponent } from './pages/services-page-component/services-page-component.component';
import { ContactPageComponentComponent } from './pages/contact-page-component/contact-page-component.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  },
  {
    path: 'about',
    component: AboutPageComponentComponent
  },
  {
    path: 'services',
    component: ServicesPageComponentComponent
  },
  {
    path: 'blog',
    component: BlogPageComponentComponent
  },
  {
    path: 'contact',
    component: ContactPageComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
