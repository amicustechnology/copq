import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes }   from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

const routeConfig:Routes  = [

	{
		path:'index',
		component:AppComponent
	},
	{
		path:'login',
		component:LoginComponent
	},
	{ 
		path: '', 
		component: LoginComponent 
	}
]

@NgModule({

	
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
