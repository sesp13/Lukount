import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FAQComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogEntryComponent } from './pages/blog-entry/blog-entry.component';

//Importación de componentes

//Array de configuración de rutas
const appRoutes: Routes = [
    // {path: 'miRuta', component: MiComponente},
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'faq', component: FAQComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'entrada', component: BlogEntryComponent},
    
    //Ruta 404
    {path: '**', component: HomeComponent}
];

export  const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);