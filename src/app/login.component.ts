import { Component } from '@angular/core';
import { RouterModule,Routes,Router }   from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component ({
	selector: 'app-root',
	templateUrl :'./login.component.html',
	styleUrls:['../../node_modules/bootstrap/dist/css/bootstrap.css','../assets/css/styles.css']
})

export class LoginComponent {
	private router:Router;
	private name:String;


	constructor(router: Router) {
		this.router = router
		this.name = "Ravi"
	}

	textChanged = () => {

		console.log('Change Called')
    	console.log(this.name)
	}

	toApp = () => {
		console.log('called')
    	this.router.navigate(['./index']);
	} 
}