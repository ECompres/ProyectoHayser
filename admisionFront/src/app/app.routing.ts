import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LobbyComponent } from './components/lobby/lobby.component';


const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    {path:"login",component: LoginComponent},
    {path:"lobby",component: LobbyComponent},
    { path: "**", component: HomeComponent }
];
    
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);