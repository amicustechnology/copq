import { Component } from '@angular/core';
import { RouterModule,Routes,Router }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component ({
	selector: 'app-root',
	templateUrl :'./login.component.html',
	styleUrls:['../../node_modules/bootstrap/dist/css/bootstrap.css','../assets/css/styles.css']
})

export class LoginComponent {
	private router:Router;
	private name:String; 
	private completeName:String;
	private password:String; 
	private passwordVisible:boolean = false;
	private loginCorrect:boolean = false;

	constructor(router: Router) {
		this.router = router
		this.name = "Ravi"
	}

	textChanged = () => {

		console.log('Change Called')
    	console.log(this.name)
    	if(this.name == "Jeetendra"){
    		this.passwordVisible = true
    	}
	}



	toApp = () => {
		console.log('called')
		if(this.name == "Jeetendra" && this.password == "abcd1234"){
			this.loginCorrect = true;
			this.completeName = "Jeetendra Choudhary"
		}
    	this.router.navigate(['./index']);
	} 
}