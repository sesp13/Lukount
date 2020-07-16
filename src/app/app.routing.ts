import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importación de componentes

//Array de configuración de rutas
const appRoutes: Routes = [
    // {path: 'miRuta', component: MiComponente}

    //Ruta 404
    // {path: '**', component: }
];

export  const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
