import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools/lib/web-components/web-component-wrapper';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  reactMFEOptions: WebComponentWrapperOptions = {
    remoteEntry: "http://localhost:4201/remoteEntry.js",
    remoteName: "mfe",
    exposedModule: "./App",
    elementName: "react-element"
  }
}
