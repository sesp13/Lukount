import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SolutionFormComponent } from './components/solution-form/solution-form.component';
import { ContactMessageComponent } from './components/contact-message/contact-message.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactAdvisorComponent } from './components/contact-advisor/contact-advisor.component';
import { FAQComponent } from './pages/faq/faq.component';
import { FaqContainerComponent } from './components/faq-container/faq-container.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SolutionFormComponent,
    ContactMessageComponent,
    ContactComponent,
    ContactAdvisorComponent,
    FAQComponent,
    FaqContainerComponent,
    BlogComponent,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
