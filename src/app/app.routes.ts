import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent} from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [

    {title: "Admister Studios | Home", path:'home' , component: HeaderComponent},
    {title: "Admister Studios | About", path:'about' , component: AboutComponent},
    {title: "Admister Studios | Clients", path:'clients' , component: ClientsComponent},
    {title: "Admister Studios | Pricing", path:'pricing' , component: PricingComponent},
    {title: "Admister Studios | Testimonials", path:'testimonials' , component: TestimonialsComponent},
    {title: "Admister Studios | Gallery", path:'gallery' , component: GalleryComponent},
    {title: "Admister Studios | Services", path:'services' , component: ServicesComponent},
    {title: "Admister Studios | Not Found", path:'**' , component: NotfoundComponent},

];
