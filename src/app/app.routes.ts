import { Routes} from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductsComponent } from './components/products/products.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { MasterComponent } from './components/master/master.component';
import { MusicComponent } from './components/music/music.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
  /* my navigation routes goes here */

  {
    path: 'master',
    component: MasterComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },

  {
    path: 'contact',
    component: ContactUsComponent
  },

  {
    path: 'product',
    component: ProductsComponent
  },

  {
    path: 'testimonials',
    component: TestimonialsComponent
  },

  {
    path: 'help',
    component: HelpComponent
  },

  {
    path: 'music',
    component: MusicComponent
  },

  {
    path: 'bootstrap',
    component: BootstrapComponent
  },

  {
    path: 'details',
    component: DetailsComponent
  }

];
