import { Routes } from '@angular/router';
import { Basics } from './basics/basics';
import { App } from './app';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path:'',
        component:Login
    },
    {
        path:'basics',
        component:Basics
    },
];
