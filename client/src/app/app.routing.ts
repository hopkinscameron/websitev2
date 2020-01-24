import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: '', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(h => h.HomeModule)
	},
	{
		path: 'about', component: AboutComponent
	}
	// { path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
/** The main application routing module. */
export class AppRoutingModule {}
