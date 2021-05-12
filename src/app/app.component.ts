import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angularrrrr 12' + VERSION.major;

  title = 'ghsdf'

  // onInput(event: any) {
  //   this.title = event.target.value
  // }
}
