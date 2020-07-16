import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

//Importación de componentes

//Array de configuración de rutas
const appRoutes: Routes = [
    // {path: 'miRuta', component: MiComponente},
    {path: '', component: HomeComponent},
    
    //Ruta 404
    {path: '**', component: HomeComponent}
];

export  const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);