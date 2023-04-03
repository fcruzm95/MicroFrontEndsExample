import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools/lib/web-components/web-component-wrapper';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ReactPropInterface {
    message: string,
    className: string,
    onClickEvent: () => void,
    onChildEvent: BehaviorSubject<string>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shell';

  reactMFEOptions: WebComponentWrapperOptions = {
    remoteEntry: "http://localhost:4201/remoteEntry.js",
    remoteName: "mfe",
    exposedModule: "./App",
    elementName: "react-1-element"
  }

  mfeProps: ReactPropInterface = {
    message: "shell rules!",
    className: "mfe-border",
    onClickEvent: () => console.log("test"),
    onChildEvent: new BehaviorSubject<string>("test")
  }

  ngOnInit() {
    this.mfeProps.onChildEvent.subscribe(
      (event: string) => {
        console.log("child event",event);
      }
    );
  }
}
