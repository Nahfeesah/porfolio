import { HomeComponent } from './main component/home/home.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './main component/about/about.component';
import { ProjectComponent } from './main component/project/project.component';
import { ContactComponent } from './main component/contact/contact.component';


export const routes: Routes = [
    {
        path: 'home',
        data: { animation: 'HomePage' },
        component: HomeComponent
    },
    {
        path: 'about',
        data: { animation: 'AboutPage' },
        component: AboutComponent
    },
    {
        path: 'project',
        data: { animation: 'ProjectPage' },
        component: ProjectComponent
    },
    {
        path: 'contact',
        data: { animation: 'ContactPage' },
        component: ContactComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
