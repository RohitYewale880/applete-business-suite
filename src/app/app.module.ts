import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { ServiceComponent } from './pages/services/service/service.component';
import { WhychooseUsComponent } from './pages/WhyChoose/whychoose-us/whychoose-us.component';
import { HowWeWorkComponent } from './pages/how-we-work/how-we-work/how-we-work.component';
import { TestimonilasComponent } from './pages/testimonilas/testimonilas/testimonilas.component';
import { BlogComponent } from './pages/blog/blog/blog.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
