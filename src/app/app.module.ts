
import { SaltyService } from './salty.service';
import { PostoviService } from './postovi.service';


import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SaltyBitesComponent } from './salty-bites/salty-bites.component';
import { PostComponent } from './post/post.component';
import { SaltyPostComponent } from './salty-post/salty-post.component';
import { LinksComponent } from './links/links.component';
import { MenuService } from './menu.service';
import { FooterComponent } from './footer/footer.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigacijaComponent,
    HomeComponent,
    ContactComponent,
    SaltyBitesComponent,
    PostComponent,
    SaltyPostComponent,
    LinksComponent,
    FooterComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'restorani',
        component:SaltyBitesComponent
      },
      
     {
       path:'post/:id',
       component:PostComponent
     },
    
    {
      path:'saltyPost/:id',
      component:SaltyPostComponent
    }
    ])
  ],
  providers: [
    PostoviService,
    SaltyService,
    MenuService
  ],
  bootstrap: [AppComponent, NavigacijaComponent,FooterComponent]
})
export class AppModule { }
