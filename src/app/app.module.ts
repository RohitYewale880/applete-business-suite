import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { AboutUsComponent } from './component/about/about-us/about-us.component';
import { WhychooseUsComponent } from './component/WhyChoose/whychoose-us/whychoose-us.component';
import { HowWeWorkComponent } from './component/how-we-work/how-we-work/how-we-work.component';
import { TestimonilasComponent } from './component/testimonilas/testimonilas/testimonilas.component';
import { BlogComponent } from './component/blog/blog/blog.component';
import { ContactComponent } from './component/contact/contact/contact.component';
import { ServiceComponent } from './component/services/service/service.component';
import { ServicesPageComponentComponent } from './pages/services-page-component/services-page-component.component';
import { AboutPageComponentComponent } from './pages/about-page-component/about-page-component.component';
import { BlogPageComponentComponent } from './pages/blog-page-component/blog-page-component.component';
import { ContactPageComponentComponent } from './pages/contact-page-component/contact-page-component.component';
import { BannerComponentComponent } from './component/banner-component/banner-component.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ServiceComponent,
    WhychooseUsComponent,
    HowWeWorkComponent,
    TestimonilasComponent,
    BlogComponent,
    ContactComponent,
    HomeComponentComponent,
    ServicesPageComponentComponent,
    AboutPageComponentComponent,
    BlogPageComponentComponent,
    ContactPageComponentComponent,
    BannerComponentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
