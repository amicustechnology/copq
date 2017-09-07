import { Component } from '@angular/core';


@Component({
  selector: '<router-outlet></router-outlet>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../../node_modules/bootstrap/dist/css/bootstrap.css','../assets/css/styles.css']
})
export class AppComponent {
  title = 'app';
}
